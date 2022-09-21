import React from 'react';
import './Notifications.css';
import close from './close-icon.png';
import { getLatestNotification } from './utils';

const buttonStyles = {
  display: 'inline',
  position: 'absolute',
  right: '0.3rem',
  top: '0.3rem',
  background: 'none',
  border: 'none',
};

const imgStyles = {
  width: '20px',
  height: '20px',
};

const handleClick = () => console.log('Close button has been clicked');
const Notifications = () => {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          data-priority="urgent"
          dangerouslySetInnerHTML={{
            __html: `${getLatestNotification()}`,
          }}
        ></li>
      </ul>
      <button onClick={handleClick} style={buttonStyles} aria-label="close">
        <img style={imgStyles} src={close} alt="close" />
      </button>
    </div>
  );
};

export default Notifications;
