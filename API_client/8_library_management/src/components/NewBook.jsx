import React,{useState} from 'react'
import Form from './Form'
import axiosClient from '../api/axiosClient';
import { v4 as uuidv4 } from 'uuid';
export default function NewBook() {
  const[book,] = useState({
    title:"",
    quantity:""
  })
  function handleCreateBook(values){
    console.log(values); 
    async function addBook(){
      await axiosClient.post("",{
        id:uuidv4, 
        title:values.title,
        quantity:values.quantity
      })
      alert("Add book successfully!! Back to home to see the change")
    }
    addBook()
  }
  return (
    <>
      <Form book={book} btnName="Add" pageTitle="Add a new book" handleCreateBook={handleCreateBook} isCreateBook={true}/>
    </>
    
  )
}
