import React, { Component, PureComponent, useState, useEffect } from "react";

class PureChild extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      array: [1,2,3,4]
    }
    this.interval = null;
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      const { array } = this.state;
      array.push(array.length + 1)
      this.setState({
        array
      })
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  render() {
    console.log("PureChild 组件 render");
    return <span>{`Pure Child Component ${this.state.array.length}`}</span>;
  }
}

class ComponentChild extends Component {
  constructor(props) {
    super(props)
    this.state = {
      array: [1,2,3,4]
    }
    this.interval = null;
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      const { array } = this.state;
      array.push(array.length + 1)
      this.setState({
        array
      })
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  render() {
    console.log("ComponentChild 组件 render");
    return <span>{`Child Component - ${this.state.array.length}`}</span>;
  }
}

function FunctionalChild() {
  const [array, setArray] = useState([1,2,3,4]);
  useEffect(() => {
    const interval = setInterval(() => {
      array.push(array.length + 1)
      setArray(array)
    }, 1000)
    return () => clearInterval(interval)
  }, [])
  console.log("FunctionalChild 组件render");
  return (
    <span>{`Functional Child Component - ${array.length}`}</span>
  );
}
export {
  FunctionalChild,
  PureChild,
  ComponentChild
}