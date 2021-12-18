import { Container, Flex, Heading } from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import bgHome from "../images/background.png";
import Layout from "../layout/layout";
import PalettesComp from "../components/palettes/palettesComp";
import { Link } from "react-router-dom";



const Explore = () => {


  return (
    <Container
      maxW="container.3xl"
      backgroundImage={bgHome}
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundSize="cover"
    >
      <Layout>
        <PalettesComp />

      </Layout>
    </Container>
  );
};

export default Explore;
