import {
  Box,
  Text,
  Heading,
  Input,
  Button,
  List,
  ListItem,
  InputLeftAddon,
  InputGroup, 
  Flex
} from "@chakra-ui/react";
import React from "react";

const Form2 = () => {
  return (
    <Box p="20px" bg="#fff" minW="620px">
      <Flex justifyContent="center" textAlign="center" mb="40px">
      {/* <Avatar  src='../../Eden.png' /> */}
      {/* <img style={{height: "40px",marginRight:"5px"}} src="../../Eden.png"  /> */}

        {/* Logo */}
        <Heading fontSize="33px">Eden</Heading>
      </Flex>
      <Box mb="50px">
        {/* Progress bar */}

        <List
          listStyleType="none"
          display="flex"
          w="88%"
          justifyContent="center"
          alignItems="center"
          m="auto"
          fontWeight="600"
        >
          <ListItem display="flex" alignItems="center">
            <Text
              rounded="100%"
              bg="#674de4"
              w="43px"
              textAlign="center"
              color="white"
              h="42px"
              p="10px"
            >
              1
            </Text>
            <Box w="2.2rem" bg="#674de4" h="2px"></Box>
          </ListItem>
          <ListItem display="flex" alignItems="center">
            <Box w="2.2rem" bg="#674de4" h="2px"></Box>
            <Text
              rounded="100%"
              border="1px solid #f3f2f2"
              w="43px"
              bg="#674de4"
              textAlign="center"
              color="#ffffff"
              h="42px"
              p="10px"
            >
              2
            </Text>
            <Box w="2.2rem" bg="#674de4" h="2px"></Box>
          </ListItem>
          <ListItem display="flex" alignItems="center">
            <Box w="2.2rem" bg="#f3f2f2" h="2px"></Box>

            <Text
              rounded="100%"
              border="1px solid #f3f2f2"
              w="43px"
              textAlign="center"
              color="#454545"
              h="42px"
              p="10px"
            >
              3
            </Text>
            <Box w="2.2rem" bg="#f3f2f2" h="2px"></Box>
          </ListItem>
          <ListItem display="flex" alignItems="center">
            <Box w="2.2rem" bg="#f3f2f2" h="2px"></Box>

            <Text
              rounded="100%"
              border="1px solid #f3f2f2"
              w="43px"
              textAlign="center"
              color="#454545"
              h="42px"
              p="10px"
            >
              4
            </Text>
          </ListItem>
        </List>
      </Box>

      <Box textAlign="center" mb="50px">
        {/* form Heading */}
        <Heading fontSize="33px" color="#141a28">
          Let's set up a home for all your work
        </Heading>
        <Text mt="10px" fontWeight="400" color="#727070" fontSize="18px">
          You can always create another workspace later.
        </Text>
      </Box>
      <Box fontSize="16px" fontWeight="500" color="#5a6477" p="0px 70px">
        {/* Inputs and button */}
        <Box>
          <label>
            Workspace Name
            <Input
              placeholder="Eden"
              p="23px 13px"
              fontSize="17px"
              mt="5px"
              focusBorderColor
            />
          </label>
        </Box>
        <Box mt="20px">
          <label>
            Workspace URL{" "}
            <Text display="inline" color="#a4a4a4">
              (optional)
            </Text>
            <InputGroup size="sm" mt="3px">
              <InputLeftAddon
                type="text"
                children="www.eden.com/"
                p="23px 12px"
                fontSize="17px"
                mt="5px"
                color="#a4a4a4"
              />
              <Input
                placeholder="Example"
                focusBorderColor
                p="23px 12px"
                fontSize="17px"
                mt="5px"
              />
            </InputGroup>
          </label>
        </Box>
        <Button
          _hover={false}
          _active={false}
          color="#f3f3f3"
          mt="1.6rem"

          bg="#674de4"
          w="100%"
          fontWeight="500"
          p="26px"
        >
          Create Workspace
        </Button>
      </Box>
    </Box>
  );
};

export default Form2;
