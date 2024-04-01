import { useState } from "react";

const MultipleInputs = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  })
  
  const handleChange = (e)=>{
    setUser({...user, [e.target.name]: e.target.value})
  }

  const handleKeyPress = (e)=>{
    if(e.key === 'Enter'){
      e.preventDefault()
    }
  }

  const {name, email, password} = user;

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(name)
    console.log(email)
    console.log(password)
    setUser({name:'', email:'', password: ''})
  }

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Multiple Inputs</h4>
        {/* name */}
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' className='form-input' id='name'
            name="name" value={name} onChange={handleChange} onKeyDown={handleKeyPress}/>
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input type='email' className='form-input' id='email'
            name="email" value={email} onChange={handleChange} onKeyDown={handleKeyPress}/>
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input type='password' className='form-input' id='password'
            value={password} name="password" onChange={handleChange} 
            onKeyDown={handleKeyPress}/>
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </div>
  );
};
export default MultipleInputs;
