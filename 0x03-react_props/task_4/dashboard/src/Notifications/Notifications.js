import './Notifications.css';
import close from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

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
const Notifications = ({ displayDrawer }) => {

    return (
      <section className="notifications-container">
        <div className="menuItem">Your notifications</div>
        {displayDrawer && (
          <div className="Notifications">
            <p>Here is the list of notifications</p>
            <ul>
              <NotificationItem type="default" value="New course available" />
              <NotificationItem type="urgent" value="New course available" />
              <NotificationItem
                type="urgent"
                html={{ __html: getLatestNotification() }}
              />
            </ul>
            <button
              onClick={handleClick}
              style={buttonStyles}
              aria-label="close"
            >
              <img style={imgStyles} src={close} alt="close" />
            </button>
          </div>
        )}
      </section>
    );
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool
}

Notifications.defaultProps={
  displayDrawer: false
}
export default Notifications;
