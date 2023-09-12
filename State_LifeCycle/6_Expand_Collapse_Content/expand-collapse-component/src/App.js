import React, { Component } from "react";
// import ExpandContent from "./components/ExpandContent";
// import CollapseContent from "./components/CollapseContent";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpand: false,
    };
  }
  // expandContent = () => {
  //   this.setState({ isExpand: true });
  // };
  // collapseContent = () => {
  //   this.setState({ isExpand: false });
  // };
  expandContent = ()=>{
    if(this.state.isExpand){
      this.setState({isExpand:false})
    }else{
      this.setState({isExpand:true})
    }
  }
  render() {
    const { isExpand } = this.state;
    // if (isExpand) {
    //   return <ExpandContent collapse={this.collapseContent} />;
    // } else {
    //   return <CollapseContent expand={this.expandContent} />;
    // }
    return (
      <>
        <div style={{ backgroundColor: "green", textAlign: "center" }}>
          <h3>Conditional Rendering</h3>{" "}
        </div>
        <button type="button" onClick={this.expandContent}>{isExpand?"Đóng giới thiệu":"Xem giới thiệu"}</button>

        {isExpand&&
        <div>
          <h4>Giới thiệu</h4>
          <p>
            Trong ReactJs, đôi khi bạn có một số component và tùy thuộc vào từng
            điều kiện ví dụ như trạng thái của state, props,...mà bạn muốn hiển
            thị một hoặc môt số component nào đào. Khi đó bạn có thể sử dụng
            Conditional rendering để render ra component mà bạn mong muốn
          </p>
        </div>}
      </>
    );
  }
}
