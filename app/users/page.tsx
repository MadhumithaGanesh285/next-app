import React from 'react'

interface User {
  id: number;
  name:string;
  email:string;
}

const UserPage = async() => {
  //DISABLING CACHE 
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {cache: 'no-store'})

  //KEEP DATA FRESH FOR CERTAIN PERIOD, THIS MEANS GET DATA FROM BACKEND EVERY 10 SEC
  // const res = await fetch('https://jsonplaceholder.typicode.com/users', {next : {revalidate: 10}});
  const user: User[] = await res.json()
  return (
    <>
    <h1>Users</h1>
    {/* <p>{new Date().toLocaleTimeString()}</p> */}
    <table className='table table-bordered'>
      <thead>
        <tr>
          <th>
            Name
          </th>
          <th>
            Email
          </th>
        </tr>
      </thead>
      <tbody>
        {user.map(user => 
        <tr key={user.id}>
          <td>
            {user.name}
          </td>
          <td>
            {user.email}
          </td>
        </tr>
      )}
      </tbody>
    </table>
    </>
  )
}

export default UserPage