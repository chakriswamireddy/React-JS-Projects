
import React from 'react'
import { useState, useEffect } from 'react'

// import axios from 'axios';




function UserDetails({id}) {

  const [userData,setUserData] = useState([])
  const [todoData,setTodoData] = useState([])
  let userId = 1

 
  //fetching todos and userdetails api

  useEffect(() => {
    if (id>0) {
          userId = ~~(id/20)+1       //setting userid = 1 for 1-10, 2 for 21-40
          if (id%20===0) {
            userId=userId-1               //if id =20,40,60 => the userid must be 1,2,3 respectively
          }
      async function fetchData() {
        const response1 = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        const response2 = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const json1 = await response1.json();
        const json2 = await response2.json();
        setTodoData(json1);
        setUserData(json2);
      }
      fetchData();
    }
  }, [id,userId]);
    


  return (
    <div>
     
     {(id>0 ) && (
      <>
        <h4 id='user-heading'>User Details</h4>
        <table className="table" id='user-table'>
        
        <tr>
          <td>Todo ID </td>
          <td>{todoData.id} </td>
        </tr>
        <tr id='title-row'>
          <td>Todo Title</td>
          <td>{todoData.title} </td>
          
        </tr>

        
        <tr>
          <td>User ID</td>
          <td>{userData.id}</td>
  
        </tr>
        <tr>
          <td>Name</td>
          <td>{userData.name} </td>
        </tr>
        <tr>
          <td>Email</td>
          <td>{userData.email} </td>
        </tr>
       </table>
      </>
     )}
      
    </div>
  )
}

export default UserDetails