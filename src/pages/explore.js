import { Container,  } from "@chakra-ui/react";
import bgHome from "../images/background.png";
import Layout from "../layout/layout";
import PalettesComp from "../components/palettes/palettesComp";


const Explore = () => {

  return (
    <Container
      maxW="container.3xl"
      h="auto"
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
