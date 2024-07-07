import * as React from "react";
import { VStack } from "@chakra-ui/react";

/**
 * Illustrates the use of children prop and spread operator
 */
const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  return (
    <VStack
      backgroundColor={boxProps.backgroundColor}
      color={isDarkBackground ? "white" : "black"}
      backgroundImage={boxProps.backgroundImage}
      backgroundRepeat={boxProps.backgroundRepeat}
      backgroundSize={boxProps.backgroundSize}
      fontFamily={boxProps.fontFamily}
    >
      <VStack maxWidth="1280px" {...boxProps}>
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
