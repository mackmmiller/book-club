import React, { PureComponent } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Modal from './Modal';

class Nav extends PureComponent {
  state = {
    searchTarget: '',
    modalVisible: false,
    modalTarget: '',
  };

  handleChange = (e) => {
    this.setState({
      searchTarget: e.target.value,
    });
  };

  handleClick = (e) => {
    this.setState({
      modalVisible: !this.state.modalVisible,
      modalTarget: e.target.textContent,
    });
  };

  closeModal = (e) => {
    if (e.target.classList.contains('wrapper')) {
      this.setState({
        modalVisible: false,
      });
    }
  };

  render() {
    return (
      <div>
        <NavBar>
          <ul>
            <li>
              <Link to="/" href="/">
                Home
              </Link>
            </li>
            <li>
              <input type="text" onChange={this.handleChange} placeholder="Search Books" />
              <button>
                <Link
                  to={`/results/${this.state.searchTarget}`}
                  href={`/results/${this.state.searchTarget}`}
                >
                  Submit
                </Link>
              </button>
            </li>
            {this.props.user._id ? (
              <div>
                <li>
                  <Link to="/myprofile">My Profile</Link>
                </li>
                <li
                  onClick={() => {
                    Meteor.logout();
                    this.props.client.resetStore();
                  }}
                >
                  Log out
                </li>
              </div>
            ) : (
              <div>
                <li onClick={this.handleClick}>Register</li>
                <li onClick={this.handleClick}>Login</li>
              </div>
            )}
          </ul>
        </NavBar>
        {this.state.modalVisible &&
          createPortal(
            <Modal
              client={this.props.client}
              modalTarget={this.state.modalTarget}
              handleClick={this.closeModal.bind(this)}
            />,
            document.getElementById('modal'),
          )}
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
    > div {
      display: flex;
      align-items: center;
      > li {
        margin: 1rem;
        font-size: 2rem;
      }
    }
  }
`;
