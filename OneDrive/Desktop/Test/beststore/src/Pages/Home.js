import React, { useEffect, useState } from 'react';
import axios from 'axios';
export function Home(){
   
      const [users, setUsers] = useState([]);
      
    
      const fetchUsers = async () => {
        console.log("true");
    
        try {
           
          // let url = 'http://localhost:5000/backendData'; // URL for your Node.js backend
              let url = 'https://testdeployment-1.onrender.com/backend'; // URL for your live by render  Node.js backend

                    
          // Fetch the users with query parameters
          const response = await axios.get(`${url}`);
           console.log(response.data);
          setUsers(response.data);
        } catch (err) {
          console.log('Error fetching users');
        } finally {
          console.log("false");
        }
      };
    
      useEffect(() => {
        fetchUsers(); // Initial fetch of users when the component mounts
      }, []);
    
      return (
        <>
        <h1 className='container'>User List : </h1>

<div className="row mx-5 px-5 ">
  
  {users.length > 0 ? (
    users.map((user, index) => (
      
      <div className="col-md-4" key={index}>
        <div className="card mb-4 shadow-sm">
          <div className="card-body">
            <h5 className="card-title">{user.name}</h5>
            <p className="card-text">
              <strong>Age:</strong> {user.age}
            </p>
            <p className="card-text">
              <strong>Address : </strong> {user.aof}
            </p>
            <div className="d-flex justify-content-between">
              <span className=" ">Age Group: {user.age >= 18 ? 'Adult' : 'Minor'}</span>
              <span className="badge bg-success">Active</span>
            </div>
          </div>
        </div>
      </div>
    ))
  ) : (
    <p>No users found</p>
  )}
</div>

          </>
      );
    };
    
    






// ---------------------------------------------------------------------------------------------------------------------
//   const [users, setUsers] = useState(null);

//   useEffect(() => {
//     // Fetch data from the backend
//     fetch('http://localhost:5000/backendData')
//       .then(response => response.json())
//       .then(users => setUsers(users))
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);
//     return(
    
//     <div className="App">
//       <h1>Data from Backend:</h1>
//       {users ? <p>{users.name}</p> : <p>Loading...</p>}
//     </div>
//   );


  
        
     
