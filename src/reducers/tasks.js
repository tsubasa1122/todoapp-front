const initialState = {};
export default function tasks(state = initialState, action) {
  console.log(2);
  console.log(action.type);
  switch (action.type) {
    case 'GET_TASKS':
      state = action.payload;
      return state;
    case 'FAIL_TASKS':
      state = action.payload;
      return state;
    default:
      return initialState;
  }
}
