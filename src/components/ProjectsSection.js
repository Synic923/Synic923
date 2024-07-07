import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "ePiano",
    description:
      "3-Octave Online Piano Player Optimized For Keyboard Layouts- Made with Vanilla JS",
    getImageSrc: () => require("../images/ePiano.png"),
    link: "https://synic-dx.github.io/ePiano/",
  },
  {
    title: "blackJack",
    description:
      "Fully Functional Blackjack Card Game Engine- Made with Vanilla JS",
    getImageSrc: () => require("../images/blackjack.png"),
    link: "https://synic-dx.github.io/blackJack/blackJack.html",
  },
  {
    title: "Little Lemon",
    description:
      "Landing Page & Fully Functional Table Booking System For Fictional Restaurant- Made with React",
    getImageSrc: () => require("../images/littleLemon.png"),
    link: "https://synic-dx.github.io/Little-Lemon/",
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="black"
      backgroundImage="https://raw.githubusercontent.com/Synic-dx/Synic-dx/react/src/images/bg1.jpg"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
      fontFamily="Anta"
      id="projects-section"
      paddingTop="80px"
      minHeight={"100vh"}
    >
      <Heading as="h1" fontFamily="anta" fontWeight={400}>
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(3,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            link={project.link}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
