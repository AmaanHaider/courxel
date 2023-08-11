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
  Link,
  Text,
  useToast,
  Stack,
  FormControl,
  FormLabel,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import Footer from "../../Components/Users/Footer";
import AdminNavbar from "../../Components/Admin/AdminNavbar";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminSignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
      name: "",
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
  
    const hanldeAdminSignUp = async (e) => {
      e.preventDefault();
      setIsLoading(true);
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}api/auth/admin/register`,
          formData
        );
        toast({
          title: "Sign up successful",
          description: "You have successfully signed up, Login to continue!",
          status: "success",
          position: "top-right",
          duration: 5000,
          isClosable: true,
        });
        navigate("/admin/login");
      } catch (error) {
        setIsLoading(false);
        toast({
          title: "Sign up error",
          description:
            "An error occurred while signing up. Please try again later.",
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
              <chakra.p pt={2}>Sign up !</chakra.p>
            </Center>
            <SimpleGrid
              columns={1}
              px={6}
              py={4}
              spacing={4}
              borderBottom="solid 1px"
              color="gray.200"
            >
              <Stack spacing={4}>
                <FormControl id="text" isRequired>
                  <FormLabel>Full Name</FormLabel>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </FormControl>
                <FormControl id="email" isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                    <InputRightElement h={"full"}>
                      <Button
                        variant={"ghost"}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }
                      >
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Stack spacing={10} pt={2}>
                  <Button
                    size="lg"
                    bg={"red.400"}
                    _hover={{
                      bg: "red.500",
                    }}
                    rounded={"full"}
                    px={6}
                    colorScheme={"red"}
                    onClick={hanldeAdminSignUp}
                    isLoading={isLoading}
                    loadingText="Signing in..."
                  >
                    Sign in
                  </Button>
                </Stack>
              </Stack>
            </SimpleGrid>
            <Flex px={6} py={4}></Flex>
            <Box textAlign="center">
              <chakra.p fontSize="xs" textAlign="center" color="gray.400">
                By signing up you agree to our{" "}
                <chakra.a color="brand.500">Terms of Service</chakra.a>
              </chakra.p>

              <Text color={"gray.100"}>
                Already a user?{" "}
                <Link href="/admin/login" color={"blue.400"}>
                  Login
                </Link>
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

export default AdminSignUp;
