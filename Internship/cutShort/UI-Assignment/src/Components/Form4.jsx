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
import { CheckIcon } from '@chakra-ui/icons'

import React from "react";

const Form4 = () => {
  return (
    <Box p="5vh" bg="#fff" minW="620px" height="fit-content">

      <Flex justifyContent="center" textAlign="center" mb="50px">
      <Avatar name='Dan Abrahmov' src='../../Eden.png' />
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
              bg="#674de4"
              border="1px solid #f3f2f2"
              w="43px"
              textAlign="center"
              color="white"
              h="42px"
              p="10px"
            >
              3
            </Text>
            <Box w="2.2rem" bg="#674de4" h="2px"></Box>
          </ListItem>
          <ListItem display="flex" alignItems="center">
            <Box w="2.2rem" bg="#674de4" h="2px"></Box>

            <Text
              rounded="100%"
              bg="#674de4"
              border="1px solid #f3f2f2"
              w="43px"
              textAlign="center"
              color="white"
              h="42px"
              p="10px"
            >
              4
            </Text>
          </ListItem>
        </List>
      </Box>

      <Box>       
        <CheckIcon   rounded="100%"
              bg="#674de4"
              // border="px solid #f3f2f2"
              w="80px"
              textAlign="center"
              color="white"
              h="80px"
              p="30px"
              marginLeft="40vh"
              marginBottom="5vh"
               />
      </Box>

      <Box fontSize="16px" fontWeight="500" color="#5a6477" p="0px 70px">
       
       
        <Box textAlign="center" mb="50px">
        {/* form Heading */}
        <Heading fontSize="33px" color="#141a28">
          Congratulations, Erin!
        </Heading>
        <Text mt="10px" fontWeight="400" color="#727070" fontSize="18px">
          You have completed onboarding, you can start using the Eden!
        </Text>
      </Box>
        <Button
          _hover={false}
          _active={false}
          color="#f3f3f3"
          mt="0.5rem"
          bg="#674de4"
          w="100%"
          fontWeight="500"
          p="26px"
        >
          Launch Eden
        </Button>
      </Box>


    </Box>
  );
};

export default Form4;
