const initialData = {
  todo: [0]
}

const todoReducer = (state = initialData, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        todo:[...state.todo,action.text]
      }
    default:
      return state
  }
}

export default todoReducer;