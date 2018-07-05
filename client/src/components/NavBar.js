import React, { Component } from 'react';
import Media from 'react-media';
import styled from 'styled-components';

export class NavBar extends Component {
  render() {
    const { handleMenu } = this.props;

    return (
      <Nav className="NavBar">
        <Media query={{ maxWidth: 999 }}>
          {matches => {
            return matches ? (
              <NavMobile handleMenu={handleMenu} />
            ) : (
              <NavDesktop />
            );
          }}
        </Media>
      </Nav>
    );
  }
}

class NavMobile extends Component {
  render() {
    const { handleMenu } = this.props;

    return (
      <div>
        <button onClick={handleMenu}>Toggle</button>
        MOBILE
      </div>
    );
  }
}

class NavDesktop extends Component {
  render() {
    return <div>DESKTOP</div>;
  }
}

const Nav = styled.nav`
  background-color: #6098f2;
`;

Nav.Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

Nav.ContentRight = styled.div``;

Nav.ContentLeft = styled.div``;

export default NavBar;
