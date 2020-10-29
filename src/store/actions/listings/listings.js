import * as TYPES from '../../types';

const saveItem = data => {
  return {
    type: TYPES.ADD_TODO,
    payload: data,
  };
};

export const addTodo = (item) => {
  return dispatch => {
    //API Call here
    dispatch(saveItem(item));
    
  };
};
