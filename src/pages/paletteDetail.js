import { useState, useRef, useEffect } from "react";
import { Container, Flex } from "@chakra-ui/react";
import { Box, Divider, Text } from "@chakra-ui/layout";
import { AiFillLike } from "react-icons/ai";
import { Button } from "@chakra-ui/button";
import { BsDownload } from "react-icons/bs";
import domtoimage from "dom-to-image";
import bgHome from "../images/background.png";
import Layout from "../layout/layout";
import CopyToClipboard from "react-copy-to-clipboard";
import NotFoundPage from "./notFound";

const PaletteDetail = ({ location }) => {
  const [copied, setCopied] = useState(false);
  const [source, setSource] = useState("");

  const container = useRef(null);
  useEffect(() => {
    exportToPng(container.current);
  }, []);

  const exportToPng = (dom) => {
    domtoimage.toPng(dom).then(function (dataURL) {
      let img = new Image();
      img.src = dataURL;
      setSource(img.src);
    });
  };

  if (!location.state) {
    return <NotFoundPage />;
  }

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
        <Flex
          w="100%"
          minH="200px"
          mt="70px"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
        >
          <Flex
            key={location.state.p.id}
            mt="9"
            mr="3"
            ml="3"
            w={["299px", "299px", "300px", "600px", "600px"]}
            h={["300px", "300px", "300px", "400px", "400px"]}
            flexDir="column"
            justifyContent="space-between"
            rounded="13"
            overflow="hidden"
            bg="transparent"
          >
            <Flex w="full" h="340px" ref={container}>
              <Flex
                className="box"
                alignItems="flex-end"
                borderTopStartRadius="13px"
                borderBottomStartRadius="13px"
                flex={1}
                h={["240px", "240px", "240px", "340px", "340px"]}
                bg={location.state.p.one}
              >
                <CopyToClipboard text={location.state.p.one}>
                  <Flex
                    className="code"
                    w="20"
                    alignItems="center"
                    justifyContent="center"
                    bg="#8f8f8f4f"
                    _hover={{ bg: "#79797979" }}
                    borderBottomStartRadius="13px"
                    onClick={() => {
                      setCopied(true);
                      setTimeout(() => {
                        setCopied(false);
                      }, 500);
                    }}
                  >
                    <Text color="#fff">
                      {copied ? "copied" : location.state.p.one}
                    </Text>
                  </Flex>
                </CopyToClipboard>
              </Flex>
              <Flex
                className="box"
                alignItems="flex-end"
                flex={1}
                h={["240px", "240px", "240px", "340px", "340px"]}
                bg={location.state.p.two}
              >
                <CopyToClipboard text={location.state.p.two}>
                  <Flex
                    className="code"
                    w="20"
                    alignItems="center"
                    justifyContent="center"
                    bg="#8f8f8f4f"
                    _hover={{ bg: "#79797979" }}
                    onClick={() => {
                      setCopied(true);
                      setTimeout(() => {
                        setCopied(false);
                      }, 500);
                    }}
                  >
                    <Text color="#fff">
                      {copied ? "copied" : location.state.p.two}
                    </Text>
                  </Flex>
                </CopyToClipboard>
              </Flex>
              <Flex
                className="box"
                alignItems="flex-end"
                flex={1}
                h={["240px", "240px", "240px", "340px", "340px"]}
                bg={location.state.p.three}
              >
                <CopyToClipboard text={location.state.p.three}>
                  <Flex
                    className="code"
                    w="20"
                    alignItems="center"
                    justifyContent="center"
                    bg="#8f8f8f4f"
                    _hover={{ bg: "#79797979" }}
                    onClick={() => {
                      setCopied(true);
                      setTimeout(() => {
                        setCopied(false);
                      }, 500);
                    }}
                  >
                    <Text color="#fff">
                      {copied ? "copied" : location.state.p.three}
                    </Text>
                  </Flex>
                </CopyToClipboard>
              </Flex>
              <Flex
                className="box"
                alignItems="flex-end"
                borderTopEndRadius="13px"
                borderBottomEndRadius="13px"
                flex={1}
                h={["240px", "240px", "240px", "340px", "340px"]}
                bg={location.state.p.four}
              >
                <CopyToClipboard text={location.state.p.four}>
                  <Flex
                    className="code"
                    w="20"
                    alignItems="center"
                    justifyContent="center"
                    bg="#8f8f8f4f"
                    _hover={{ bg: "#79797979" }}
                    onClick={() => {
                      setCopied(true);
                      setTimeout(() => {
                        setCopied(false);
                      }, 500);
                    }}
                  >
                    <Text color="#fff">
                      {copied ? "copied" : location.state.p.four}
                    </Text>
                  </Flex>
                </CopyToClipboard>
              </Flex>
            </Flex>
            <Flex
              h="full"
              pt="4"
              justifyContent="space-between"
              alignItems="center"
            >
              <Flex alignItems="center">
                <Button
                  _focus={{}}
                  bg="transparent"
                  border=".4px solid #e3e3e3"
                  w="72px"
                  ml="2"
                  h="36px"
                  color="#646464"
                  fontSize="17px"
                  fontWeight="200"
                  leftIcon={<AiFillLike fontSize="19px" color="#646464" />}
                >
                  {location.state.p.like}
                </Button>
                <a
                  href={source}
                  download={`colora, ${location.state.p.category}`}
                >
                  <Button
                    _focus={{}}
                    bg="transparent"
                    border=".4px solid #e3e3e3"
                    w="95px"
                    ml="2"
                    h="36px"
                    color="#646464"
                    fontSize="17px"
                    fontWeight="200"
                    leftIcon={<BsDownload fontSize="19px" color="#646464" />}
                  >
                    image
                  </Button>
                </a>
              </Flex>
              <Text color="#646464" mr="3" fontSize="15px">
                {location.state.p.date} days
              </Text>
            </Flex>
          </Flex>
          <Flex
            pl="40px"
            pr="40px"
            w={["299px", "299px", "300px", "600px", "600px"]}
            mt="110px"
            mb="50px"
            flexDir="column"
          >
            <Flex w="full" mt="70px" justifyContent="space-between">
              <Box
                rounded="full"
                w="45px "
                h="45px"
                bg={location.state.p.one}
              ></Box>
              <Box
                rounded="full"
                w="45px "
                h="45px"
                bg={location.state.p.two}
              ></Box>
              <Box
                rounded="full"
                w="45px "
                h="45px"
                bg={location.state.p.three}
              ></Box>
              <Box
                rounded="full"
                w="45px "
                h="45px"
                bg={location.state.p.four}
              ></Box>
            </Flex>
            <Divider mt="6" borderColor="#cacaca" />
            <Flex
              mt="5"
              w="full"
              justifyContent="space-between"
              alignItems="center"
              flexDir={["column", "column", "column", "row", "row"]}
            >
              <Text
                mr={["0px", "0px", "25px", "0px", "0px"]}
                color={[
                  location.state.p.one,
                  location.state.p.one,
                  location.state.p.one,
                  "gray.800",
                  "gray.800",
                ]}
                mt="2"
                fontSize={["14px", "14px", "16px", "18px", "18px"]}
              >
                {location.state.p.one}
              </Text>
              <Text
                mr={["0px", "0px", "25px", "0px", "0px"]}
                color={[
                  location.state.p.two,
                  location.state.p.two,
                  location.state.p.two,
                  "gray.800",
                  "gray.800",
                ]}
                mt="2"
                fontSize={["14px", "14px", "16px", "18px", "18px"]}
              >
                {location.state.p.two}
              </Text>
              <Text
                mr={["0px", "0px", "25px", "0px", "0px"]}
                color={[
                  location.state.p.three,
                  location.state.p.three,
                  location.state.p.three,
                  "gray.800",
                  "gray.800",
                ]}
                mt="2"
                fontSize={["14px", "14px", "16px", "18px", "18px"]}
              >
                {location.state.p.three}
              </Text>
              <Text
                mr={["0px", "0px", "25px", "0px", "0px"]}
                color={[
                  location.state.p.four,
                  location.state.p.four,
                  location.state.p.four,
                  "gray.800",
                  "gray.800",
                ]}
                mt="2"
                fontSize={["14px", "14px", "16px", "18px", "18px"]}
              >
                {location.state.p.four}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Layout>
    </Container>
  );
};

export default PaletteDetail;
