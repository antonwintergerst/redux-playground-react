import React from 'react'
import { connect } from 'react-redux'
import { addPuppy } from '../actions'

let AddPuppy = ({ dispatch }) => {
  let input
  let imageInput

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        if (!imageInput.value.trim()) {
          return
        }
        dispatch(addPuppy(input.value, imageInput.value))
        input.value = ''
        imageInput.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <input ref={node => {
          imageInput = node
        }} />
        <button type="submit">
          Add Puppy
        </button>
      </form>
    </div>
  )
}
AddPuppy = connect()(AddPuppy)

export default AddPuppy
