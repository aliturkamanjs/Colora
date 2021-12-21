import { Flex } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import logo from "../../svgs/logo.svg";
import { Text } from "@chakra-ui/layout";
import { Link, NavLink } from "react-router-dom";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { BiHomeSmile } from "react-icons/bi";
import { IoIosColorFilter } from "react-icons/io";
import { IoGridOutline } from "react-icons/io5";
import { GoThreeBars } from "react-icons/go";
import { AiOutlineContainer } from "react-icons/ai";
import { Button } from "@chakra-ui/button";

const NavBar = () => {
  const items = [
    { name: "Home", to: "/", exact: true, id: 1 },
    { name: "Explore", to: "/explore", id: 2 },
    { name: "Template", to: "/template", id: 3 },
    { name: "About", to: "/about", id: 4 },
  ];

  return (
    <Flex
      w="100%"
      h="64px"
      borderBottom="0.1px solid #e7e7e7"
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex alignItems="center">
        <Link to="/">
          <Image mr="6" src={logo} alt="logo" width="57px" />
        </Link>
        {items.map((item) => {
          return (
            <Text
              key={item.id}
              display={["none", "block", "block", "block", "block"]}
              ml="4"
              color="#323232"
              fontWeight="bold"
            >
              <NavLink activeStyle={{ color: "#EF72AE" }} exact to={item.to}>
                {item.name}
              </NavLink>
            </Text>
          );
        })}
      </Flex>

      <Flex>
        <Flex display={["none", "none", "none", "flex", "flex"]}>
          <Button
            h="32px"
            fontWeight="600"
            fontSize="19px"
            color="#EF72AE"
            fontFamily="Raleway"
            background="none"
            _hover={{ color: "#FF5B79" }}
            _focus={{}}
            _active={{}}
          >
            Log in
          </Button>
          <Button
            rounded="8"
            h="32px"
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
            <NavLink exact={true} activeClassName="active" to="/">
              <MenuItem color="gray.900" icon={<BiHomeSmile />}>Home</MenuItem>
            </NavLink>
            <NavLink activeClassName="active" to="/explore">
              <MenuItem color="gray.900" icon={<IoIosColorFilter />}>Explore</MenuItem>
            </NavLink>
            <NavLink activeClassName="active" to="/template">
              <MenuItem color="gray.900" icon={<IoGridOutline />}>Template</MenuItem>
            </NavLink>
            <NavLink activeClassName="active" to="/about">
              <MenuItem color="gray.900" icon={<AiOutlineContainer />}>About</MenuItem>
            </NavLink>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};

export default NavBar;
