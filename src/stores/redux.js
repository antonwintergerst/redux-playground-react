import { createStore, combineReducers } from 'redux'
import { puppies, visibilityFilter } from '../PuppyAdoption/reducers'

const reducer = combineReducers({
  puppies,
  visibilityFilter
})

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store
