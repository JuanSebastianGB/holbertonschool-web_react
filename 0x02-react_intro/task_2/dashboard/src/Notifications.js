import React from 'react';
import './Notifications.css';
import close from './close.png';

const buttonStyles = {
  display: 'inline',
  position: 'absolute',
  right: '0.3rem',
  top: '0.3rem',
  background: 'none',
  border: 'none',
  width: '1rem',
  height: '1rem',
};

const handleClick = () => console.log('Close button has been clicked');

const Notifications = () => {
  return (
    <div className="Notifications">
      Here is the list of notifications
      <button onClick={handleClick} style={buttonStyles} aria-label="close">
        <img src={close} alt="close" />
      </button>
    </div>
  );
};

export default Notifications;
