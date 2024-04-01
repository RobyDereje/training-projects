import React from "react";
import avatar from '../../../assets/default-avatar.svg';
import { people } from '../../../data';

const Person = ({
  name,
  nickName = 'shakeAndBake',
  images
}) => {
  // before optional chaining
  // const img =
  //   (images && images[0] && images[0].small && images[0].small.url) || avatar;
  const img = images?.[0]?.small?.url || avatar;
  return <div>
      <img src={img} alt={name} style={{
      width: '50px'
    }} />
      <h4>{name} </h4>
      <p>Nickname : {nickName}</p>
    </div>;
};

export default Person;import avatar from '../../../assets/default-avatar.svg';
const Person = ({ name, nickName = 'shakeAndBake', images }) => {
  // before optional chaining

  // const img =
  //   (images && images[0] && images[0].small && images[0].small.url) || avatar;
  const img = images?.[0]?.small?.url || avatar;
  return (
    <div>
      <img src={img} alt={name} style={{ width: '50px' }} />
      <h4>{name} </h4>
      <p>Nickname : {nickName}</p>
    </div>
  );
};
export default Person;

export function Person({
  person,
  id,
  name
}) {
  return <ul>
        {people.map(person => {
      return <li key={person?.id}>{person?.name}</li>;
    })}
        </ul>;
}
  