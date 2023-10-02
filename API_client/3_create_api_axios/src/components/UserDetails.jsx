import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import axiosClient from '../api/axiosClient';
import routes from '../routes';
export default function UserDetails() {
  const{userId} = useParams();
  const [user,setUser] = useState({});
  useEffect(()=>{
    async function fetchUser(){
      const data = await axiosClient.get(`${routes.api.users.list}/${userId}`);
      setUser({...user,id:data.id, name:data.name, birthday:data.birthday})
      
    }
    fetchUser()
  },[])
  function handleSubmit(e){
    e.preventDefault();
    if(window.confirm ("Do you want to update this user infor?")){
      console.log(user.id, user.name, user.birthday); 
      async function updateUser(){
      await axiosClient.patch(`${routes.api.users.list}/${userId}`,{
          name: user.name, 
          birthday:user.birthday
        })
      }
      updateUser();    
    }
  }
  function handleChange(e){
    setUser({...user, [e.target.name]:e.target.value})
    
  }
  
  return (
    <>
    <h1>User details</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='id'>Id</label>
        <input type="number" name="id" value={user.id}onChange={handleChange} disabled/>
      </div>
      <div>
        <label htmlFor='name'>Name</label>
        <input type="text" name="name" value={user.name} onChange={handleChange}/>
      </div>
      <div>
        <label htmlFor='birthday'>Birthday</label>
        <input type="date" name="birthday" value={user.birthday} onChange={handleChange}/>
      </div>
      <button type="submit">Edit</button>
    </form>
    
    </>
  )
}
