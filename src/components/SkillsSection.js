import React from "react";
import {
  VStack,
  Box,
  HStack,
  CircularProgress,
  CircularProgressLabel,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import Card from "./Card";
import "@fontsource/karla";

const certificates = [
  {
    title: "HTML & CSS In Depth",
    description:
      "Completed an in-depth course covering HTML5 and CSS for responsive web design.",
    getImageSrc: () => require("../images/HTML&CSS.png"),
    link: "https://coursera.org/share/3dbf75c851f2deebb64bab8879175467",
  },
  {
    title: "Programming with Javascript",
    description:
      "Completed a comprehensive course covering fundamental web development concepts using JavaScript.",
    getImageSrc: () => require("../images/Javascript.png"),
    link: "https://coursera.org/share/1cf84da6773193a5641e6644a9c46c5b",
  },
  {
    title: "Version-Control",
    description:
      "Experienced with distributed Version Control System- Git- and basic Unix commands.",
    getImageSrc: () => require("../images/Version-Control.png"),
    link: "https://coursera.org/share/e1a50a0951dd07b19b2876f64a84bba1",
  },
  {
    title: "React",
    description:
      "Learned to use React and various UI libraries to develop fully interactive SPAs.",
    getImageSrc: () => require("../images/React.png"),
    link: "https://coursera.org/share/5548f2e9c9dfdc9ac94ab97afcd38b7e",
  },
  {
    title: "Principles of UI/UX",
    description:
      "Gained knowledge of foundational UI/UX principles and learned to use Figma",
    getImageSrc: () => require("../images/UIUX.png"),
    link: "https://coursera.org/share/123b44b509bf975ed8351d4e371988c2",
  },
];
const SkillsSection = () => {
  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#090A0A"
      p={"8%"}
      id="skills-section"
      minHeight={"80vh"}
    >
      <VStack gap={10}>
        <Heading as="h1" fontFamily={"Anta"} fontWeight={400}>
          Skills Attained
        </Heading>
        <HStack>
          <CircularProgress
            value={100}
            color="orange.400"
            thickness="4px"
            size="100px"
          >
            <CircularProgressLabel>HTML</CircularProgressLabel>
          </CircularProgress>
          <CircularProgress
            value={85}
            color="blue.400"
            thickness="4px"
            size="100px"
          >
            <CircularProgressLabel>CSS</CircularProgressLabel>
          </CircularProgress>
          <CircularProgress
            value={75}
            color="yellow.400"
            thickness="4px"
            size="100px"
          >
            <CircularProgressLabel>JS</CircularProgressLabel>
          </CircularProgress>
          <CircularProgress
            value={60}
            color="cyan.400"
            thickness="4px"
            size="100px"
          >
            <CircularProgressLabel>React</CircularProgressLabel>
          </CircularProgress>
          <CircularProgress
            value={75}
            color="pink.400"
            thickness="4px"
            size="100px"
          >
            <CircularProgressLabel>Figma</CircularProgressLabel>
          </CircularProgress>
        </HStack>

        <Accordion allowToggle w={"85vw"}>
          <AccordionItem>
            <h2>
              <AccordionButton p={5}>
                <Box as="span" flex="1" textAlign="center">
                  <Heading
                    as="h3"
                    fontFamily={"Anta"}
                    fontWeight={200}
                    fontSize={"20px"}
                  >
                    Meta Frontend Professional Developer Certification
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel p={5}>
              <Box
                display="grid"
                gridTemplateColumns="repeat(3,minmax(0,1fr))"
                gridGap={8}
                mb={4}
              >
                {certificates.map((project) => (
                  <Card
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    imageSrc={project.getImageSrc()}
                    link={project.link}
                  />
                ))}
              </Box>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </VStack>
    </FullScreenSection>
  );
};

export default SkillsSection;
