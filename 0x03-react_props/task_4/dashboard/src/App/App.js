import { Fragment } from 'react';
import logo from '../assets/holberton-logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from '../utils/utils';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';

function App({ isLoggedIn = false }) {
  return (
    <Fragment>
      <div className="container">
        <Notifications />
        <div className="App">
          <Header />
          {isLoggedIn ? <CourseList /> : <Login />}
          <Footer />
        </div>
      </div>
    </Fragment>
  );
}
App.propTypes = {
  isLoggedIn: PropTypes.bool,
};
export default App;
