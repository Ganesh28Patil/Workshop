import { Container, Box } from "@chakra-ui/react";

import "./App.css";
import Form1 from "./Components/Form1";
import Form2 from "./Components/Form2";
import Form3 from "./Components/Form3";
import Form4 from "./Components/Form4";

function App() {
  return (
    <Box h="100vh" pt="8vh">
      <Container
        display="flex"
        flexDirection = "column"
        justifyContent ="center"
        alignItems="center"
        className="App"
      > 
        <Box height="100vh">
        <Form1 />  
        </Box>
        <Box w="90vw" border="1px solid #674de4" m="100px 0px"></Box>    
        <Box height="100vh">
        <Form2 />
        </Box>
        <Box w="90vw" border="1px solid #674de4" m="100px 0px"></Box>
        <Box height="100vh">
        <Form3 />
        </Box>
        <Box w="90vw" border="1px solid #674de4" m="100px 0px"></Box>
        <Box height="100vh">
        <Form4 />
        </Box>
        {/* <Box w="90vw" border="1px solid #674de4" m="100px 0px"></Box> */}
      </Container>
    </Box>
  );
}

export default App;
