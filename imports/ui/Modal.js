import React, { Component } from 'react';
import { withApollo } from 'react-apollo';
import styled from 'styled-components';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

const Modal = ({ client, modalTarget }) => (
  <Wrapper onClick={e => console.log(e.target.classList)} className="wrapper">
    <Div>
      {modalTarget === 'Register' ? (
        <RegisterForm client={client} />
      ) : (
        <LoginForm client={client} />
      )}
    </Div>
  </Wrapper>
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

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: blue;
`;
