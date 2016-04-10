import React, { PropTypes, Component } from 'react'
import image from './rambo.jpg'

class MyComponent extends Component {
  render() {
    const { message } = this.props
    return (
      <div>
        <div>{message}</div>
        <img src={image} />
      </div>
    )
  }
}

MyComponent.defaultProps = {
  message: 'You\'re good to go!'
}

MyComponent.proptypes = {
  message: PropTypes.string.isRequired
}

export default MyComponent

