import React from 'react';
import styled from 'styled-components';

const Footer = () => (
  <StyledFooter>
    <p>
      Developed by<br />Mackenzie Miller
    </p>
    <div>
      <a href="https://github.com/mackmmiller">
        <i className="fab fa-github" />
      </a>
      <a href="https://www.linkedin.com/in/miller-mackenzie/">
        <i className="fab fa-linkedin-in" />
      </a>
      <a href="https://twitter.com/MackMMiller">
        <i className="fab fa-twitter" />
      </a>
      <a href="https://www.freecodecamp.org/mackmmiller">
        <i className="fab fa-free-code-camp" />
      </a>
    </div>
  </StyledFooter>
);

export default Footer;

const StyledFooter = styled.footer`
  background: #5b6c5d;
  color: #fbfbff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: 1.6rem;
  > div {
    margin: auto;
    display: flex;
    font-size: 2rem;
    > a {
      margin: 0.5rem;
      padding-bottom: 1rem;
      color: #fbfbff;
      &:hover {
        color: blue;
      }
    }
  }
`;
