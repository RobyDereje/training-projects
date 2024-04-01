import React, { createContext, useContext } from 'react'
import { useState } from 'react'
import NavLinks from './NavLinks'



const Navbar = () => {
    const [user, setUser] = useState('Roby')
    const logout = ()=>{
        setUser(null)
    }

  return (
    <NavContext.Provider value = {{user, logout}}>
    <nav className='navbar'>
        <h3>Context API</h3>
        <NavLinks/>
    </nav>
    </NavContext.Provider>
  )
}
export const NavContext = createContext();

export const useAppContext = ()=>useContext(NavContext)

export default Navbar