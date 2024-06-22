import React from "react";
import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      spacing={4}
      borderWidth="1px"
      borderRadius="lg"
      p={4}
      boxShadow="md"
      alignItems="flex-start"
    >
      <Image src={imageSrc} alt={title} backgroundColor={'black'} objectFit="cover" />

      <Heading size="md">{title}</Heading>

      <Text>{description}</Text>

      <HStack>
        <FontAwesomeIcon icon={faArrowRight} />
        <Text>Learn more</Text>
      </HStack>
    </VStack>
  );
};

export default Card;

