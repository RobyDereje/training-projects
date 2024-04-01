import React, { useReducer } from 'react';
import { data } from '../../../data';
import { CLEAR_LIST, REMOVE_ITEM, RESET_LIST } from './actions';
import reducer from './reducer';


const defaultState = {
  people: data,
  isLoading: false
}


const ReducerBasics = () => {

  const [state, dispatch] = useReducer(reducer, defaultState)

  const removeItem = (id) => {
    dispatch({type: REMOVE_ITEM, payload: {id}})
  };

  const resetItem = ()=>{
    dispatch({type: RESET_LIST})
  }

  const clearItem = ()=>{
    dispatch({type: CLEAR_LIST})
  }

  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button
        className='btn'
        style={{ marginTop: '2rem' }}
        onClick={state.people.length > 0 ? clearItem : resetItem}
      >
        {state.people.length > 0? 'Clear Items': 'Reset'}
      </button>
    </div>
  );
};

export default ReducerBasics;
