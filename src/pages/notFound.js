import { Container } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";
import { Flex, HStack } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import bgHome from "../images/background.png";
import Layout from "../layout/layout";
import notFoundIcon from "../svgs/notFoundIcon.svg";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <Container
      h="auto"
      maxW="container.3xl"
      backgroundImage={bgHome}
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundSize="cover"
    >
      <Layout>
        <Flex w="100%" flexDir="column" alignItems="center" minH="860px">
          <Image width="700px" mt="120px" src={notFoundIcon} />

          <Text
            color="gray.700"
            mt="20"
            fontSize={["25px", "30px", "30px", "30px", "30px"]}
            fontWeight="700"
          >
            Page not found!
          </Text>
          <Flex mt="4">
            <HStack spacing="6">
              <Link to="/">
                <Button
                  bg="#F774B9"
                  color="#fff"
                  h={["32px", "37px", "37px", "37px", "37px"]}
                  rounded="12"
                >
                  go home
                </Button>
              </Link>
              <Link to="/explore">
                <Button
                  bg="#fff"
                  color="#F774B9"
                  h={["32px", "37px", "37px", "37px", "37px"]}
                  rounded="12"
                >
                  go back
                </Button>
              </Link>
            </HStack>
          </Flex>
        </Flex>
      </Layout>
    </Container>
  );
};

export default NotFoundPage;
