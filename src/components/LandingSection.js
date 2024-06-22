import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hi, I am @Synic";
const bio1 = "A frontend developer";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="black"
    backgroundImage="url('../images/neonblack.png')"
  >
  <Avatar name="Synic" size="xl" src="../src/images/pfp.png" />
    <Heading as="h1" size="lg">
      {greeting}
    </Heading>
    <Heading as="h2" size="md">
      {bio1}
    </Heading>
  </FullScreenSection>
);

export default LandingSection;
