import React from 'react';
import { connect } from 'react-redux';
import { getFooterCopy, getFullYear } from '../utils/utils';
import './Footer.css';

const Footer = ({ user }) => {
  return (
    <div className="App-footer">
      <p>
        Copyright {getFullYear()} - {getFooterCopy()}
      </p>
      {user && (
        <p>
          <a href="#">contact us</a>
        </p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({ user: state.get('user') });

export default connect(mapStateToProps)(Footer);
