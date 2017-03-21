// src/scenes/Home/components/Compose/index.js

import React, { Component, PropTypes } from 'react'

class Compose extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  handleSubmit = (event) => {
    const { onSubmit } = this.props
    event.preventDefault()
    onSubmit(this.ref.value)
    this.ref.value = ''
  }

  render () {

    return (
      <form onSubmit={this.handleSubmit}>
        <textarea
          cols="30"
          rows="3"
          ref={ref => this.ref = ref}
        ></textarea>
        <button type='submit'>
          Teilen
        </button>
      </form>
    )
  }
}

export default Compose
