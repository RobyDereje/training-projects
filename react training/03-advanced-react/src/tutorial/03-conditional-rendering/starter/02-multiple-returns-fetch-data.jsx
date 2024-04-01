import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState([])
  
  useEffect(
    ()=>{
      const getUrl = async ()=>{
        try{
          const resp = await fetch(url)
          if(!resp.ok){
            setIsLoading(false)
            setIsError(true)
            return
          }
        const data = await resp.json()
        console.log(data)
        setUser(data)
        } catch(err){
          setIsError(true)
          console.log(err)
        }
        setIsLoading(false)
      }
      getUrl()
    }, 
  []
  )

  const {name, bio, avatar_url} = user;
  
  if(isLoading){
    return <h2>Loading...</h2>
  }
  if(isError){
    return <h2>There has been an error</h2>
  }
  return (
    <>
      <img style={{width: '150px', borderRadius: '25px'}} src={avatar_url} alt={name} />
      <h2>{name}</h2>
      <p>{bio}</p>
    </>
  );
};
export default MultipleReturnsFetchData;
