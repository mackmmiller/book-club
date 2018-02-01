import React, { Component } from 'react';
import { withApollo } from 'react-apollo';
import styled from 'styled-components';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

const Modal = ({ client, modalTarget }) => (
  <Div>
    {modalTarget === 'Register' ? <RegisterForm client={client} /> : <LoginForm client={client} />}
  </Div>
);

export default withApollo(Modal);

const Div = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 50rem;
  height: 45rem;
  background: #59c9a5;
  padding: 2rem;
  transform: translate(-50%, -50%);
`;
