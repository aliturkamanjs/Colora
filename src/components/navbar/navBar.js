import { Flex } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import logo from "../../svgs/logo.svg";
import { Text } from "@chakra-ui/layout";
import { Link, NavLink } from "react-router-dom";

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
            <Text key={item.id} ml="4" color="#323232" fontWeight="bold">
              <NavLink activeStyle={{ color: "#EF72AE" }} exact to={item.to}>
                {item.name}
              </NavLink>
            </Text>
          );
        })}
      </Flex>

      <Flex>
        
        <Flex>
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
      </Flex>
    </Flex>
  );
};

export default NavBar;
