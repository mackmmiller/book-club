import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';
import styled from 'styled-components';

class RegisterForm extends Component {
  registerUser = (e) => {
    e.preventDefault();
    Accounts.createUser(
      {
        email: this.email.value,
        password: this.password.value,
        address: this.address.value,
        city: this.city.value,
        province: this.province.value,
        zip: this.zip.value,
      },
      (error) => {
        if (!error) {
          this.props.client.resetStore();
        }
        console.log(error);
      },
    );
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.registerUser}>
          <h2>Registration</h2>
          <Div>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" ref={input => (this.email = input)} />
          </Div>
          <Div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" ref={input => (this.password = input)} />
          </Div>
          <hr />
          <Div>
            <label htmlFor="address">Address</label>
            <input type="Address" name="address" ref={input => (this.address = input)} />
          </Div>
          <Div>
            <label htmlFor="city">City</label>
            <input type="City" name="city" ref={input => (this.city = input)} />
          </Div>
          <Div>
            <label htmlFor="state">State</label>
            <input type="State" name="state" ref={input => (this.province = input)} />
          </Div>
          <Div>
            <label htmlFor="zip">Zip Code</label>
            <input type="Zip" name="zip" ref={input => (this.zip = input)} />
          </Div>
          <input type="submit" />
        </Form>
      </div>
    );
  }
}

export default RegisterForm;

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
