import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Theme from "../../theme";
import files from "./data/files";

const TabsWrapper = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;
  background-color: ${Theme.Colors.Surface};
  user-select: none;
  border-bottom: 1px solid ${Theme.Colors.Border};

  .tab {
    height: 100%;
    color: ${Theme.Colors.TextMuted};
    font-size: 13px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0 18px;
    cursor: pointer;
    border-right: 1px solid #1f1f1f;
    border-top: 2px solid transparent; /* placeholder for active state */

    :hover {
      color: ${Theme.Colors.TextOnBackground};
    }

    .file-icon {
      width: 18px;
      margin-right: 6px;
    }
  }

  .active {
    border-top: 2px solid ${Theme.Colors.Accent};
    background-color: ${Theme.Colors.Background};
    color: ${Theme.Colors.TextOnBackground};
    height: 100%;
  }
`;

export default function Tabs() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <TabsWrapper>
      {files.map((file) => (
        <div
          className={
            "tab" + (location.pathname === file.route ? " active" : "")
          }
          onClick={() => {
            navigate(file.route);
            if (navigator.vibrate) navigator.vibrate(100);
          }}
        >
          <img src={file.icon} alt={file.name} className="file-icon" />
          {file.name}
        </div>
      ))}
    </TabsWrapper>
  );
}
