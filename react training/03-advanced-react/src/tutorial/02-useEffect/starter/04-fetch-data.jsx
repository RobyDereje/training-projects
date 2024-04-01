import { useEffect, useState } from "react";

const url = 'https://api.github.com/users';

const FetchData = () => {
  const [user, setUser] = useState([])

  useEffect(()=>{
    const getUrl = async ()=>{
      const resp = await fetch(url)
      const data = await resp.json()
      console.log(data.map(obj=>obj.id))
      setUser(data)
    }
    getUrl()
  }, [])
  return (
    <>
      <h3>Github Users</h3>
      <ul className="users">
        {user.map((item)=>{
          const {id, login, avatar_url, html_url} = item;
          return (
            <li key={id}>
              <img src={avatar_url} alt="login" />
              <div>
                <h5>{login}</h5>
                <a href={html_url}>profile</a>
              </div>
            </li>
        )
        })}
      </ul>
    </>
  );
};
export default FetchData;
