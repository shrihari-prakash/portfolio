import { DownOutlined, RightOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Theme from "../../theme";
import files from "./data/files";

const BrowserWrapper = styled.div`
  height: 100%;
  width: 300px;
  border-right: 1px solid ${Theme.Colors.Border};
  color: ${Theme.Colors.TextOnBackground};
  cursor: default;
  user-select: none;
  position: relative;
  overflow-x: hidden;
  background-color: ${Theme.Colors.Background};

  .heading,
  .list-project {
    font-size: 11px;
    width: 100%;
    text-align: left;
    padding: 12px;

    :hover {
      background-color: ${Theme.Colors.Surface};
    }
  }

  .list-project {
    padding: 4px 6px;
    font-weight: bold;
    cursor: pointer;
  }

  .intented {
    margin: 0 0px;
    padding-left: 20px;
    font-weight: normal;
    font-size: 12px;
  }

  .more {
    margin: 0 0px;
    padding-left: 34px;
    display: flex;
    align-items: center;
    justify-content: left;
  }

  .file-icon {
    width: 18px;
    margin-right: 4px;
  }

  ${Theme.Media.Portrait}, ${Theme.Media.Mobile} {
    display: none;
  }
`;

export default function Browser() {
  const [projectExpanded, setProjectExpanded] = useState(true);
  const [folderExpanded, setFolderExpanded] = useState(true);
  const navigate = useNavigate();

  return (
    <BrowserWrapper>
      <div className="heading">EXPLORER</div>
      <div
        className="list-project"
        onClick={() => setProjectExpanded(!projectExpanded)}
      >
        {projectExpanded ? <DownOutlined /> : <RightOutlined />} PORTFOLIO -
        SHRIHARI PRAKASAM
      </div>
      {projectExpanded && (
        <>
          <div
            className="list-project intented"
            onClick={() => setFolderExpanded(!folderExpanded)}
          >
            {folderExpanded ? <DownOutlined /> : <RightOutlined />} src
          </div>
          {folderExpanded &&
            files.map((file) => (
              <div
                className="list-project intented more"
                onClick={() => navigate(file.route)}
              >
                <img src={file.icon} alt={file.name} className="file-icon" />
                {file.name}
              </div>
            ))}
        </>
      )}
    </BrowserWrapper>
  );
}
