import React, { useState } from "react";

function useCounter(initialValue) {
    const [count, setCount] = useState(initialValue);
    //count는 초기값으로 initialValue를 갖는다.
    const increaseCount = () => setCount((count) => count + 1);
    //increaseCount 함수가 작동하면 setCount의 count가 +1이 된다.
    const decreaseCount = () => setCount((count) => Math.max(count - 1, 0));
    //decreaseCount 함수가 작동하면 setCount의 count가 -1이 된다. 최저 0
    return [count, increaseCount, decreaseCount];
}

export default useCounter