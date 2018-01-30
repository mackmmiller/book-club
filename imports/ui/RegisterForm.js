import React from 'react';
import styled from 'styled-components';

const RegisterForm = () => (
  <div>
    <Form>
      <h2>Registration</h2>
      <Div>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" />
      </Div>
      <Div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
      </Div>
      <Div>
        <label htmlFor="password2">Confirm Password</label>
        <input type="password" name="password2" />
      </Div>
      <hr />
      <Div>
        <label htmlFor="address">Address</label>
        <input type="Address" name="address" />
      </Div>
      <Div>
        <label htmlFor="city">City</label>
        <input type="City" name="city" />
      </Div>
      <Div>
        <label htmlFor="state">State</label>
        <input type="State" name="state" />
      </Div>
      <Div>
        <label htmlFor="zip">Zip Code</label>
        <input type="Zip" name="zip" />
      </Div>
      <input type="submit" />
    </Form>
  </div>
);

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
