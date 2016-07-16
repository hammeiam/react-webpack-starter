import React, { PropTypes } from 'react';
import image from './rambo.jpg';

const MyComponent = ({ message }) => {
  return (
    <div>
      <div>{message}</div>
      <img src={image} />
    </div>
  );
};

MyComponent.defaultProps = {
  message: 'You\'re good to go!',
};

MyComponent.propTypes = {
  message: PropTypes.string.isRequired,
};

export default MyComponent;
