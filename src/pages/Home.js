import React from "react";
import { useNavigate } from "react-router-dom";
import GitHubCalendar from "react-github-calendar";
import styled, { keyframes } from "styled-components";
import Button from "../Components/common/Button";
import { routes } from "../routes";
import Theme from "../theme";
import Memoji from "../assets/images/memoji.png";

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const HomeWrapper = styled.div`
  height: 100%;
  width: 100%;
  color: ${Theme.Colors.TextOnBackground};
  display: flex;
  flex-direction: column;
  padding: 32px;
  box-sizing: border-box;
  overflow: auto;
  font-family: inherit;
  font-size: 15px;
  text-align: left;

  ${Theme.Media.Portrait}, ${Theme.Media.Mobile} {
    padding: 16px;
  }

  .code-container {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 100%;
  }

  .code-line {
    display: flex;
    align-items: center;
    line-height: 1.6;

    .line-number {
      width: 2.5rem;
      text-align: right;
      margin-right: 1.5rem;
      color: ${Theme.Colors.TextMuted};
      user-select: none;
    }
  }

  .memoji-container {
    padding: 16px 0 16px 4rem;
    img {
      height: 96px;
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
  .string {
    color: ${Theme.Colors.String};
  }
  .punctuation {
    color: ${Theme.Colors.TextOnBackground};
  }
  .comment {
    color: ${Theme.Colors.TextMuted};
    font-style: italic;
  }

  .cursor {
    display: inline-block;
    width: 8px;
    height: 1.2em;
    background-color: ${Theme.Colors.TextOnBackground};
    vertical-align: middle;
    animation: ${blink} 1s step-end infinite;
    margin-left: 4px;
  }

  .widgets {
    margin-top: 32px;
    padding-left: 4rem;

    ${Theme.Media.Portrait}, ${Theme.Media.Mobile} {
      padding-left: 0;
      margin-top: 16px;
      margin-bottom: 24px;
    }
  }

  .action-buttons {
    display: flex;
    gap: 16px;
    margin-top: 24px;
  }

  .react-activity-calendar {
    margin-top: 24px;

    .react-activity-calendar__count {
      font-weight: lighter;
      opacity: 0.5;
    }

    rect {
      stroke: none;
    }
  }
`;

const theme = {
  level0: Theme.Colors.Background,
  level1: "#0e4429",
  level2: "#006d32",
  level3: "#26a641",
  level4: "#39d353",
};

export default function Home() {
  const navigate = useNavigate();
  return (
    <HomeWrapper>
      <div className="code-container">
        <div className="code-line">
          <span className="line-number">1</span>
          <span className="comment">/**</span>
        </div>
        <div className="code-line">
          <span className="line-number">2</span>
          <span className="comment">&nbsp;* Welcome to my portfolio!</span>
        </div>
        <div className="code-line">
          <span className="line-number">3</span>
          <span className="comment">&nbsp;*/</span>
        </div>
        <div className="code-line">
          <span className="line-number">4</span>
        </div>
        <div className="memoji-container">
          <img alt="memoji" src={Memoji} />
        </div>
        <div className="code-line">
          <span className="line-number">5</span>
          <span className="keyword">const</span>&nbsp;
          <span className="function">developer</span>&nbsp;
          <span className="punctuation">=&nbsp;{"{"}</span>
        </div>
        <div className="code-line">
          <span className="line-number">6</span>
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="property">name</span>
          <span className="punctuation">:&nbsp;</span>
          <span className="string">"Shrihari Prakasam"</span>
          <span className="punctuation">,</span>
        </div>
        <div className="code-line">
          <span className="line-number">7</span>
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="property">role</span>
          <span className="punctuation">:&nbsp;</span>
          <span className="string">"Fullstack Engineer"</span>
          <span className="punctuation">,</span>
        </div>
        <div className="code-line">
          <span className="line-number">8</span>
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="property">passion</span>
          <span className="punctuation">:&nbsp;</span>
          <span className="string">
            "Building scalable microservices & native-like web apps!"
          </span>
        </div>
        <div className="code-line">
          <span className="line-number">9</span>
          <span className="punctuation">{"};"}</span>
          <span className="cursor"></span>
        </div>

        <div className="widgets">
          <GitHubCalendar
            username="shrihari-prakash"
            theme={theme}
            hideColorLegend
            hideMonthLabels
            blockRadius={2}
          />
          <div className="action-buttons">
            <Button onClick={() => navigate(routes.ABOUT)}>About Me</Button>
            <Button onClick={() => navigate(routes.PROJECTS)}>Projects</Button>
          </div>
        </div>
      </div>
    </HomeWrapper>
  );
}
