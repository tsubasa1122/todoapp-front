const initialState = {
  tasks: [],
};
export default function tasks(state = initialState, action) {
  switch (action.type) {
    case 'GET_TASKS':
      state = action.payload;
      return state.data;
    case 'FAIL_TASKS':
      state = action.payload;
      return state;
    default:
      return initialState;
  }
}
