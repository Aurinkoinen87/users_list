import React, { useState, ChangeEvent } from 'react';
import './App.css';
import { User } from './User'


export type UserType = {
  name: string
  surname: string
  id: number
}


function App() {

  console.log('component rendered')
  const users: UserType[] = [{ name: 'Snezhana', surname: 'Denisova', id: 0 }, { name: 'Olga', surname: 'Astaxova', id: 1 }, { name: 'Alina', surname: 'Armas', id: 2 }, { name: 'Nadezda', surname: 'Kamennaya', id: 3 }, { name: 'Katerina', surname: 'Alabai', id: 4 }, { name: 'Jane', surname: 'Winslet', id: 5 }, { name: 'Regina', surname: 'Minecraft', id: 6 }, { name: 'Arxiz', surname: 'Tulupova', id: 7 }]


  let [names, setName] = useState<UserType[]>([])

  const addName = (id: number) => {
    let user = users.filter(u => u.id === id)
    names = [...names, ...user]
    setName(names)
    }

  const deleteUser = (id: number) => {
    names = names.filter(u => u.id !== id)
    setName([...names])
  }


  let usersToShow = names.map((n) => n.name).join(', ')



  let[isAllChecked, setAllChecked] = useState(false)

  const onChangeAll = (e: ChangeEvent<HTMLInputElement>) => setAllChecked(e.currentTarget.checked)



  return (
    <div className="App">
      <input type="checkbox" onChange={(e)=> onChangeAll(e)} checked={isAllChecked} />
      <div className='user_table'>
        {users.map(u => <User key={u.id} user={u} addName={addName} deleteUser={deleteUser} isAllChecked={isAllChecked} />)}
      </div>
      list:  <span className='list'>{usersToShow} </span>

    </div>
  );
}

export default App;
