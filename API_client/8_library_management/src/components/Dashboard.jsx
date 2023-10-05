import React, { useEffect, useState } from 'react'
import axiosClient from '../api/axiosClient';
import "bootstrap/dist/css/bootstrap.min.css";
import routes from '../routes'
import { Link } from 'react-router-dom';
export default function Dashboard() {
  const[list, setList] = useState([]);
  useEffect(()=>{
    async function fetchList(){
      const data = await axiosClient.get() 
      console.log(data)
      setList(data);
    }
    fetchList();
  },[])
  function handleDelete(id){
    async function deleteBook(){
     await axiosClient.delete(`${id}`); 
     const newList = list.filter(book => book.id !== id); 
     setList(newList)
    }
    deleteBook()
  }
  return (
   <div style={{margin:"20px"}}>
   <div className='d-flex justify-content-between mb-5 mt-5' > 
    <h1>Library</h1>
    <p><Link to={routes.web.books.creation}type="button" style={{width:"150px"}}className='btn btn-success'>Add a new Book</Link></p>
   </div>
   <div>
    <table className='table'>
      <thead>
        <tr>
          <th scope='col'>Title</th>
          <th scope='col'>Quantity</th>
          <th scope='col'>Actions</th>
        </tr>
      </thead>
      <tbody>
      {list && list.map(book => (
        <tr key={book.id}>
          <td>{book.title}</td>
          <td>{book.quantity}</td>
          <td className='btn-group' role='group'>
            <Link to={`${routes.web.books.index}/${book.id}`} type="button" className='btn btn-info'>Edit</Link>
            <button type="button" className='btn btn-danger' onClick={()=>handleDelete(book.id)}>Delete</button>
          </td>
        </tr>
      ))}
      </tbody>
    </table>
   </div>
   </div>
  )
}
