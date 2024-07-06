import React from "react";
import { Heading, HStack, Image, Text, VStack, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, imageSrc, link }) => {
  return (
    <VStack
      spacing={4}
      borderWidth="1px"
      borderRadius="lg"
      borderColor="cyan"
      p={4}
      boxShadow="md"
      alignItems="flex-start"
      backgroundColor="black"
    >

      <Image src={imageSrc} alt={title} backgroundColor="black" objectFit="cover" />

      <Heading size="md">{title}</Heading>

      <Text>{description}</Text>

      <HStack>

        <FontAwesomeIcon icon={faArrowRight} />

        <Link href={link} isExternal>
         Learn More
        </Link>

      </HStack>

    </VStack>
  );
};

export default Card;

