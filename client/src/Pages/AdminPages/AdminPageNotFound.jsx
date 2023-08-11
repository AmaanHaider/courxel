import React, { useState, useEffect } from 'react';
import { Box, Center, Heading, Text, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AdminPageNotFound = () => {
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    const countdown = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    if (seconds === 0) {
      clearInterval(countdown);
      window.location.href = '/admin';
    }

    return () => {
      clearInterval(countdown);
    };
  }, [seconds]);

  return (
    <Box  backgroundImage="url('https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2113&q=80')"
      backgroundSize="cover"
      backgroundPosition="center"
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center">

    <Center 
     p={1}
     width="100%"
     maxWidth="xl"
     textAlign="center"
    //  backgroundColor="rgba(0, 0, 0, 0.8)"
     >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        maxWidth="md"
        width="90%"
        p={4}
      >
        <Box textAlign="center">
          <Heading fontSize={['3xl', '4xl']} mb={4}>
            Oops! Page Not Found
          </Heading>
          <Text fontSize={['md', 'lg']}  fontWeight="extrabold">
            The page you're looking for might have been moved or doesn't exist.
          </Text>
          <Text fontSize="lg"  fontWeight="semibold"  mt={4}>
            Redirecting to home in {seconds} seconds...
          </Text>
          <Button
            as={Link}
            to="/"
            mt={4}
            colorScheme={"red"}
            bg={"red.400"}
            _hover={{ bg: "red.500" }}
          >
            Go to Home
          </Button>
        </Box>
      </motion.div>
    </Center>
    </Box>
  );
};

export default AdminPageNotFound;
