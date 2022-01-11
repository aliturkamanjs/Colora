import { Flex, Heading, Text } from "@chakra-ui/layout";
import { AiFillLike } from "react-icons/ai";
import palettes from "../../data/palettes";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/button";
import { HiColorSwatch } from "react-icons/hi";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { RiSearch2Line } from "react-icons/ri";

const PalettesComp = () => {
  const [allPalette, setAllPalette] = useState([]);
  const [copied, setCopied] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setAllPalette(palettes);
  }, []);

  const handleChange = (e) => {

    setSearch(e.target.value);

    const search = e.target.value;
    if (search !== "") {
      const searchedPalettes = palettes.filter((p) => {
        return Object.values(p)
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      setAllPalette(searchedPalettes);
    } else {
      setAllPalette(palettes);
    }
  };

  return (
    <>
      <Flex
        w="100%"
        h="60px"
        justifyContent={[
          "center",
          "center",
          "space-between",
          "space-between",
          "space-between",
        ]}
        alignItems="center"
        borderBottom="0.1px solid #e7e7e7"
      >
        <Text display={["none", "none", "block", "block", "block"]}>
          Find the perfect palette by mixing search terms.
        </Text>
        <InputGroup mr="3" w="400px">
          <Input
            h="35px"
            border="1px solid #CACACA"
            color="gray.600"
            rounded="10"
            placeholder="Search"
            _focus={{ borderColor: "gray.300" }}
            _hover={{}}
            onChange={handleChange}
            value={search}
          />
          <InputRightElement
            children={<RiSearch2Line color="#000000" opacity="56%" />}
          />
        </InputGroup>
      </Flex>

      <Flex id="top" mt="40px" w="100%" alignItems="center" flexDir="column">
        <Heading
          fontSize={["21px", "33px", "33px", "33px", "35px "]}
          color="#5C5A5E"
        >
          Trending color palettes
        </Heading>
        <Text
          color="#797979"
          mt="3"
          fontSize={["14px", "17px", "18px", "18px", "19px "]}
        >
          Get inspired by thousands of beautiful color
        </Text>
        <Text
          mt="-1"
          color="#797979"
          fontSize={["14px", "17px", "18px", "18px", "19px "]}
        >
          schemes and make something cool!
        </Text>
      </Flex>

      <Flex
        w="100%"
        minH="300px"
        flexWrap="wrap"
        justifyContent="space-evenly"
        mt="20"
        pb="100px"
      >
        {allPalette.map((p) => {
          return (
            <Flex
              key={p.id}
              mt="9"
              mr="3"
              ml="3"
              w="375px"
              h="279px"
              flexDir="column"
              rounded="13"
              overflow="hidden"
              bg="#f8fafd"
              border=".7px solid"
              borderColor="gray.200"
            >
              <Flex w="full" h="235px">
                <Flex
                  className="box"
                  alignItems="flex-end"
                  flex={1}
                  h="230px"
                  bg={p.one}
                >
                  <CopyToClipboard text={p.one}>
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
                        }, 1000);
                      }}
                    >
                      <Text color="#fff">{copied ? "copied" : p.one}</Text>
                    </Flex>
                  </CopyToClipboard>
                </Flex>
                <Flex
                  className="box"
                  alignItems="flex-end"
                  flex={1}
                  h="230px"
                  bg={p.two}
                >
                  <CopyToClipboard text={p.two}>
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
                        }, 1000);
                      }}
                    >
                      <Text color="#fff">{copied ? "copied" : p.two}</Text>
                    </Flex>
                  </CopyToClipboard>
                </Flex>
                <Flex
                  className="box"
                  alignItems="flex-end"
                  flex={1}
                  h="230px"
                  bg={p.three}
                >
                  <CopyToClipboard text={p.three}>
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
                        }, 1000);
                      }}
                    >
                      <Text color="#fff">{copied ? "copied" : p.three}</Text>
                    </Flex>
                  </CopyToClipboard>
                </Flex>
                <Flex
                  className="box"
                  alignItems="flex-end"
                  flex={1}
                  h="230px"
                  bg={p.four}
                >
                  <CopyToClipboard text={p.four}>
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
                        }, 1000);
                      }}
                    >
                      <Text color="#fff">{copied ? "copied" : p.four}</Text>
                    </Flex>
                  </CopyToClipboard>
                </Flex>
              </Flex>

              <Flex h="100%" justifyContent="space-between" alignItems="center">
                <Flex>
                  <Button
                    _focus={{}}
                    bg="transparent"
                    border=".4px solid #e3e3e3"
                    w="72px"
                    ml="3"
                    h="26px"
                    color="#646464"
                    fontWeight="200"
                    leftIcon={<AiFillLike fontSize="16px" color="#646464" />}
                  >
                    {p.like}
                  </Button>
                  <Link to={{ pathname: `/palette/${p.id}`, state: { p } }}>
                    <Button
                      _focus={{}}
                      bg="transparent"
                      border=".4px solid #e3e3e3"
                      w="72px"
                      ml="2"
                      h="26px"
                      color="#646464"
                      fontWeight="200"
                      leftIcon={
                        <HiColorSwatch fontSize="16px" color="#646464" />
                      }
                    >
                      view
                    </Button>
                  </Link>
                </Flex>
                <Text color="#646464" mr="3" fontSize="15px">
                  {p.date} days
                </Text>
              </Flex>
            </Flex>
          );
        })}
      </Flex>
    </>
  );
};

export default PalettesComp;
