import React from 'react';
import styled from 'styled-components';

const LoginForm = () => (
  <Div>
    <form action="">
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
      </div>
      <input type="submit" />
    </form>
  </Div>
);

export default LoginForm;

const Div = styled.div``;
