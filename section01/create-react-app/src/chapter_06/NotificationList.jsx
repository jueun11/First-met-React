// import React from "react";
// import Notification from "./Notification";

// const reservedNotifications = [
//   {
//     message: "안녕하세요, 오늘 일정을 알려드립니다.",
//   },
//   {
//     message: "안녕하세요, 오늘 일정을 알려드립니다.",
//   },
//   {
//     message: "안녕하세요, 오늘 일정을 알려드립니다.",
//   },
// ]

// let timer;

// class NotificationList extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       notifications: [],
//       //빈 배열을 state에 넣음
//       //생성자에서는 앞으로 사용할 데이터를 state에 넣어 초기화한다. 
//     };
//   }

//   componentDidMount() {
//     const { notifications } = this.state;
//     timer = setInterval(() => {
//       if (notifications.length < reservedNotifications.length) {
//         //미리 만들어둔 알림데이터 배열인 reservedNotifications부터 알림 데이터를 하나씩 가져와서
//         const index = notifications.length;
//         notifications.push(reservedNotifications(index));
//         //state에 있는 빈 배열에 push로 넣는다.
//         this.setState({
//           notifications: notifications,
//           //setState로 넣어준 배열을 업데이트
//           //state를 업데이트해주기 위해 setState함수를 사용하였다.
//         });
//       } else{
//         clearInterval(timer);
//       }
//     }, 1000);
//     //setInterVal로 1초마다 해당 식 실행
//   }

//   render() {
//     return (
//       <div>
//         {this.state.notifications.map((notification) => {
//           return <Notification message={notification.message} />
//         })}
//       </div>
//     )
//   }
// }

// export default NotificationList;

//*버전업데이트로 인한 수정


import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        id: 1,
        message: "안녕하세요, 오늘 일정을 알려드립니다.",
    },
    {
        id: 2,
        message: "점심식사 시간입니다.",
    },
    {
        id: 3,
        message: "이제 곧 미팅이 시작됩니다.",
    },
];

var timer;

class NotificationList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notifications: [],
        };
    }

    componentDidMount() {
        const { notifications } = this.state;
        timer = setInterval(() => {
            if (notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({
                    notifications: notifications,
                });
            } else {
                this.setState({
                    notifications: [],
                });
                clearInterval(timer);
            }
        }, 1000);
    }

    componentWillUnmount() {
        if (timer) {
            clearInterval(timer);
        }
    }

    render() {
        return (
            <div>
                {this.state.notifications.map((notification) => {
                    return (
                        <Notification
                            key={notification.id}
                            id={notification.id}
                            message={notification.message}
                        />
                    );
                })}
            </div>
        );
    }
}
//일단은 setState로 state를 업데이트 해주는 것만 알고 넘어가자

export default NotificationList;
