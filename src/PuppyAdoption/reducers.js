const puppy = (state, action) => {
  switch (action.type) {
    case 'ADD_PUPPY':
      return {
        id: action.id,
        text: action.text,
        image: action.image,
        completed: false
      }
    case 'TOGGLE_PUPPY':
      if (state.id !== action.id) {
        return state
      }

      return {
        ...state,
        completed: !state.completed
      }
    default:
      return state
  }
}

const puppies = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PUPPY':
      return [
        ...state,
        puppy(undefined, action)
      ]
    case 'TOGGLE_PUPPY':
      return state.map(t =>
        puppy(t, action)
      )
    default:
      return state
  }
}

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export {
  puppies,
  visibilityFilter
}
