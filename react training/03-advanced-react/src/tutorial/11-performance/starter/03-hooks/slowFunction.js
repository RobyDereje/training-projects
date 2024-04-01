import React from 'react'

const slowFunction = () => {
let total = 0;
  for(let x = 0; x < 1234234123; x++){
    
    total += 1;
}
console.log(total)
}


export default slowFunction;