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
  Avatar,
  Flex
} from "@chakra-ui/react";
import React from "react";

import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";

const Form3 = () => {
  return (
    <Box p="20px" bg="#fff" minW="620px">
      <Flex justifyContent="center" textAlign="center"  mb="50px">
      <Avatar  src='../../Eden.png' />
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
              3
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
              4
            </Text>
          </ListItem>
        </List>
      </Box>

      <Box textAlign="center" mb="50px">
        {/* form Heading */}
        <Heading fontSize="33px" color="#141a28">
         How are you planning to use Eden ?
        </Heading>
        <Text mt="10px" fontWeight="400" color="#727070" fontSize="18px">
         We'll streamline your setup experience accordingly.
        </Text>
      </Box>
      <Box display="flex" flexDirection="row" justifyContent="space-evenly" p="10px">
        <Flex  direction="column" justifyContent="space-evenly" w="25vh" h="20vh" border="1px solid blue" p="10px" borderRadius="10px">
          <AiOutlineUser  />
          <Heading fontSize="15px">For myself</Heading>
          <Text fontSize="11px">
            Write better, Think more clearly. Stay organized.
          </Text>          
        </Flex>
        <Flex direction="column" justifyContent="space-evenly" w="25vh" border="1px solid black" p="10px"  borderRadius="10px"> 
          <AiOutlineUsergroupAdd  />
          <Heading fontSize="15px">With my team</Heading>
          <Text fontSize="11px">
            Wikis, docs, tasks & projects, all in one place.
          </Text>          
        </Flex>
      </Box>

      <Box fontSize="16px" fontWeight="500" color="#5a6477" p="0px 70px">
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

export default Form3;
