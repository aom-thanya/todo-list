import React, { Component } from 'react'
import { AddButton } from '../../components'
import './index.css'

class App extends Component {
  render() {
    return (
      <div className="app">
        <AddButton>+</AddButton>
      </div>
    )
  }
}

export default App
