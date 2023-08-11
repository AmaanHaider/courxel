import React, { useEffect, useState } from "react";
import {
  Box,
  chakra,
  GridItem,
  Button,
  Center,
  Flex,
  SimpleGrid,
  Input,
  Text,
  useToast,
  VStack,
  FormControl,
  FormLabel,
  InputRightElement,
  InputGroup,
  
} from "@chakra-ui/react";
import { motion } from "framer-motion"; 
import Footer from "../../Components/Users/Footer";
import AdminNavbar from "../../Components/Admin/AdminNavbar";
import { Link , useNavigate } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from "axios";

const AdminLogin = () => {

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
        `${import.meta.env.VITE_API_URL}api/auth/admin/login`,
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
      localStorage.setItem("ADMIN-JWT-TOKEN", response.data.token);
      localStorage.setItem("ADMINNAME",response.data.adminname)
      navigate("/admin/dashboard");
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
  return (
    <Box>
      <div>
        <motion.div
          initial={{ x: -1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <AdminNavbar />
        </motion.div>

        <motion.div
          style={{ marginTop: "80px" }}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
        <Box
      px={8}
      py={24}
      mx="auto"
      backgroundImage="url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)"
      backgroundSize="cover"
      backgroundPosition="center"
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <SimpleGrid
        alignItems="center"
        w={{ base: "full", xl: 11 / 12 }}
        columns={{ base: 1, lg: 11 }}
        gap={{ base: 0, lg: 24 }}
        mx="auto"
        p={4}
        textAlign="center"
        backgroundColor="rgba(0, 0, 0, 0.8)" // Adding a semi-transparent overlay
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
        }}
      >
        <GridItem
          colSpan={{ base: "auto", lg: 7 }}
          textAlign={{ base: "center", lg: "left" }}
        >
          <chakra.h1
            mb={4}
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="bold"
            lineHeight={{ base: "shorter", md: "none" }}
            letterSpacing={{ base: "normal", md: "tight" }}
            color={"red.400"}
          >
            Start Building Your Course !
          </chakra.h1>
          <chakra.p
            mb={{ base: 10, md: 4 }}
            fontSize={{ base: "lg", md: "xl" }}
            fontWeight="thin"
            color="gray.100"
            letterSpacing="wider"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
            voluptate amet deleniti, asperiores est facere dignissimos cum? Sit
            inventore ut, voluptas, assumenda libero commodi incidunt nemo
            fugiat id voluptates vel?
          </chakra.p>
        </GridItem>
        <GridItem colSpan={{ base: "auto", md: 4 }}>
          <Box
            as="form"
            mb={6}
            rounded="lg"
            shadow="xl"
            p={4}
            width="100%"
            maxWidth="md"
            textAlign="center"
            backgroundColor="rgba(0, 0, 0, 0.8)" // Adding a semi-transparent overlay
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
            }}
          >
            <Center pb={0} color="white">
              <chakra.p pt={2}>Log in to continue..</chakra.p>
            </Center>
            <SimpleGrid
              columns={1}
              px={6}
              py={4}
              spacing={4}
              borderBottom="solid 1px"
              color="gray.200"
            >
        
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
                  colorScheme="red"
                  bg={"red.400"}
                  isLoading={isLoading} 
                  loadingText="Logging in..."
                  onClick={handleLogin}
                >
                  Log In
                </Button>
              </VStack>
           
              
            </SimpleGrid>
            <Flex px={6} py={4}></Flex>
          <Box textAlign="center" >
            <Text color={"gray.100"}>
            Don't have an account? <Link  to="/admin" color={'blue.400'}>Sign up here.</Link>
            </Text>
          </Box>
          </Box>
         
        </GridItem>
      </SimpleGrid>
    </Box>
        </motion.div>

        {/* Footer */}
        <motion.div
          style={{ marginTop: "2%" }}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Footer />
        </motion.div>
      </div>
    </Box>
  );
};

export default AdminLogin;
