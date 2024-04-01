import { useState } from "react";
import {data} from '../../../data'

const UseStateArray = () => {
  const [people, setPeople] = useState(data)
  const handleRemove = (id)=>{
    setPeople(people.filter(item=>item.id !== id))
  }
  const handleRemoveAll = ()=>{
    setPeople([])
  }
  return (
    <>
      <h2>UseState Array Examples</h2>
      {people.map(item=>{
        const {id, name} = item
        return (
          <div key={id}>
            <h3>{name}</h3>
            <button type="button" onClick={()=>handleRemove(id)}>Remove</button>
          </div>
        )
      })}
      <div>
      <button type="button" className="btn" onClick={handleRemoveAll}>Remove All</button>
      </div>
    </>
  )
  
};

export default UseStateArray;
