import React from "react";

class App extends React.Component {
  state = {
    isLoading: true,
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 5000);
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}

export default App;

/*
  처음 App 클래스가 생성되면서 state 객체에 있는 isLoading 필드에
  값이 true가 된다.
  componentDidMount() 메소드가 실행되고 setTimeout() 메소드가 5초 후
  자동으로 실행된다.
  최초 render() 메소드가 실행되고 5초 후 실행되는 setTimeout() 메소드가 
  setState 메소드를 실행하기 때문에 render() 메소드가 다시 실행된다.
*/
