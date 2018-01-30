import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Modal from './Modal';

class Nav extends Component {
  state = {
    searchTarget: '',
    modalVisible: false,
  };

  handleChange = (e) => {
    this.setState({
      searchTarget: e.target.value,
    });
  };

  handleClick = (e) => {
    this.setState({
      modalVisible: !this.state.modalVisible,
    });
  };

  render() {
    return (
      <div>
        <NavBar>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <input type="text" onChange={this.handleChange} placeholder="Search Books" />
              <button>
                <Link to={`/results/${this.state.searchTarget}`}>Submit</Link>
              </button>
            </li>
            <li onClick={this.handleClick}>Register</li>
            <li onClick={this.handleClick}>Login</li>
          </ul>
        </NavBar>
        {this.state.modalVisible && createPortal(<Modal />, document.getElementById('modal'))}
      </div>
    );
  }
}

export default Nav;

const NavBar = styled.nav`
  background: #56e39f;
  > ul {
    list-style: none;
    padding: 0;
    margin: auto;
    width: 80%;
    display: flex;
    > li {
      &:nth-child(1) {
        margin-right: auto;
      }
      margin: 1rem;
      padding: 1rem;
      font-size: 2rem;
    }
  }
`;
