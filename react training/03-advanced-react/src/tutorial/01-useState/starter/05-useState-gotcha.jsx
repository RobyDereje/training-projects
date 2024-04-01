import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0)
  const handlebtn = ()=>{
    setTimeout(()=>{setValue(
      (currVal)=>currVal + 1
    )}, 3000)
  }
  return (<>
    <h2>{value}</h2>
    <button className="btn" type="button" onClick={handlebtn}>Increment</button>
  </>)
};

export default UseStateGotcha;
