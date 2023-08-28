import React, { Component } from "react";

export default class ExpandContent extends Component {
  render() {
    return (
      <div>
        <button type="button" onClick={this.props.collapse}>Đóng giới thiệu</button>
        <div>
          <h4>Giới thiệu</h4>
          <p>
            Trong ReactJs, đôi khi bạn có một số component và tùy thuộc vào từng
            điều kiện ví dụ như trạng thái của state, props,...mà bạn muốn hiển
            thị một hoặc môt số component nào đào. Khi đó bạn có thể sử dụng
            Conditional rendering để render ra component mà bạn mong muốn
          </p>
        </div>
      </div>
    );
  }
}
