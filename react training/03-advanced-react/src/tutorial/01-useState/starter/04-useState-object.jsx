import { useCallback, useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Roby",
    age: 19,
    hobby: "Programming"
  })
  const handlebtn = useCallback(()=>{
    setPerson({...person, name:'Meri'})
  }, [person])
  const {name, age, hobby} = person
  return <>
    <h3>{name}</h3>
    <h3>{age}</h3>
    <h3>Hobby: {hobby}</h3>
    <Component handlebtn={handlebtn}/>
  </>
};

  const Component = ({handlebtn})=>{
    return (
      <button type='button' className='btn' onClick={handlebtn}>Show Jhon</button>
    )
  }

export default UseStateObject;
