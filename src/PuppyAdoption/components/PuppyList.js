import React from 'react'
import PropTypes from 'prop-types'
import Puppy from './Puppy'

const PuppyList = ({ puppies, onPuppyClick }) => (
  <ul>
    {puppies.map(puppy =>
      <Puppy
        key={puppy.id}
        {...puppy}
        onClick={() => onPuppyClick(puppy.id)}
      />
    )}
  </ul>
)

PuppyList.propTypes = {
  puppies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onPuppyClick: PropTypes.func.isRequired
}

export default PuppyList
