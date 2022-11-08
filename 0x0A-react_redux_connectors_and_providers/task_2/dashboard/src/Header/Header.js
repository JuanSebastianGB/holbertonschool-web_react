import { css, StyleSheet } from 'aphrodite';
import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/uiActionCreators';
import logo from '../assets/holberton-logo.jpg';
import vars from '../utils/styleVars';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={css(styles.headerContainer)}>
        {this.props.user.isLoggedIn && (
          <section id="logoutSection">
            Welcome {this.props.user.email}
            <a href="#" onClick={this.props.logOut}>
              (logOut)
            </a>
          </section>
        )}
        <img src={logo} className={css(styles.logo)} alt="logo" />
        <h1 className={css(styles.title)}>School dashboard</h1>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center',
    borderBottom: `medium solid ${vars.mainColor}`,
  },
  logo: {
    width: '12rem',
    height: 'auto',
  },
  title: {
    display: 'inline',
    color: vars.mainColor,
  },
});

const mapStateToProps = (state) => ({ user: state.get('user') });
export const mapDispatchToProps = {
  logout,
};
export default connect(mapStateToProps)(Header);
