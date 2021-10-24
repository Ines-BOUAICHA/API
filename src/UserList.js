import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import './App.css';

function UserList(){
    const [Data , setUsers]= useState([]) ;
    useEffect(()=>
    {
       axios.get('https://jsonplaceholder.typicode.com/users')
       .then((response) => setUsers(response.data))
       .catch(error=>console.log(error));
      
    },[]
  );
return (
    
    <div>
          <h1>Users Profile List </h1>
    <ul className="users-list">
{Data.map(user=>
<li className="card" key={user.id}>
{user.name}<br/>
{user.email}<br/>
{user.phone}<br/>
</li>) }
    </ul>
  

 </div>
    
);

}
export default  UserList  ;