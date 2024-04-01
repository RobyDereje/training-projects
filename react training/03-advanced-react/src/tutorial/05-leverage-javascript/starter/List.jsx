import avatar from '../../../assets/default-avatar.svg' 
import React from 'react'
import { people } from '../../../data'


const List = () => {
    
  return (
    <div>
        <h1>Hello World</h1>
        <ul>
        {people.map(person=>{
        return <li key={person?.id}>
            <h3>Name: {person?.name}</h3>
            <h4>Nick Name: {person?.nickName || 'none'}</h4>
            <img style={{width: '150px'}}src={person?.images?.[0]?.small?.url || avatar} alt="img" />
        </li>
    })}
        </ul>   
    </div>
  )
}

export default List