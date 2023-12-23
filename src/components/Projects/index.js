import React from "react";
import { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from "./ProjectsStyle";
import ProjectCard from "../Cards/ProjectCards";
import { projects } from "../../data/constants";

import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From desktop apps to web
          apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup>
          {toggle === "all" ? (
            <ToggleButton active value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          )}
          <Divider />
          {toggle === "Point of Sale" ? (
            <ToggleButton
              active
              value="Point of Sale"
              onClick={() => setToggle("Point of Sale")}
            >
              Point of Sale
            </ToggleButton>
          ) : (
            <ToggleButton
              value="Point of Sale"
              onClick={() => setToggle("Point of Sale")}
            >
              Point of Sale
            </ToggleButton>
          )}
          <Divider />
          {toggle === "Warehouse Management" ? (
            <ToggleButton
              active
              value="Warehouse Management"
              onClick={() => setToggle("Warehouse Management")}
            >
              Warehouse Management
            </ToggleButton>
          ) : (
            <ToggleButton
              value="Warehouse Management"
              onClick={() => setToggle("Warehouse Management")}
            >
              Warehouse Management
            </ToggleButton>
          )}
          <Divider />
          {toggle === "Voting Management" ? (
            <ToggleButton
              active
              value="Voting Management"
              onClick={() => setToggle("Voting Management")}
            >
              Voting Management
            </ToggleButton>
          ) : (
            <ToggleButton
              value="Voting Management"
              onClick={() => setToggle("Voting Management")}
            >
              Voting Management
            </ToggleButton>
          )}
          <Divider />
          {toggle === "Cloud Apps" ? (
            <ToggleButton
              active
              value="Cloud Apps"
              onClick={() => setToggle("Cloud Apps")}
            >
              Cloud Apps
            </ToggleButton>
          ) : (
            <ToggleButton
              value="Cloud Apps"
              onClick={() => setToggle("Cloud Apps")}
            >
              Cloud Apps
            </ToggleButton>
          )}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === "all" &&
            projects.map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
