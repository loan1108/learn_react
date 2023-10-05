import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Form from "./Form";
import axiosClient from "../api/axiosClient";
export default function Details() {
  const { bookId } = useParams();
  const [book, setBook] = useState({
    id: "",
    title: "",
    quantity: "",
  });
  useEffect(() => {
    console.log(book)
    async function fetchBook() {
      const data = await axiosClient.get(`${bookId}`)
      setBook({...book, id:data.id, title:data.title, quantity:data.quantity})
    }
    fetchBook();
  }, []);
  function handleEditBook(values){
    async function updateBook(){
      await axiosClient.patch(`${bookId}`,{
        title:values.title,
        quantity:values.quantity
      })
      alert("Update successfully! Back to home to see the change")
    }
    updateBook();
  }
  return (
    <div>
      <Form book={book} btnName="Update" pageTitle="Edit" handleEditBook={handleEditBook} isCreateBook={false} />
    </div>
  );
}
