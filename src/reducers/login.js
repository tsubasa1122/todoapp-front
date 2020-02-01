const initialState = {};
export default function login(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      state = action.payload;
      return state;
    case 'LOGIN_FAILURE':
      state = action.payload;
      return state;
    default:
      return initialState;
  }
}
