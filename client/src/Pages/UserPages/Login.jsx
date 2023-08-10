"use client";

import {
  Box,
  Flex,
  Container,
  SimpleGrid,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  VStack,
  Spinner,
  useToast, // Added Spinner component from Chakra UI
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import axios from 'axios';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false); 
  const navigate = useNavigate();
  const toast = useToast();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true); 

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}api/auth/user/login`,
        formData
      );
      toast({
        title: "Login successful",
        description: "You have successfully logged in!",
        status: "success",
        position: "top-right",
        duration: 5000,
        isClosable: true,
      });
     
      localStorage.setItem("USER-JWT-TOKEN", response.data.token);
      localStorage.setItem("NAME", response.data.name);
      navigate("/user");
    } catch (error) {
      setIsLoading(false); // Stop loading state
      toast({
        title: "Login error",
        description: "Invalid email or password. Please try again.",
        status: "error",
        position: "top-right",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  console.log(formData);

  return (
    <Box position={"relative"}>
      <Container
        as={SimpleGrid}
        maxW={"7xl"}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}
      >
        <Stack spacing={{ base: 10, md: 20 }}>
          <Heading
            style={{
              marginTop: "28%",
            }}
            lineHeight={1.1}
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
          >
            Welcome Back{" "}
          </Heading>
        </Stack>

        <Stack
          bg={"gray.50"}
          rounded={"xl"}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: "lg" }}
        >
          <Stack spacing={4}>
            <Heading
              color={"gray.800"}
              lineHeight={1.1}
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
            >
              Login to continue{" "}
            </Heading>
          </Stack>
          <Stack align={"center"}></Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <form onSubmit={handleLogin}>
              <VStack spacing={4} align="stretch">
                <FormControl id="email">
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                    <InputRightElement width="4.5rem">
                      <Button
                        h="1.75rem"
                        size="sm"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <ViewOffIcon /> : <ViewIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Button
                  type="submit"
                  colorScheme="blue"
                  isLoading={isLoading} 
                  loadingText="Logging in..."
                >
                  Log In
                </Button>
                <Box textAlign="center">
                  <Link as={RouterLink} to="/signup" color="blue.500">
                    Don't have an account? Sign up here.
                  </Link>
                </Box>
              </VStack>
            </form>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Login;
