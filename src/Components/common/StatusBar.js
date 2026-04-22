import {
  BellOutlined,
  BranchesOutlined,
  CloseCircleOutlined,
  MessageOutlined,
  SmileOutlined,
  WarningOutlined,
} from "@ant-design/icons";
import React from "react";
import styled from "styled-components";
import Theme from "../../theme";
import ReactIcon from "../../assets/images/react_icon.svg";

const StatusBarWrapper = styled.div`
  width: 100%;
  height: 22px;
  background-color: ${Theme.Colors.Surface};
  display: flex;
  justify-content: space-between;
  position: relative;
  border-top: 1px solid ${Theme.Colors.Border};

  .left,
  .right {
    height: 100%;
    display: flex;

    .remote-window-btn {
      background-color: ${Theme.Colors.Accent};
      height: 100%;
      width: 34px;
      border-top: 1px solid ${Theme.Colors.Border};
      color: ${Theme.Colors.TextOnBackground};
      font-size: small;
      cursor: wait;
    }

    .status-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 10px;
      font-size: small;
      color: ${Theme.Colors.TextOnBackground};
      cursor: pointer;
      height: 100%;
      opacity: 0.8;
      user-select: none;
      text-decoration: none;

      :hover {
        background-color: rgba(255, 255, 255, 0.1);
      }

      .anticon {
        vertical-align: middle;
        margin-right: 4px;
      }

      .status-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        padding: 0 2px;
      }
    }
  }

  .hidden-mobile {
    ${Theme.Media.Portrait}, ${Theme.Media.Mobile} {
      display: none !important;
    }
  }
`;

export default function StatusBar() {
  return (
    <StatusBarWrapper>
      <div className="left">
        <a
          className="remote-window-btn"
          href="https://youtu.be/dQw4w9WgXcQ"
          target="_blank"
          rel="noreferrer"
        >
          <SmileOutlined />
        </a>
        <a
          className="status-btn"
          href="https://github.com/Shrihari-Prakash/portfolio"
          target="_blank"
          rel="noreferrer"
        >
          <BranchesOutlined /> main
        </a>
        <div className="status-btn hidden-mobile">
          <CloseCircleOutlined /> 0 &nbsp;
          <WarningOutlined /> 0
        </div>
      </div>
      <div className="right">
        <div className="status-btn hidden-mobile">Spaces: 4</div>
        <div className="status-btn">UTF-8</div>
        <div className="status-btn">CRLF</div>
        <div className="status-btn hidden-mobile">
          <div className="status-icon">
            <img src={ReactIcon} width={13} className="icon" alt="React" />
          </div>
          Powered by React
        </div>
        <div className="status-btn">
          <MessageOutlined />
        </div>
        <div className="status-btn">
          <BellOutlined />
        </div>
      </div>
    </StatusBarWrapper>
  );
}
