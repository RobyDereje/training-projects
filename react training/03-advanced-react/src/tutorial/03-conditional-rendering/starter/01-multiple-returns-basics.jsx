import { useEffect, useState } from 'react';

const MultipleReturnsBasics = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{setIsLoading(false)}, 3000)
  }, [])

  return isLoading? <h2>Page Is Loading</h2>: <h2>Page Has Loaded</h2>
};
export default MultipleReturnsBasics;
