import React, { Component, PureComponent } from "react";

class PureChild extends PureComponent {
  render() {
    console.log("PureChild 组件 render");
    return <span>{`Pure Child Component ${this.props.parentArray.length}`}</span>;
  }
}

class ComponentChild extends Component {
  render() {
    console.log("ComponentChild 组件 render");
    return <span>{`Child Component - ${this.props.parentArray.length}`}</span>;
  }
}

function FunctionalChild(props) {
  console.log("FunctionalChild 组件render");
  return (
    <span>{`Functional Child Component - ${props.parentArray.length}`}</span>
  );
}
function FunctionalChild2(props) {
  console.log("React.memo FunctionalChild 组件render");
  return (
    <span>{`React.memo Functional Child Component - ${props.parentArray.length}`}</span>
  );
}
const FunctionalChildMemo = React.memo(FunctionalChild2)
export {
  FunctionalChild,
  FunctionalChildMemo,
  PureChild,
  ComponentChild
}