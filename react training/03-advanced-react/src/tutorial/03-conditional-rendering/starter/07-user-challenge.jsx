import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null)

  const login = ()=>{
    console.log('login called')
    setUser({name: 'Roby'})
  }

  const logout = ()=>{
    console.log('logout called')
    setUser(null)
  }
  return (
    <>
      <h4>{user? `Hello there, ${user.name}`: 'Please Login'}</h4>
      <button className="btn" onClick={user? logout: login}>{user? 'Log Out': 'Log In'}</button>
     
    </>
  );
};


export default UserChallenge;
