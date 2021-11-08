import Actions from "../actions";

export default (state = false, action) => {
  switch (action.type) {
    case Actions.MODAL:
      return action.payload;
    default:
      return state;
  }
};
