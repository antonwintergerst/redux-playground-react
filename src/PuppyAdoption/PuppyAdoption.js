import React from 'react'
import Footer from './components/Footer'
import AddPuppy from './containers/AddPuppy'
import VisiblePuppyList from './containers/VisiblePuppyList'

const PuppyAdoption = () => (
  <div>
    <AddPuppy />
    <VisiblePuppyList />
    <Footer />
  </div>
)

export default PuppyAdoption
