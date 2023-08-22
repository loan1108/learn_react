import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import StudentInfoComponent from './components/StudentInfoComponent';
const root = ReactDOM.createRoot(document.getElementById('root'));
const data =[
  {id:1,name:"Nguyễn Văn A", age: 18, address:"Hà Nội"},
  {id:2,name:"Nguyễn Văn B", age: 18, address:"Tp.Hồ Chí Minh"},
  {id:3,name:"Nguyễn Văn C", age: 18, address:"Hà Nội"},
  {id:4,name:"Nguyễn Văn D", age: 18, address:"Tp.Hồ Chí Minh"},
  {id:5,name:"Nguyễn Văn E", age: 18, address:"Hà Nội"},
  {id:6,name:"Nguyễn Văn F", age: 18, address:"Hà Nội"},
  {id:7,name:"Nguyễn Văn G", age: 18, address:"Tp.Hồ Chí Minh"},
  {id:8,name:"Nguyễn Văn H", age: 18, address:"Hà Nội"},
  {id:9,name:"Nguyễn Văn I", age: 18, address:"Tp.Hồ Chí Minh"},
  {id:10,name:"Nguyễn Văn K", age: 18, address:"Hà Nội"},

]
root.render(
  <StudentInfoComponent data= {data}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
