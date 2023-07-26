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
  useToast,
  VStack,
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
  const navigate = useNavigate();
  const toast = useToast();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const loadingToastId = toast({
        title: "Logging in...",
        status: "info",
        duration: null, 
        isClosable: false,
        position: "top-right",
      });
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}api/auth/user/register`,
        formData
      );
      const token = response.data;
      toast.close(loadingToastId);

      toast({
        title: "Login successful",
        description: "You have successfully logged in!",
        status: "success",
        position: "top-right",
        duration: 5000,
        isClosable: true,
      });
      localStorage.setItem("accessToken", token);
      navigate("/dashboard");
    } catch (error) {
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
                  <Input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </FormControl>
                <Button type="submit" colorScheme="blue">
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
