import React,{useState} from "react"


function App() {
const [form, setForm] = useState({});
const MESSAGE_ERROR ={
  email:"Email error",
  password:"Password error"
};
const REGEX ={
  email:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  password: /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/
}
function handleChange(e){
  let error = REGEX[e.target.name].test(e.target.value)?"":MESSAGE_ERROR[e.target.name];
  setForm({...form, [e.target.name]:{value:e.target.value, error:error}})
}
function handleSubmit(){
  const isFilled = form.email && form.email.value && form.password && form.password.value;
  const isError = isFilled &&(form.email.error||form.password.error);
  alert(isFilled && !isError?"Login in successfully!!":"Please fill out all the fiels")
}
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input name="email" value={form.email&&form.email.value||""} onChange={handleChange}/>
          {form.email &&form.email.error&&(
            <p>{MESSAGE_ERROR.email}</p>
          )}
        </div>
        <div>
          <label>Password</label>
          <input name="password" value={form.password&&form.password.value||""} onChange={handleChange}/>
            {form.password && form.password.error &&(
              <p>{MESSAGE_ERROR.password}</p>
            )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
