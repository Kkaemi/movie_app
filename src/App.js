import React from "react";

// 반드시 React.Component를 상속받아야 한다.
// class component는 render 메소드를 자동으로 실행한다.
class App extends React.Component {
  state = {
    count: 0,
  };
  add = () => {
    // 이런 식으로 값을 직접 주면 render 함수가 실행 안된다.
    // this.state.count = 1;
    // setState 함수를 실행하면 render 함수가 다시 실행된다.
    this.setState((current) => ({ count: current.count + 1 }));
  };
  minus = () => {
    // 이런 식으로 값을 직접 주면 render 함수가 실행 안된다.
    // this.state.count = -1;
    // setState 함수를 실행하면 render 함수가 다시 실행된다.
    this.setState((current) => ({ count: current.count - 1 }));
  };
  render() {
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
