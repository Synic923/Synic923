import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import "../fonts/Anta-Regular.ttf"; // Import the font file

const greeting = "Hi, I am @Synic";
const bio1 = "A frontend developer";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="black"
    backgroundImage="url('https://raw.githubusercontent.com/Synic-dx/Synic-dx/master/Images/neonblack.jpg')" // Correct the URL format
    backgroundSize="cover"
    backgroundRepeat="no-repeat"
    fontFamily="Anta" // Specify the font family name
  >
    <Avatar name="Synic" size="xl" src="https://raw.githubusercontent.com/Synic-dx/Synic-dx/master/Images/pfp.png" />
    <Heading as="h1" size="lg">
      {greeting}
    </Heading>
    <Heading as="h2" size="md">
      {bio1}
    </Heading>
  </FullScreenSection>
);

export default LandingSection;
