import phoneImg from "../../images/phones.png";

import { Flex } from "@chakra-ui/react";
import { Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Button } from "@chakra-ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeaderContent = () => {
  const TextMotion = motion(Text);
  const FlexMotion = motion(Flex);
  const ImageMotion = motion(Image);

  const fadeLeft = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeflex = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeImage = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <Flex
      w="100%"
      h="90%"
      alignItems="center"
      justifyContent={{
        base: "center",
        sm: "center",
        md: "center",
        lg: "center",
        xl: "space-between",
      }}
    >
      <Flex flexDir="column" ml="15" color="gray.800" zIndex="100">
        <FlexMotion
          flexDir="column"
          fontWeight="black"
          variants={fadeLeft}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <TextMotion
            fontSize={{
              base: "50px",
              sm: "70px",
              md: "100px",
              lg: "140px",
              xl: "100px",
            }}
          >
            discover the
          </TextMotion>
          <TextMotion
            mt={["-5", "-10", "-10", "-10","-10"]}
            fontSize={{
              base: "50px",
              sm: "70px",
              md: "100px",
              lg: "140px",
              xl: "100px",
            }}
          >
            power of color
          </TextMotion>
          <Flex
            mt={["-5", "-10", "-10", "-10","-10"]}
            fontSize={{
              base: "50px",
              sm: "70px",
              md: "100px",
              lg: "140px",
              xl: "100px",
            }}
            alignItems="center"
          >
            <TextMotion
              fontSize={{
                base: "50px",
                sm: "70px",
                md: "100px",
                lg: "140px",
                xl: "100px",
              }}
              borderBottom="8px solid #FF5B79"
            >
              connect
            </TextMotion>
            <TextMotion color="#FF5B79" ml="2">
              &#x2726;
            </TextMotion>
          </Flex>
        </FlexMotion>
        <FlexMotion
          color="gray.700"
          flexDir="column"
          mt="8"
          fontWeight="700"
          fontSize="18px"
          variants={fadeflex}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 1 }}
        >
          <Text fontSize={["15px", "18px" ,"18px", "18px", "18px"]}>The platform for matching, creating and designing </Text>
          <Text fontSize={["15px", "18px" ,"18px", "18px", "18px"]}>with colora color Palettes </Text>
          <Link to="/explore">
            <Button
              _focus={{}}
              _hover={{ bg: "#fff", color: "#FF5B79" }}
              bg="#FF5B79"
              color="#fff"
              rounded="14px"
              fontWeight="700"
              fontSize={["15px","17px","17px","17px","17px"]}
              w={["90px","110px","110px","110px","110px"]}
              mt="2"
            >
              try now
            </Button>
          </Link>
        </FlexMotion>
      </Flex>
      <Flex
        zIndex="0"
        display={{
          base: "none",
          sm: "none",
          md: "none",
          lg: "none",
          xl: "flex",
        }}
      >
        <ImageMotion
          variants={fadeImage}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 1 }}
          src={phoneImg}
          position="absolute"
          right="0"
          bottom="0"
          userSelect="none"
        />
      </Flex>
    </Flex>
  );
};

export default HeaderContent;
