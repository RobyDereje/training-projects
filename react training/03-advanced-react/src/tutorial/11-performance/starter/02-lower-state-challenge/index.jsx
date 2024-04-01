import { useState } from 'react';
import { data } from '../../../../data';
import List from './List';
import { Input } from './Input';

const LowerStateChallenge = () => {
  const [people, setPeople] = useState(data);
  
  const addPerson = () => {
    const fakeId = Date.now();
    const newPerson = { id: fakeId, name };
    setPeople([...people, newPerson]);
  };
  
  return (
    <section>
      <Input addPerson={addPerson}/>
      <List people={people} />
    </section>
  );
};
export default LowerStateChallenge;
