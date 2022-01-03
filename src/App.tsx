import React, { useState, ChangeEvent } from 'react';
import './App.css';
import { User } from './User'


export type UserType = {
  name: string
  surname: string
  id: number
}


function App() {

  const initialUsers: UserType[] = [{ name: 'Snezhana', surname: 'Denisova', id: 0 }, { name: 'Olga', surname: 'Astaxova', id: 1 }, { name: 'Alina', surname: 'Armas', id: 2 }, { name: 'Nadezda', surname: 'Kamennaya', id: 3 }, { name: 'Katerina', surname: 'Alabai', id: 4 }, { name: 'Jane', surname: 'Winslet', id: 5 }, { name: 'Regina', surname: 'Minecraft', id: 6 }, { name: 'Arxiz', surname: 'Tulupova', id: 7 }]


  let userIdArr = initialUsers.map(u => u.id)
  let [usersId, setUser] = useState<number[]>([])

  const addDeleteUser = (id: number) => {
      let i = usersId.find(i => i == id)
      if(i){

        setUser(usersId.filter(a => a !== id))
      } else {
        setUser([...usersId, id])
      }
    }



  let usersToShow = initialUsers.filter((n) => usersId.some(i => i === n.id)).map(u => u.name).join(', ')

  const onChangeAll = () => {
    if(usersId.length < userIdArr.length){
    setUser([...userIdArr])
    } else {setUser([])}}



  return (
    <div className="App">
      <input type="checkbox" onChange={(e)=> onChangeAll()} checked={usersId.length === userIdArr.length} />
      <div className='user_table'>
        {initialUsers.map(u => <User key={u.id} user={u} usersId={usersId} addDeleteUser={addDeleteUser} />)} </div>
      list:  <span className='list'>{usersToShow} </span>

    </div>
  );
}

export default App;
