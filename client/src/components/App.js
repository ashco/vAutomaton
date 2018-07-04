import React, { Component } from 'react';
import NavBar from './NavBar';
import { Menubar } from './Menubar';
import Main from './Main';

// const styles = {
// content: {
//   display: 'flex'
// }
// };

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar className="Nav" titleText={'Header'} />
        <Menubar />;
        <Main />
      </div>
    );
  }
}

export default App;
