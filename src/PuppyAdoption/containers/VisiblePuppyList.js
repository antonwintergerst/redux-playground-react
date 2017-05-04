import { connect } from 'react-redux'
import { togglePuppy } from '../actions'
import PuppyList from '../components/PuppyList'

const getVisiblePuppies = (puppies, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return puppies
    case 'SHOW_COMPLETED':
      return puppies.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return puppies.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state) => ({
  puppies: getVisiblePuppies(state.puppies, state.visibilityFilter)
})

const mapDispatchToProps = {
  onPuppyClick: togglePuppy
}

const VisiblePuppyList = connect(
  mapStateToProps,
  mapDispatchToProps
)(PuppyList)

export default VisiblePuppyList
