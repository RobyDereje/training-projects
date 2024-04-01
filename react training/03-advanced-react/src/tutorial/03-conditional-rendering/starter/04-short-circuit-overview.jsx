import { useState } from 'react';

const ShortCircuitOverview = () => {
  const [trueVal, setTrueVal] =  useState('Hello')
  const [falseVal, setFalseVal] =  useState('')
  return (
    <>
      <h2>Truthy OR: {trueVal || falseVal}</h2>
      <h2>Truthy AND: {trueVal && falseVal}</h2>
      <h2>Falsy OR: {falseVal || trueVal}</h2>
      <h2>Falsy AND: {falseVal && trueVal}</h2>
    </>
  );
};
export default ShortCircuitOverview;
