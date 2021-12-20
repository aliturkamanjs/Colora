import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { GoThreeBars } from "react-icons/go";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BiHomeSmile } from "react-icons/bi";
import { IoIosColorFilter } from "react-icons/io";
import { IoGridOutline } from "react-icons/io5";
import { AiOutlineContainer } from "react-icons/ai";
import logo from "../../svgs/logo.svg";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

const NavHeader = () => {
  const nav = [
    { name: "Home", to: "/", color: "#EF72AE", weight: 600, id: 1 },
    {
      name: "Explore",
      to: "/explore",
      color: "gray.700",
      weight: 400,
      id: 2,
    },
    {
      name: "Template",
      to: "/template",
      weight: 400,
      color: "gray.700",
      id: 3,
    },
    { name: "About", to: "/about", weight: 400, color: "gray.700", id: 4 },
  ];

  const FlexMotion = motion(Flex);
  const navMotion = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: -0 },
  };

  return (
    <>
      <FlexMotion
        w="100%"
        alignItems="center"
        justifyContent="space-between"
        pt="3"
        variants={navMotion}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6 }}
      >
        <Image src={logo} alt="logo" width="57px" />

        <Menu>
          <MenuButton
            display={["block", "none", "none", "none", "none"]}
            bg="transparent"
            _focus={{}}
            _hover={{}}
            _active={{}}
            as={Button}
            rightIcon={<GoThreeBars className="hamburger-menu" />}
          ></MenuButton>
          <MenuList
            bg="#fff"
            backdropBlur="16deg"
            zIndex="200"
            display={["block", "none", "none", "none", "none"]}
          >
            <Link to="/">
              <MenuItem icon={<BiHomeSmile />}>Home</MenuItem>
            </Link>
            <Link to="/explore">
              <MenuItem icon={<IoIosColorFilter />}>Explore</MenuItem>
            </Link>
            <Link to="/template">
              <MenuItem icon={<IoGridOutline />}>Template</MenuItem>
            </Link>
            <Link to="/about">
              <MenuItem icon={<AiOutlineContainer />}>About</MenuItem>
            </Link>
          </MenuList>
        </Menu>

        <Flex display={["none", "flex", "flex", "flex", "flex"]}>
          {nav.map((n) => {
            return (
              <Text
                key={n.id}
                cursor="pointer"
                color={n.color}
                fontWeight={n.weight}
                fontSize="20px"
                pb="1"
                transition=".1s all ease-in-out"
                mr={n.name !== "About" ? "8" : "0px"}
                borderBottom=".2px solid none"
                _hover={{ borderBottom: ".2px solid #EF72AE" }}
              >
                <Link to={n.to}>{n.name}</Link>
              </Text>
            );
          })}
        </Flex>
        <Flex display={["none", "none", "none", "flex", "flex"]}>
          <Button
            h="34px"
            fontWeight="600"
            fontSize="19px"
            color="#EF72AE"
            fontFamily="Raleway"
            mr="1"
            background="none"
            _hover={{ color: "#fff" }}
            _focus={{}}
            _active={{}}
          >
            Log in
          </Button>
          <Button
            rounded="10"
            h="34px"
            fontWeight="600"
            fontSize="14px"
            bg="#EF72AE"
            color="#fff"
            fontFamily="Raleway"
            _hover={{ color: "#EF72AE", bg: "#fff" }}
            _focus={{}}
            _active={{}}
          >
            Log up
          </Button>
        </Flex>
      </FlexMotion>
    </>
  );
};

export default NavHeader;
