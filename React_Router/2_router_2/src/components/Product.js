import React from "react";
import { useParams } from "react-router-dom";

export default function Product() {
  let { categoryId } = useParams();
  return(
    <div>
        <h3>Id selected{categoryId}</h3>
    </div>
  )
}
