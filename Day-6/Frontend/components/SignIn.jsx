import React from 'react'
import { useState } from 'react'
const SignIn = () => {
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    

    async function compare() {
        let token = localStorage.getItem("token");
        let response = await fetch("http://localhost:8080/signIn", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
                username : user,
                password: password,
               
            })
        })
        let data = await response.json()



    }
    return <div>

        <form  onSubmit={compare} >

        <input placeholder='enter username' onChange={(e) => {
            setUser(e.target.value)
        }} />
        <input placeholder='enter password' type='password' onChange={(e) => {
            setPassword(e.target.value)
        }} />
       
            <button type='submit'> Sign Up</button>
            </form>
    </div>
}

export default SignIn

{/* <button onClick={() => {
    add(),
    setInput("")
    }}>add task</button> */}