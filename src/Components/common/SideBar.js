import {
  CodeOutlined,
  HomeOutlined,
  IdcardOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { routes } from "../../routes";
import Theme from "../../theme";

const SideBarWrapper = styled.div`
  height: 100%;
  width: 45px;
  background-color: ${Theme.Colors.Surface};
  border-right: 1px solid #1f1f1f;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .icons-top,
  .icons-bottom {
    width: 100%;

    .icon {
      height: 50px;
      width: 100%;
      opacity: 0.6;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: x-large;
      color: ${Theme.Colors.TextMuted};
      border-left: 2px solid transparent;

      :hover {
        color: ${Theme.Colors.TextOnBackground};
        opacity: 1;
      }
    }

    .active {
      border-left: 2px solid ${Theme.Colors.Accent};
      color: ${Theme.Colors.TextOnBackground};
      opacity: 1;
    }
  }

  ${Theme.Media.Portrait}, ${Theme.Media.Mobile} {
    display: none;
  }
`;

export default function SideBar() {
  const actions = [
    {
      icon: <HomeOutlined />,
      route: routes.HOME,
    },
    {
      icon: <UserOutlined />,
      route: routes.ABOUT,
    },
    {
      icon: <IdcardOutlined />,
      route: routes.CONTACT,
    },
    {
      icon: <CodeOutlined />,
      route: routes.PROJECTS,
    },
  ];

  const location = useLocation();
  const navigate = useNavigate();

  return (
    <SideBarWrapper>
      <div className="icons-top">
        {actions.map((action, index) => (
          <div
            className={
              "icon" + (location.pathname === action.route ? " active" : "")
            }
            onClick={() => navigate(action.route)}
          >
            {action.icon}
          </div>
        ))}
      </div>
      <div className="icons-bottom">
        <div className="icon">
          <SettingOutlined />
        </div>
      </div>
    </SideBarWrapper>
  );
}
