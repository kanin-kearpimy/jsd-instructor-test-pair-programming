import React from "react";
import styled from "styled-components";

const ErrorMessage = ({ children }) => {
  return <MessageWrapper>{children} </MessageWrapper>;
};

const MessageWrapper = styled.div`
  /* Receive prop to check error? if error display none */
  color: #b31b1b;
  font-size: 0.75rem;
  font-weight: bold;

  & p.main-message {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;
    background: #fef2f2;
    border: 1px solid #b31b1b;
    border-radius: 10px;
    padding: 0.5rem 2rem;
  }
`;
export default ErrorMessage;
