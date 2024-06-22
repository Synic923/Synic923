import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faReddit, faNpm } from '@fortawesome/free-brands-svg-icons';
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto:shinjan1280@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/Synic-dx",
  },
  {
    icon: faReddit,
    url: "https://www.reddit.com/user/Shinjan128/",
  },
  {
    icon: faNpm,
    url: "https://www.npmjs.com/~synic-dx",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      backgroundColor="black"
      color="white"
    >
      <Box maxWidth="1280px" margin="0 auto">
        <HStack px={16} py={4} justifyContent="space-between" alignItems="center">
          <nav>
            {socials.map((social) => (
              <a
                key={social.icon}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginLeft: "30px" }}
              >
                <FontAwesomeIcon icon={social.icon} size="lg" />
              </a>
            ))}
          </nav>
          <nav>
            <HStack spacing={8}>
              <a onClick={handleClick("projects")} href="#projects-section">
                Projects
              </a>
              <a onClick={handleClick("contact")} href="#contact-section">
                Contact Me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;


