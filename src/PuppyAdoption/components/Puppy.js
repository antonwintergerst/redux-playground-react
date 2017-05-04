import React from 'react'
import PropTypes from 'prop-types'

const Puppy = ({ onClick, completed, text, image }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
    <img src={image} />
  </li>
)

Puppy.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

export default Puppy
