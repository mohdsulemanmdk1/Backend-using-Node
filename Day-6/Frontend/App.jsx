import React from 'react'
import ReactDOM from 'react-dom/client';
import SignUp from './components/signUp';
import SignIn from './components/SignIn';
import Courses from './components/Courses'
let App = () => {

     return <div>
        <SignUp/>
        <SignIn/>
        <Courses/>

     </div>
}
let root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<App />)