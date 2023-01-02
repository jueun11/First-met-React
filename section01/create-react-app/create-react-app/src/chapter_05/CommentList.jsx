import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name:"김주은",
    comment:"안녕하세요 김주은입니다.",
  },
  {
    name:"박하나",
    comment:"props값을 늘리는 것만으로도",
  },
  {
    name:"김주은",
    comment:"브라우저에 표시되는 엘리먼트 갯수가 늘어난다.",
  }
]

function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
        return(
          <Comment name = {comment.name} comment = {comment.comment} />
          // 상속을 알아야한다. 객체지향을 배울때 봤던 것. 해당 CommentList안에 Comment.jsx 파일에 있는 컴포넌트를 가져온 방식이다. Comment.jsx쪽에 위의 배열객체가 드가있기 때문에 Comment컴포넌트.프로퍼티로 불러와야했다.
          //이때 대소문자를 잘못 쓰지 않도록 주의해야한다.
        );
      })}
    </div>
  );
}
// function CommentList(props) {
//   return (
//     <div>
//       <Comment name = {"김주은"} Comment = {"안녕하세요, 김주은입니다."}/>
//       <Comment name = {"박하나"} Comment = {"props값을 늘리는 것만으로도"}/>
//       <Comment name = {"이지현"} Comment = {"브라우저에 표시되는 엘리먼트 갯수가 늘어난다."}/>
//     </div>
//   );
// }

export default CommentList;