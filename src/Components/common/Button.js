import React from "react";
import styled from "styled-components";
import Theme from "../../theme";

const ButtonWrapper = styled.div`
  button {
    background-color: ${Theme.Colors.Accent};
    color: white;
    padding: 6px 18px;
    border: 1px solid transparent;
    font-size: 13px;
    cursor: pointer;
    border-radius: 2px;
    white-space: nowrap;
    transition: background-color 0.1s ease;
  }
  button:hover {
    background-color: ${Theme.Colors.Accent2};
  }
`;

export default function Button(props) {
  return (
    <ButtonWrapper>
      <button {...props}>{props.children}</button>
    </ButtonWrapper>
  );
}
