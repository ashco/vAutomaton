import React, { Component } from 'react';
import NavBar from './NavBar';
import { Menubar } from './Menubar';
import Main from './Main';
import Media from 'react-media';

import classNames from 'classnames';
// const styles = {
// content: {
//   display: 'flex'
// }
// };

class App extends Component {
  state = {
    // mobile: false
    activeMenu: false
  };

  checkWidth = () => {};

  toggleMenu = () => {
    const { activeMenu } = this.state;

    this.setState({
      activeMenu: !activeMenu
    });
  };

  render() {
    const { activeMenu, mobile } = this.state;

    const AppClass = classNames('App', activeMenu ? 'App-menu' : 'App-no-menu');

    const mobileMenu = activeMenu ? <Menubar /> : '';

    return (
      <div className={AppClass}>
        <NavBar
          className="Nav"
          titleText={'Header'}
          handleMenu={this.toggleMenu}
        />
        <Media query={{ minWidth: 1000 }}>
          {matches => {
            return matches ? <Menubar /> : mobileMenu;
          }}
        </Media>
        <Main />
      </div>
    );
  }
}

export default App;
