/* eslint-disable react/jsx-no-target-blank */
import { Flex } from "@chakra-ui/react";
import { Heading, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { FaGithub } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { SiInstagram } from "react-icons/si";
import { BsTwitter } from "react-icons/bs";
import fire from "../../svgs/fire.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Flex
      position="absolute"
      right="0"
      left="0"
      // bottom="0"
      height="300px"
      bg="#f8fafd"
      flexDir="column"
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex w="60%" minH="190px" mt="8" justifyContent="space-between">
        <Flex flexDir="column">
          <Heading size="md" color="#1A202C" fontWeight="500">
            Website
          </Heading>
          <Link to="/explore">
            <Text fontWeight="500" color="#4A5568" mt="4">
              Explore popular palettes
            </Text>
          </Link>
          <Link to="/template">
            <Text fontWeight="500" mt="1" color="#4A5568">
              Template color palettes
            </Text>
          </Link>
          <Link to="/about">
            <Text fontWeight="500" mt="1" color="#4A5568">
              About us
            </Text>
          </Link>
        </Flex>
        <Flex flexDir="column">
          <Heading size="md" color="#1A202C" fontWeight="500">
            Company
          </Heading>

          <Text fontWeight="500" color="#4A5568" mt="4">
            Terms of service
          </Text>

          <Text fontWeight="500" mt="1" color="#4A5568">
            Privacy policy
          </Text>
          <Text fontWeight="500" mt="1" color="#4A5568">
            Help center
          </Text>
          <Text fontWeight="500" mt="1" color="#4A5568">
            Contact
          </Text>
        </Flex>
        <Flex flexDir="column">
          <Heading size="md" color="#1A202C" fontWeight="500">
            Resources
          </Heading>

          <Text fontWeight="500" color="#4A5568" mt="4">
            Font combinations
          </Text>

          <Text fontWeight="500" mt="1" color="#4A5568">
            Palette generator
          </Text>
          <Text fontWeight="500" mt="1" color="#4A5568">
            Color wheel
          </Text>
          <Text fontWeight="500" mt="1" color="#4A5568">
            Support
          </Text>
        </Flex>
        <Flex flexDir="column">
          <Heading size="md" color="#1A202C" fontWeight="500">
            Product
          </Heading>

          <Text fontWeight="500" color="#4A5568" mt="4">
            iOS app
          </Text>

          <Text fontWeight="500" mt="1" color="#4A5568">
            Adobe addon
          </Text>
          <Text fontWeight="500" mt="1" color="#4A5568">
            Chrome extension
          </Text>
        </Flex>
      </Flex>
      <Flex w="60%" mb="4" justifyContent="space-between">
        <Flex alignItems="center">
          <Text display="inline-block">
            © {new Date().getFullYear()} created by
            <Text fontWeight="500" display="inline-block" ml="1">
              <Link
                _focus={{}}
                isExternal
                href="https://github.com/aliturkamanjs"
              >
                Ali Turkaman
              </Link>
            </Text>
          </Text>
          <Image ml="1" w="21px" src={fire} />
        </Flex>
        <Flex justifyContent="space-between" alignItems="center" w="130px ">
          <a target="_blank" href="https://github.com/aliturkamanjs">
            <FaGithub fontSize="25px" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/ali-turkaman-55704a21b/"
          >
            <ImLinkedin fontSize="23px" />
          </a>
          <a target="_blank" href="https://www.instagram.com/ali_turkaman_n/">
            <SiInstagram fontSize="23px" />
          </a>
          <a target="_blank" href="https://twitter.com/aturkaman">
            <BsTwitter fontSize="25px" />
          </a>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;