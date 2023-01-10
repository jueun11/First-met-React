import React from "react";

class ConfirmButtonClassFieldsSyntax extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isConfirmed: false,
    };
    //확연여부 저장용 state. 초기값은 fales

    // this.handleConfirm = this.handleConfirm.bind(this);
    //!bind지워줌
  }

  handleConfirm = () => {
    //! arrow function으로 변경
    this.setState((prevState) => ({
      isConfirmed: !prevState.isConfirmed,
    }));
  }
  //onClick이벤트 제어를 위한 함수.

  render() {
    return (
      <button
        onClick = {this.handleConfirm}
        disabled = {this.state.isConfirmed}
        >
          {this.state.isConfirmed ? "확인됨" : "확인하기"}
        </button>
    );
  }
}

export default ConfirmButtonClassFieldsSyntax;