import { useState } from "react";

const UseStateBasics = () => {
  const [count, setCount] = useState(0)
  const handlebtn = ()=>{
    setCount(count + 1)
  }
  return (
    <>
      <h2>You have clicked the button {count} times.</h2>
      <button className="btn" type="button" onClick={handlebtn}>Click Me</button>
    </>
  )
  
};

export default UseStateBasics;
