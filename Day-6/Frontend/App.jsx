import React from 'react'
import ReactDOM from 'react-dom/client';
import SignUp from './components/signUp';
import SignIn from './components/SignIn';
let App = () => {

     return <div>
        <SignUp/>
        <SignIn/>

     </div>
}
let root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<App />)