import React from 'react'
import {Formik} from "formik"
export default function Login() {
  return (
    <Formik >
        <form>
            <div>
                <label htmlFor='userName'>UserName</label>
                <p><input type="text" name="userName"/></p>
            </div>
            <div>
                <label htmlFor='userName'>Password</label>
                <p><input type="password"name="userName"/></p>
            </div>
            <button type="submit">Login</button>
        </form>
    </Formik>
  )
}
