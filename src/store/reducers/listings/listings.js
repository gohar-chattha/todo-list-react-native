import * as TYPES from "../../types";
const initialState = {
  todo_listing: [],
};
const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case TYPES.ADD_TODO:
      return {
        ...state,
        todo_listing: actions.payload
      };
    default:
      return state;
  }
};
export default reducer;
