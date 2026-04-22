import React from "react";
import styled from "styled-components";
import Theme from "../theme";
import Roamcalm from "../assets/images/screenshots/roamcalm.webp";
import CommaMessenger from "../assets/images/screenshots/comma-messenger.png";
import RayAppRelease from "../assets/images/screenshots/rayapp-release-hub.png";
import EventFactory from "../assets/images/screenshots/event-factory.png";
import NodeOAuth from "../assets/images/screenshots/node-oauth.png";
import Nitrogen from "../assets/images/screenshots/nitrogen.png";
import TelmiAI from "../assets/images/screenshots/telmi-ai.png";
import Button from "../Components/common/Button";

const ProjectWrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow: auto;
  cursor: default;
  padding: 16px;
  box-sizing: border-box;

  .header {
    margin-bottom: 24px;
    padding-bottom: 12px;
    color: ${Theme.Colors.TextOnBackground};
    font-size: 20px;
    font-weight: 400;
  }

  .cards {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0;
    margin: 0;
    list-style-type: none;
    max-width: 900px;
  }

  .card {
    display: flex;
    align-items: flex-start;
    padding: 16px;
    border-radius: 6px;
    background-color: ${Theme.Colors.Background};
    text-decoration: none;
    transition: background-color 0.1s ease;
    border: 1px solid transparent;

    &:hover {
      border: 1px solid ${Theme.Colors.Border};
    }

    ${Theme.Media.Portrait}, ${Theme.Media.Mobile} {
      flex-direction: column;
    }
  }

  .card__image {
    width: 240px;
    height: 175px;
    object-fit: cover;
    border-radius: 8px;
    margin-right: 24px;
    flex-shrink: 0;
    border: 1px solid ${Theme.Colors.Border};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

    ${Theme.Media.Portrait}, ${Theme.Media.Mobile} {
      width: 100%;
      height: auto;
      aspect-ratio: 4 / 3;
      margin-bottom: 16px;
      margin-right: 0;
    }
  }

  .card__content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    min-width: 0; /* allows text truncation */
  }

  .card__header-group {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .card__title {
    font-size: 16px;
    font-weight: 600;
    margin: 0;
    color: ${Theme.Colors.Accent};
    font-family: inherit;
  }

  .card__publisher {
    font-size: 12px;
    color: ${Theme.Colors.TextMuted};
  }

  .card__description {
    margin: 8px 0;
    color: ${Theme.Colors.TextOnBackground};
    font-size: 13px;
    line-height: 1.4;
    text-align: left;

    ${Theme.Media.Portrait}, ${Theme.Media.Mobile} {
      white-space: normal;
    }
  }

  .card__actions {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: auto;
  }

  .card__tag {
    font-size: 11px;
    color: ${Theme.Colors.TextOnBackground};
    background-color: ${Theme.Colors.Border};
    padding: 2px 6px;
    border-radius: 4px;
    margin-right: 4px;
  }
`;

const projectList = [
  {
    name: "Roamcalm",
    thumbnail: Roamcalm,
    description:
      "Forward your booking confirmations and watch them transform into organized, offline-ready travel itineraries. Chat with our AI travel planner to create trips naturally, collaborate with companions, track expenses, and access everything offline. 🌍",
    tags: ["node", "react", "mongodb", "redis", "typescript"],
    demo: "https://roamcalm.com",
  },
  {
    name: "Liquid",
    thumbnail: NodeOAuth,
    description:
      "Liquid is a Docker-based open-source authentication server that supercharges your product development by offering out of the box social APIs for features like follow-unfollow, blocking, and banning so that you can focus on just your application logic.",
    tags: ["NodeOAuth", "node", "mongodb"],
    source_code: "https://github.com/shrihari-prakash/liquid",
  },
  {
    name: "Nitrogen",
    thumbnail: Nitrogen,
    description:
      "Beautiful user management admin panel for your Liquid instances. ⚙️",
    tags: ["Nitrogen", "node", "mongodb"],
    source_code: "https://github.com/shrihari-prakash/liquid",
  },
  {
    name: "RayApp Release",
    thumbnail: RayAppRelease,
    description:
      "An open music release platform for independent artists to get their songs into major music platforms like Spotify.",
    tags: ["react", "node", "mongodb", "typescript", "ant-design"],
    demo: "https://rayapprelease.com",
  },
  {
    name: "Comma Messenger",
    thumbnail: CommaMessenger,
    description:
      "Open source text messenger with encryption and push notifications support.",
    tags: ["react", "node", "socket.io"],
    source_code: "https://github.com/Shrihari-Prakash/comma-messenger-backend",
    demo: "https://commamessenger.netlify.app",
  },
  {
    name: "Telmi.AI",
    thumbnail: TelmiAI,
    description:
      "An intelligent virtual e-detailing sales rep designed allows pharma companies to interact with doctors.",
    tags: ["javascript", "node", "mysql", "react"],
  },
  {
    name: "Event Factory",
    thumbnail: EventFactory,
    description:
      "This package provides a event broker similar to Node JS's EventEmitter API on the browser.",
    tags: ["javascript"],
    source_code: "https://github.com/Shrihari-Prakash/event-factory",
    demo: "https://www.npmjs.com/package/event-factory",
  },
];

export default function Project() {
  return (
    <ProjectWrapper>
      <ul className="cards">
        {projectList.map((project, idx) => (
          <li key={idx}>
            <div className="card">
              <img src={project.thumbnail} className="card__image" alt="icon" />
              <div className="card__content">
                <div className="card__header-group">
                  <h3 className="card__title">{project.name}</h3>
                  <span className="card__publisher">Shrihari Prakash</span>
                </div>
                <p className="card__description">{project.description}</p>
                <div className="card__actions">
                  {project.demo && (
                    <Button onClick={() => window.open(project.demo, "_blank")}>
                      Open Project
                    </Button>
                  )}
                  {project.source_code && (
                    <Button
                      onClick={() => window.open(project.source_code, "_blank")}
                    >
                      Source
                    </Button>
                  )}
                  <div style={{ marginLeft: "8px" }}>
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="card__tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </ProjectWrapper>
  );
}
