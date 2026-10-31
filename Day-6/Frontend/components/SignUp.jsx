import React from 'react'
import { useState } from 'react'
const SignUp = () => {
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    async function add() {
        let response = await fetch("http://localhost:8080/signUp", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
                username : user,
                password: password,
                email : email
            })
        })
        let data = await response.json()

    }
    return <div>

        <form  onSubmit={add} >

        <input placeholder='enter username' onChange={(e) => {
            setUser(e.target.value)
        }} />
        <input placeholder='enter password' type='password' onChange={(e) => {
            setPassword(e.target.value)
        }} />
        <input placeholder='enter email' onChange={(e) => {
            setEmail(e.target.value)
        }} />





            <button type='submit'> Sign Up</button>
            </form>
    </div>
}

export default SignUp

{/* <button onClick={() => {
    add(),
    setInput("")
    }}>add task</button> */}