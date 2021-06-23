/**
 * DEMO 1 新旧props相同
 */
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ComponentChild, FunctionalChild, PureChild, FunctionalChildMemo } from "./components/children-props";

class Parent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      parentCount: 0
    }
    this.interval = null;
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        number: 0 // 设置和初始值相等的值
      })
    }, 1000)
  }
  componentWillUnmount () {
    clearInterval(this.interval)
  }
  render() {
    const { parentCount } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* React.PureComponent */}
          <PureChild parentCount={parentCount} />
          {/* React.Component */} 
          <ComponentChild parentCount={parentCount} />
          {/* 函数式组件 */}
          <FunctionalChild parentCount={parentCount} />
          <FunctionalChildMemo parentCount={parentCount} />
        </header>
      </div>
    );
  }

}

export default Parent;