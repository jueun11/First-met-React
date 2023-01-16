import React, {useState} from "react";
//useState쓰려면 첨에 import에 가져와야 오류안남
function SignUp(props) {
  //함수 컴포넌트 만들기
  const [name, setName] = useState("");
  const [gender,setGender] = useState("남자");
  //state생성, name이 state값, setName이 함수명 set을 붙여쓰는게 일반적 초기값"""
  const handleChageName = (event) => {
    //handle은 보통 이벤트발생시 내용임
    setName(event.target.value);
    //setName이라는 state값을 이벤트가 발생한 곳의 value로 바꿈
  };
  const handleSubmit = (event) => {
    alert(`이름: ${name}, 성별: ${gender}`);
    event.preventDefault();
    //리턴과 같은 역할을 한다. 이벤트가 작동하지 않도록 함 이거 없으면 입력 내용 사라짐
  };
  //컴포넌트 안에 컴포넌트가 있는 방식
  const handleChangeGender = (event) =>{
    setGender(event.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      {/* 전송하면 handleSubmit함수 실행 */}
      <label>
        이름: 
        <input type="text" value={name} onChange={handleChageName}/>
      </label>
      <br/>
      <label>
        성별:
        <select value={gender} onChange={handleChangeGender}>
          <option value="남자">남자</option>
          <option value="여자">여자</option>
        </select>
      </label>
      <button type="submit">제출</button>
    </form>
  );
    //리턴 뒤에는 ()괄호하고 세미클론
}

export default SignUp;