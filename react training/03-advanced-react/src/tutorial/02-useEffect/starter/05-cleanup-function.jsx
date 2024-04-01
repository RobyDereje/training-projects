import { useState } from "react";
import { useEffect } from "react";

const CleanupFunction = () => {
  const [val, setVal] = useState(true)

  const handlebtn = ()=>{
    setVal((currval)=>!currval)
  }
  console.log(val)

  return (
    <>
    <button className="btn" onClick={handlebtn}>Click, {val? 'true': 'false'}</button>
    {(val && <Comp2/>)}
    </>
  )
}

const Comp2 = ()=>{
  useEffect(()=>{
    const someFunc = ()=>{
      //some logic...
    }
    window.addEventListener('scroll', someFunc)
    return ()=>{window.removeEventListener('scroll', someFunc)}
  }, [])

  return <h2>Hello there</h2>
}

export default CleanupFunction;
