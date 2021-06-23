import React, { Component, PureComponent } from "react";

class PureChild extends PureComponent {
  render() {
    console.log("PureChild 组件 render");
    return <span>{`Pure Child Component ${new Date().valueOf()}`}-{this.props.parentCount}</span>;
  }
}

class ComponentChild extends Component {
  render() {
    console.log("ComponentChild 组件 render");
    return <span>{`Child Component - ${new Date().valueOf()}`}-{this.props.parentCount}</span>;
  }
}

function FunctionalChild(props) {
  console.log("FunctionalChild 组件render");
  return (
    <span>{`Functional Child Component - ${new Date().valueOf()}`}-{props.parentCount}</span>
  );
}
function _FunctionalChildMemo(props) {
  console.log("React.memo FunctionalChild 组件render");
  return (
    <span>{`React.memo Functional Child Component - ${new Date().valueOf()}`}-{props.parentCount}</span>
  );
}
const FunctionalChildMemo = React.memo(_FunctionalChildMemo)
export {
  FunctionalChild,
  PureChild,
  ComponentChild,
  FunctionalChildMemo
}