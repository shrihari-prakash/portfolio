import React from "react";
import styled from "styled-components";
import Theme from "../theme";

function calculateExperience(startDate) {
  return Math.round(
    (new Date().getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24) / 365,
  );
}

const AboutWrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow: auto;
  padding: 32px 48px;
  box-sizing: border-box;
  color: ${Theme.Colors.TextOnBackground};
  text-align: left;
  cursor: default;
  font-family: inherit;
  font-size: 15px;
  line-height: 1.6;

  ${Theme.Media.Portrait}, ${Theme.Media.Mobile} {
    padding: 16px;
  }

  .markdown-container {
    margin: 0 auto;
    width: 100%;
  }

  h1 {
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 24px;
    border-bottom: 1px solid ${Theme.Colors.Border};
    padding-bottom: 8px;
    color: ${Theme.Colors.Accent};

    &::before {
      content: "# ";
      color: ${Theme.Colors.TextMuted};
    }
  }

  h2 {
    font-size: 20px;
    font-weight: 600;
    margin-top: 16px;
    margin-bottom: 16px;
    color: #ffffff;
    border-bottom: 1px solid ${Theme.Colors.Border};
    padding-bottom: 4px;

    &::before {
      content: "## ";
      color: ${Theme.Colors.TextMuted};
    }
  }

  h3 {
    font-size: 16px;
    font-weight: 600;
    margin: 12px 0 8px 0;
    color: ${Theme.Colors.Accent};
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;

    &::before {
      content: "### ";
      color: ${Theme.Colors.TextMuted};
    }

    i {
      font-size: 18px;
      color: ${Theme.Colors.TextMuted};
    }
  }

  .subtitle {
    font-size: 14px;
    color: ${Theme.Colors.TextMuted};
    margin: 0 0 16px 0;
  }

  .profile-block {
    display: flex;
    align-items: flex-start;
    margin: 0 0 24px 0;
    gap: 32px;

    img {
      height: 160px;
      width: 160px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
      flex-shrink: 0;
    }

    .summary {
      font-size: 15px;
      color: ${Theme.Colors.TextOnBackground};
    }

    ${Theme.Media.Portrait}, ${Theme.Media.Mobile} {
      flex-direction: column;
      align-items: center;
    }
  }

  .skills-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin: 0 0 24px 0;
  }

  .skill-badge {
    display: flex;
    align-items: center;
    gap: 8px;
    background-color: ${Theme.Colors.Card};
    border: 1px solid ${Theme.Colors.Border};
    padding: 4px 8px;
    border-radius: 6px;
    font-size: 14px;
    color: ${Theme.Colors.TextOnBackground};
    transition: all 0.2s ease;

    i {
      font-size: 18px;
      color: ${Theme.Colors.Accent};
    }

    &:hover {
      background-color: ${Theme.Colors.Surface};
      border-color: ${Theme.Colors.Accent};
      transform: translateY(-2px);
    }
  }

  .experience-item {
    margin-bottom: 24px;

    ul {
      margin-top: 8px;
      padding-left: 24px;
      color: ${Theme.Colors.TextOnBackground};

      li {
        margin-bottom: 4px;
      }
    }
  }

  .education-item {
    margin-bottom: 16px;
  }
`;

export default function About() {
  const expYears = calculateExperience(new Date(2019, 11, 27, 0, 0, 0, 0));

  const skills = [
    { name: "JavaScript", icon: "devicon-javascript-plain" },
    { name: "TypeScript", icon: "devicon-typescript-plain" },
    { name: "Node.js", icon: "devicon-nodejs-plain" },
    { name: "React", icon: "devicon-react-original" },
    {
      name: "MariaDB",
      icon: "devicon-mysql-plain",
    } /* devicon doesn't always have mariadb, using mysql as generic fallback if needed */,
    { name: "MongoDB", icon: "devicon-mongodb-plain" },
    { name: "Git", icon: "devicon-git-plain" },
    { name: "Redis", icon: "devicon-redis-plain" },
    { name: "Socket.IO", icon: "devicon-socketio-original" },
    { name: "CSS/SCSS", icon: "devicon-css3-plain" },
    { name: "HTML", icon: "devicon-html5-plain" },
    { name: "Docker", icon: "devicon-docker-plain" },
  ];

  return (
    <AboutWrapper>
      <div className="markdown-container">
        <h2>About Me</h2>

        <div className="profile-block">
          {/* <img src={Me} alt="Me" /> */}
          <div className="summary">
            <p>
              I build microservices that scale and frontends that feel
              native-like for the web. I am a fullstack engineer with{" "}
              <b>{expYears} years</b> of experience.
            </p>
            <p>
              My skills revolve around the Javascript ecosystem, focusing
              heavily on Node.js, React, databases like MySQL and Redis, and
              related web technologies.
            </p>
          </div>
        </div>

        <h2>Skills and Technologies</h2>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-badge" key={skill.name}>
              <i className={skill.icon}></i>
              {skill.name}
            </div>
          ))}
        </div>

        <h2>Work Experience</h2>

        <div className="experience-item">
          <h3>
            Genesys
            <i className="devicon-typescript-plain"></i>
            <i className="devicon-javascript-plain"></i>
            <i className="devicon-nodejs-plain"></i>
            <i className="devicon-redis-plain"></i>
            <i className="devicon-docker-plain"></i>
            <i className="devicon-azure-plain"></i>
          </h3>
          <p className="subtitle">
            Senior Software Engineer | June 2021 - Present
          </p>
          <p>
            My contributions here include building a microservice based on
            Node.js to enable Genesys contact centers to operate on third-party
            voice end points like Microsoft Teams. I've also maintained product
            integrations with Salesforce.
          </p>
          <ul>
            <li>Most Valuable Player (2024 & 2025)</li>
            <li>All Star (2022 & 2023)</li>
          </ul>
        </div>

        <div className="experience-item">
          <h3>
            Inqutec Labs
            <i className="devicon-javascript-plain"></i>
            <i className="devicon-react-original"></i>
            <i className="devicon-nodejs-plain"></i>
            <i className="devicon-socketio-original"></i>
            <i className="devicon-mysql-plain"></i>
          </h3>
          <p className="subtitle">Software Engineer | May 2020 - June 2021</p>
          <p>
            Built web solutions for pharma industry brand marketing. Maintained
            an AI-based interactive E-Detailing platform for busy doctors and
            built a significant portion of a video conferencing platform
            tailored for medical conferences.
          </p>
        </div>

        <div className="experience-item">
          <h3>
            Rayappa Productions
            <i className="devicon-javascript-plain"></i>
            <i className="devicon-react-original"></i>
            <i className="devicon-nodejs-plain"></i>
            <i className="devicon-mongodb-plain"></i>
          </h3>
          <p className="subtitle">
            Software Engineer (Part Time) | May 2019 - Nov 2019
          </p>
          <p>
            Developed a song upload and music catalog management portal based on
            TypeScript, Node.js, MongoDB, and React JS that lets independent
            music artists release songs on mainstream music platforms like
            Spotify and Apple Music.
          </p>
        </div>

        <h2>Education</h2>
        <div className="education-item">
          <h3>PERI Institute of Technology</h3>
          <p className="subtitle">
            B.E - Computer Science and Engineering | 2019
          </p>
        </div>
      </div>
    </AboutWrapper>
  );
}
