import React, { Component } from 'react';
import styled from 'styled-components';

const styles = {
  root: {
    backgroundColor: '#eee'
  }
};

export class Menubar extends Component {
  render() {
    return (
      <div className="Menubar" style={styles.root}>
        <MenuList>
          <MenuItem>Item 1</MenuItem>
          <MenuItem>Item 2</MenuItem>
        </MenuList>
      </div>
    );
  }
}

export default Menubar;

const MenuList = styled.ul`
  margin: 10px;
`;

const MenuItem = styled.li`
  text-align: center;
  padding: 10px;
  border-bottom: 1px solid #000;
`;
