import { useState } from "react";

const ToggleChallenge = () => {
  const [isOn, setIsOn] = useState(true)

  const handlebtn = ()=>{
    setIsOn((currVal) => !currVal)
  } 

  return (
    <>
      {isOn? <h2>Now you see me</h2>: <h2 style={{color: 'transparent'}}>Now You Don't</h2>}
      <button className="btn" onClick={handlebtn}>Toggle</button>
    </>
  );
};

export default ToggleChallenge;
