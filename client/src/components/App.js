import React, { Component } from 'react';
import NavBar from './NavBar';
import { Menubar } from './Menubar';
import Main from './Main';

import classNames from 'classnames';
// const styles = {
// content: {
//   display: 'flex'
// }
// };

class App extends Component {
  state = {
    activeMenu: true
  };

  toggleMenu = () => {
    const { activeMenu } = this.state;

    this.setState({
      activeMenu: !activeMenu
    });
  };

  render() {
    const { activeMenu } = this.state;

    let AppClass = classNames('App', activeMenu ? 'App-menu' : 'App-no-menu');

    return (
      <div className={AppClass}>
        <NavBar
          className="Nav"
          titleText={'Header'}
          handleMenu={this.toggleMenu}
        />
        {activeMenu && <Menubar />}
        <Main />
      </div>
    );
  }
}

export default App;
