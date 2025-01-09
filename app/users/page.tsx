import React from 'react'

interface User {
  id: number;
  name:string;
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
    <p>{new Date().toLocaleTimeString()}</p>
    <ul>{user.map(user => <li key={user.id}>{user.name}</li>)}</ul>
    </>
  )
}

export default UserPage