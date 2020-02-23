const initialState = {};

export default function createTask(state = initialState, action) {
  switch (action.type) {
    case 'CREATE_TASK_SUCCESS':
      state = action.payload;
      return state;
    case 'CREATE_TASK_FAILURE':
      state = action.payload;
      return state;
    default:
      return initialState;
  }
}
