import React from 'react';
import { Box, Center, Button, Heading, Image, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import courxelLogo from "../assets/courxel-logo.png";


const NotAuth = () => {
  return (
    <Box
      backgroundImage="url('https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2113&q=80')"
      backgroundSize="cover"
      backgroundPosition="center"
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"

    >
      <Box
        p={4}
        width="100%"
        maxWidth="md"
        textAlign="center"
        backgroundColor="rgba(0, 0, 0, 0.8)" // Adding a semi-transparent overlay
        style={{
          boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"
          
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <Image src={courxelLogo} alt="Logo" maxW="200px" mb={4} />
          <Heading fontSize={['2xl', '3xl', '4xl']} mb={2} color="white">
            Access Denied
          </Heading>
          <Text fontSize={['lg', 'xl']} color="gray.200" mb={4}>
            You don't have permission to access this page.
          </Text>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            fontSize={['xl', '2xl']}
            color="gray.200"
          >
            Log in to continue !
          </motion.p>
          <Box mt={8}>
            <Button as={Link} to="/login" colorScheme="blue" mr={4}>
              Log In
            </Button>
            <Button as={Link} to="/" colorScheme="green">
              Go to Home
            </Button>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};

export default NotAuth;
