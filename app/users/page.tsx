import React from 'react'

interface User {
  id: number;
  name:string;
}

const UserPage = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const user: User[] = await res.json()
  return (
    <>
    <h1>Users</h1>
    <ul>{user.map(user => <li key={user.id}>{user.name}</li>)}</ul>
    </>
  )
}

export default UserPage