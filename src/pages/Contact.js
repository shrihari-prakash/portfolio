import styled from "styled-components";
import Theme from "../theme";

const ContactWrapper = styled.div`
  padding: 18px;
  counter-reset: line;
  color: ${Theme.Colors.TextOnBackground};
  text-align: left;
  cursor: default;
  font-family: inherit;

  ${Theme.Media.Mobile}, ${Theme.Media.Portrait} {
    padding: 8px;
  }

  .code-line {
    display: flex;
    align-items: center;
    line-height: 1.6;

    ::before {
      content: counter(line);
      counter-increment: line;
      margin-right: 1.5rem;
      width: 1.5rem;
      text-align: right;
      color: ${Theme.Colors.TextMuted};
      user-select: none;
    }

    a {
      color: ${Theme.Colors.String};
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .keyword {
    color: ${Theme.Colors.Keyword};
  }
  .function {
    color: ${Theme.Colors.Function};
  }
  .property {
    color: ${Theme.Colors.Property};
  }
  .punctuation {
    color: ${Theme.Colors.TextOnBackground};
  }
  .comment {
    color: ${Theme.Colors.TextMuted};
    font-style: italic;
  }
`;

export default function Contact() {
  const socials = [
    {
      key: "website",
      link: "https://shrihariprakasam.in",
      text: "shrihariprakasam.in",
    },
    {
      key: "email",
      link: "mailto:shrihariprakasam@gmail.com",
      text: "shrihariprakasam@gmail.com",
    },
    {
      key: "github",
      link: "https://github.com/shrihari-prakash",
      text: "shrihari-prakash",
    },
    {
      key: "linkedin",
      link: "https://www.linkedin.com/in/shrihari-prakasam/",
      text: "shrihari-prakasam",
    },
    {
      key: "medium",
      link: "https://shrihariprakash.medium.com",
      text: "shrihariprakash.medium.com",
    },
  ];

  return (
    <ContactWrapper>
      <div className="code-line comment">{"// Reach out to me"}</div>
      <div className="code-line">&nbsp;</div>
      <div className="code-line">
        <span className="keyword">export&nbsp;const</span>&nbsp;
        <span className="function">Socials</span>&nbsp;
        <span className="punctuation">=&nbsp;{"{"}</span>
      </div>

      {socials.map((social) => (
        <div key={social.key} className="code-line">
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="property">{social.key}</span>
          <span className="punctuation">:&nbsp;</span>
          <span className="punctuation">"</span>
          <a href={social.link} rel="noreferrer" target="_blank">
            {social.text}
          </a>
          <span className="punctuation">",</span>
        </div>
      ))}

      <div className="code-line">
        <span className="punctuation">{"};"}</span>
      </div>
      <div className="code-line">&nbsp;</div>
      <div className="code-line comment">{"// Waiting for your message!"}</div>
    </ContactWrapper>
  );
}
