import {data} from '../../../data'
import { useState } from 'react';

const UserChallenge = () => {
  const [name, setName] = useState('')
  const [users, setUser] = useState(data)
  const [initID, setInitID] = useState(5)

  const handleKeyPress = (e)=>{
    if(e.key === 'Enter'){
      e.preventDefault()
    }}

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(!name) return;
    const newUser = {id: initID, name: name}
    setUser([...users, newUser])
    console.log(initID)
    setInitID((currval)=>currval+1)
    setName('')
  }

console.log(initID)

  const handleRemove = (id)=>{
    setUser(users.filter((item)=> item.id !== id))
  }

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' className='form-input' id='name' 
            value={name} onChange={(e)=>{
              setName(e.target.value)}}
              onKeyDown={handleKeyPress}/>
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
      {users.map(user=>{
        const {id, name} = user;
        return(
          <div key={id}>
            <h4>{name}</h4>
            <button type='button' className='btn' onClick={()=>handleRemove(id)}>Remove</button>
          </div>
        )
      })}
    </div>
  );
};
export default UserChallenge;
