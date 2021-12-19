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
import palettes from "../data/palettes";

const PaletteDetail = ({ location }) => {
  const [copied, setCopied] = useState(false);
  const [source, setSource] = useState("");
  const { p } = location.state;
  const palette = palettes.filter((palette) => palette.id === p.id);

  

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

  return (
    <Container
      h="100vh"
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
            key={palette[0].id}
            mt="9"
            mr="3"
            ml="3"
            w="600px"
            h="400px"
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
                h="340px"
                bg={palette[0].one}
              >
                <CopyToClipboard text={palette[0].one}>
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
                      {copied ? "copied" : palette[0].one}
                    </Text>
                  </Flex>
                </CopyToClipboard>
              </Flex>
              <Flex
                className="box"
                alignItems="flex-end"
                flex={1}
                h="340px"
                bg={palette[0].two}
              >
                <CopyToClipboard text={palette[0].two}>
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
                      {copied ? "copied" : palette[0].two}
                    </Text>
                  </Flex>
                </CopyToClipboard>
              </Flex>
              <Flex
                className="box"
                alignItems="flex-end"
                flex={1}
                h="340px"
                bg={palette[0].three}
              >
                <CopyToClipboard text={palette[0].three}>
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
                      {copied ? "copied" : palette[0].three}
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
                h="340px"
                bg={palette[0].four}
              >
                <CopyToClipboard text={palette[0].four}>
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
                      {copied ? "copied" : palette[0].four}
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
                  {palette[0].like}
                </Button>
                <a href={source} download={`colora, ${palette[0].category}`}>
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
                {palette[0].date} days
              </Text>
            </Flex>
          </Flex>
          <Flex
            pl="40px"
            pr="40px"
            w="600px"
            mt="110px"
            mb="50px"
            flexDir="column"
          >
            <Flex w="full" mt="70px" justifyContent="space-between">
              <Box rounded="full" w="45px " h="45px" bg={palette[0].one}></Box>
              <Box rounded="full" w="45px " h="45px" bg={palette[0].two}></Box>
              <Box
                rounded="full"
                w="45px "
                h="45px"
                bg={palette[0].three}
              ></Box>
              <Box rounded="full" w="45px " h="45px" bg={palette[0].four}></Box>
            </Flex>
            <Divider mt="6" borderColor="#cacaca" />
            <Flex mt="5" w="full" justifyContent="space-between">
              <Text>{palette[0].one}</Text>
              <Text>{palette[0].two}</Text>
              <Text>{palette[0].three}</Text>
              <Text>{palette[0].four}</Text>
            </Flex>
          </Flex>
        </Flex>
      </Layout>
    </Container>
  );
};

export default PaletteDetail;
