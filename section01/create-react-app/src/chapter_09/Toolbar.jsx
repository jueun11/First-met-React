import React from "react";

const style = {
  wrapper:{
    //객체 만들때는 프로퍼티명 : {}형식 프로퍼티 만들고나면 , 하기
    padding: 16,
    display: "flex",
    flexDirection: "row",
    borderBotton: "1px soild grey",
  },
  // ,계속해줌
  greeting: {
    marginRight: 8
    //마지막꺼는 사실 안해도댐
  },
};

function Toolbar(props) {
  const {isLoggedIn, onClickLogin, onClickLogout} = props;
  //props를 각 변수에 넣어준다
  return (
    <div style={style.wrapper}>
      {isLoggedIn && <span style={style.greeting}>환영합니다!</span>}
      {/* 누르면 true가 됨. ture이기에 뒤에 부분 실행 */}
      {isLoggedIn ? (
        <button onClick={onClickLogout}>로그아웃</button>
        // true로 해당부분 실행. 렌더. 버튼이 로그아웃 버튼으로 바뀐다. onClickLogout컴포넌트 생성, 이거누르면 이제 false로 바뀐다.
        ) : (<button onClick={onClickLogin}>로그인</button>)
        //로그인으로 버튼을onClickLogout버튼으로 만든 후 누르면 flase이기에 : 뒤의 부분 실행
    }
    </div>
  );
}
export default Toolbar;
//&&로 앞의 조건이 참이면 뒤에 부분 실행, 참 아니면 앞에부분 실행