import React from 'react'

const Courses = () => {

  async function courses(){

    let token = localStorage.getItem("token");
    let response = await fetch("http://localhost:8080/courses",{
      headers: {"Content-type" : "application/json",
        token : token
      },
      method : "GET",

    });
    let data = await response.json();
    console.log(data)

  }




    
  return (
    <div>
      <button onClick={courses}> See courses </button>
    </div>
  )
}

export default Courses
