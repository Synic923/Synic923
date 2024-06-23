import React, { useEffect, useState } from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hi, I am @Synic";
const bio1 = "A frontend developer";

const LandingSection = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Set showContent to true after window load
    window.addEventListener("load", () => {
      setShowContent(true);
    });
  }, []);

  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      backgroundColor="black"
      backgroundImage="url('https://raw.githubusercontent.com/Synic-dx/Synic-dx/master/Images/neonblack.jpg')"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
    >
      <Avatar
        id="avatar"
        name="Synic"
        size="xl"
        src="https://raw.githubusercontent.com/Synic-dx/Synic-dx/master/Images/pfp.png"
        style={{ opacity: showContent ? 1 : 0, transition: "opacity 0.5s" }}
      />
      <Heading as="h1" size="lg" style={{ opacity: showContent ? 1 : 0, transition: "opacity 0.5s" }} fontFamily="anta" fontWeight= "600"> 
        {greeting}
      </Heading>
      <Heading as="h2" size="md" style={{ opacity: showContent ? 1 : 0, transition: "opacity 0.5s" }} fontFamily="anta" fontWeight= "200">
        {bio1}
      </Heading>
    </FullScreenSection>
  );
};

export default LandingSection;


