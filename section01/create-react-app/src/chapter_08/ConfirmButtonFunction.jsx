import React, { useState } from "react";

function ConfirmButtonFunction(props)  {
    const [isConfirmed, setIsConfirmed] = useState(false);
    //함수 컴포넌트이기에 useState훅 사용
    const handleConfirm = () => {
      //arrow function으로 이벤트 헨들러 만듬
      setIsConfirmed((prevIsconfirmed) => !prevIsconfirmed);
    };
    return (
      <button onClick = {handleConfirm} disabled = {isConfirmed}>
        {isConfirmed ? "확인됨" : "확인하기"}
        </button>
    );
  }

export default ConfirmButtonFunction;