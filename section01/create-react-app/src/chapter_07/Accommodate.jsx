import React, { useState, useEffect } from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;
//최대 10

function Accommodate(props) {
    const [isFull, setIsFull] = useState(false);
    //용량이 가득 찼는지 isFull에 false를 저장한다.
    const [count, increaseCount, decreaseCount] = useCounter(0);
    //해당 배열은 초깃값으로 0을 가진다.

    //*의존성 배열이 없는 형태. 컴포넌트가 마운트 된 직후에 호출, 컴포넌트가 업데이트 될 때마다 호출
    useEffect(() => {
        console.log("======================");
        console.log("useEffect() is called.");
        console.log(`isFull: ${isFull}`);
        //용량이 가득 찻는지 isFull호출. 초깃값은 false이다.
    });
    //의존성 배열이 없음

    //*의존성 배열이 있는 형태 컴포넌트가 마운트 된 직후에 호출, 카운트 값이 바귈때마다 호출된다.
    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY);
        //>=로 true, false구별 count값이 10이 되면 true가 된다.
        console.log(`Current count value: ${count}`);
        //현재 카운트 수를 콘솔에 보여줌
    }, [count]);
    //count값이 바뀌면 실행. isFull이 true로 버튼이 비활성화 되면 해당 식은 적용되지않는다. 즉 이것은 setIsFull로 최댓값을 활용해 제어하기 위한 Effect라고 보면된다.

    return (
        <div style={{ padding: 16 }}>
            <p>{`총 ${count}명 수용했습니다.`}</p>

            <button onClick={increaseCount} disabled={isFull}>
              {/* disabled값이 true가 되면 비활성화 된다. 위 useEffect에 따라 10과 같거나 커지면 isFull이 true가 되어 버튼이 비활성화 되는 방식이다.*/}
                입장
            </button>
            <button onClick={decreaseCount}>퇴장</button>
            {/* 클릭하면  decreaseCount 함수가 실행된다.*/}
            {isFull && <p style={{ color: "red" }}>정원이 가득찼습니다.</p>}
        </div>
    );
}

export default Accommodate;