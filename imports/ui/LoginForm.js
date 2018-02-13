import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';
import styled from 'styled-components';

class LoginForm extends Component {
  loginUser = (e) => {
    e.preventDefault();
    Meteor.loginWithPassword(this.email.value, this.password.value, (error) => {
      console.log(error);
      if (!error) {
        this.props.client.resetStore();
      }
    });
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.loginUser}>
          <h2>Log in</h2>
          <Div>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" ref={input => (this.email = input)} />
          </Div>
          <Div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" ref={input => (this.password = input)} />
          </Div>
          <input type="submit" />
        </Form>
      </div>
    );
  }
}

export default LoginForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  margin: auto;
  font-size: 1.6rem;
  > h2 {
    font-size: 2.4rem;
    text-align: center;
    margin: auto;
  }
  > input {
    width: 40%;
    margin: auto;
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
`;
