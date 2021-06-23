import React, { Component, PureComponent, useState, useEffect } from "react";

class PureChild extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
    this.interval = null;
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        counter: 0
      })
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  render() {
    console.log("PureChild 组件 render");
    return <span>{`Pure Child Component ${new Date().valueOf()}`}</span>;
  }
}

class ComponentChild extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
    this.interval = null;
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        counter: 0
      })
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  render() {
    console.log("ComponentChild 组件 render");
    return <span>{`Child Component - ${new Date().valueOf()}`}</span>;
  }
}

function FunctionalChild() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(0)
    }, 1000);
    return () => clearInterval(interval)
  }, [])
  console.log("FunctionalChild 组件render");
  return (
    <span>{`Functional Child Component - ${new Date().valueOf()}`}</span>
  );
}
export {
  FunctionalChild,
  PureChild,
  ComponentChild
}