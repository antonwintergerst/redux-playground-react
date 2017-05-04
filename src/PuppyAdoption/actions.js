let nextPuppyId = 0
export const addPuppy = (text, image) => ({
  type: 'ADD_PUPPY',
  id: nextPuppyId++,
  text,
  image
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const togglePuppy = (id) => ({
  type: 'TOGGLE_PUPPY',
  id
})
