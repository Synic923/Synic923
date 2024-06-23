import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "ePiano",
    description:
      "3-Octave Online Piano Player- Made with Vanilla JS",
    getImageSrc: () => require("../images/ePiano.png"),
    link: "https://synic-dx.github.io/ePiano/"
    
  },
  {
    title: "blackJack",
    description:
      "blackJack Online- Made with Vanilla JS",
    getImageSrc: () => require("../images/blackjack.png"),
    link: "https://synic-dx.github.io/blackJack/blackJack.html"
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="black"
      backgroundImage="https://raw.githubusercontent.com/Synic-dx/Synic-dx/master/Images/bg1.jpg"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
      fontFamily="Anta"
    >
      <Heading as="h1" id="projects-section" fontFamily="anta">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
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
