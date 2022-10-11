import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import vars from '../utils/styleVars';
import React from 'react';
import { AppContext } from '../App/AppContext';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { user, logOut } = this.context;
    return (
      <div className={css(styles.headerContainer)}>
        {user.isLoggedIn && (
          <section id="logoutSection">
            Welcome {user.email}{' '}
            <a href="#" onClick={logOut}>
              (logOut)
            </a>{' '}
          </section>
        )}
        <img src={logo} className={css(styles.logo)} alt="logo" />
        <h1 className={css(styles.title)}>School dashboard</h1>
      </div>
    );
  }
}

// const Header = () => {
//   return (
//     <div className={css(styles.headerContainer)}>
//       <img src={logo} className={css(styles.logo)} alt="logo" />
//       <h1 className={css(styles.title)}>School dashboard</h1>
//     </div>
//   );
// };

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

Header.contextType = AppContext;
export default Header;
