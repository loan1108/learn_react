import React, { Component } from "react";
import ExpandContent from "./components/ExpandContent";
import CollapseContent from "./components/CollapseContent";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpand: false,
    };
  }
  expandContent = () => {
    this.setState({ isExpand: true });
  };
  collapseContent = () => {
    this.setState({ isExpand: false });
  };
  render() {
    const { isExpand } = this.state;
    if (isExpand) {
      return <ExpandContent collapse={this.collapseContent} />;
    } else {
      return <CollapseContent expand={this.expandContent} />;
    }
  }
}
