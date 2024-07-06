import React from "react";
import {
  Heading,
  HStack,
  Image,
  Text,
  LinkBox,
  LinkOverlay,
  Flex
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, imageSrc, link }) => {
  return (
    <LinkBox
      display={"flex"}
      flexDirection={"column"}
      borderWidth="1px"
      borderRadius="lg"
      borderColor="cyan"
      boxShadow="md"
      alignItems="flex-start"
      backgroundColor="black"
      gap={5} p={4}
    >
      <Image
        src={imageSrc}
        alt={title}
        backgroundColor="black"
        objectFit="cover"
        borderTopRadius={8}
      />

        <Heading fontSize={'24px'} fontFamily={'Anta'} fontWeight={500}>{title}</Heading>

        <Text>{description}</Text>

        <HStack>
          <FontAwesomeIcon icon={faArrowRight} />

          <LinkOverlay href={link} isExternal>
            Learn More
          </LinkOverlay>
        </HStack>
    </LinkBox>
  );
};

export default Card;
