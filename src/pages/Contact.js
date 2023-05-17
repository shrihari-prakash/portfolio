import React from "react";
import styled from "styled-components";
import Theme from "../theme";

const ContactWrapper = styled.div`
  padding: 18px;
  counter-reset: line;
  color: ${Theme.Colors.TextOnBackground};
  text-align: left;
  cursor: default;

  ${Theme.Media.Mobile}, ${Theme.Media.Portrait} {
    padding: 4px;
  }

  .code-line {
    ::before {
      content: counter(line);
      counter-increment: line;
      margin-right: 1rem;
      color: grey;
    }

    a {
      color: ${Theme.Colors.Accent};
      text-decoration: none;
    }
  }
`;

export default function Contact() {
  return (
    <ContactWrapper>
      React out to me
      <br></br>
      <br></br>
      <div className="code-line">{"{"}</div>
      <div className="code-line">
        &nbsp;&nbsp;Website:{" "}
        <a
          href="https://shrihari-prakash.github.io/portfolio"
          rel="noreferrer"
          target="_blank"
        >
          shrihari-prakash.github.io/portfolio
        </a>
      </div>
      <div className="code-line">
        &nbsp;&nbsp;E-Mail:{" "}
        <a href="mailto:shrihariprakasam@gmail.com">
          shrihariprakasam@gmail.com
        </a>
      </div>
      <div className="code-line">
        &nbsp;&nbsp;GitHub:{" "}
        <a
          href="https://github.com/Shrihari-Prakash"
          rel="noreferrer"
          target="_blank"
        >
          Shrihari-Prakash
        </a>
      </div>
      <div className="code-line">
        &nbsp;&nbsp;LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/shrihari-prakasam/"
          rel="noreferrer"
          target="_blank"
        >
          shrihari-prakasam
        </a>
      </div>
      <div className="code-line">
        &nbsp;&nbsp;Medium:{" "}
        <a
          href="https://shrihariprakash.medium.com"
          rel="noreferrer"
          target="_blank"
        >
          shrihariprakash.medium.com
        </a>
      </div>
      <div className="code-line">{"}"}</div>
    </ContactWrapper>
  );
}
