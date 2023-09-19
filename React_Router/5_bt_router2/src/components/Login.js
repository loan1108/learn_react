import React ,{useState} from 'react'
import {useNavigate} from "react-router-dom"
export default function Login() {
    const [form, setForm] = useState({});
    const navigate = useNavigate();
    function handleChange(e){
        setForm({...form, [e.target.name]:e.target.value})
    }
    function handleSubmit(e){
        e.preventDefault();
      
        if(form.email ==="admin@gmail.com"&&form.password==="letmein"){
            alert("Login successfully!!");
            navigate("/employees")

        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='email'>Email</label>
                <input type="text" name="email" value={form.email}onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input type="text" name="password" value={form.password}onChange={handleChange}/>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}
