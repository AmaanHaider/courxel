import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Center,
  Container,
  Grid,
  HStack,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import Navbar from "../../Components/Users/Navbar";
import Hero from "../../Components/Users/Hero";
import { FeaturedCards } from "../../Components/Users/FeaturedCards";
import Footer from "../../Components/Users/Footer";
import Reviews from "../../Components/Users/Reviews";
import axios from "axios";
import { Link } from "react-router-dom";
import { CheckIcon } from "@chakra-ui/icons";

const features = Array.apply(null, Array(8)).map(function (x, i) {
  return {
    id: i,
    title: 'Lorem ipsum dolor sit amet',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
  }
})

const Home = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}api/allCourse`
        );
        setCourses(response.data.publicCourse);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    fetchCourses();
  }, []);

  return (
    <Box>
      <div>
        <motion.div
          initial={{ x: -1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Navbar />
        </motion.div>

        <motion.div
          style={{ marginTop: "80px" }}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Hero />
        </motion.div>

        <motion.div
          style={{ marginTop: "2%" }}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Container>
            <Center>
              <Heading>Featured Courses</Heading>
            </Center>
          </Container>
        </motion.div>

        <motion.div
          style={{ marginTop: "2%" }}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Container maxW={"full"}>
            <Flex
              p={50}
              w="full"
              alignItems="center"
              justifyContent="center"
              flexWrap="wrap"
            >
              <Grid
                templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
                gap={6}
              >
                {courses.slice(0, 6).map((card, index) => (
                  <FeaturedCards key={card._id} {...card} link="/user/courses" />
                ))}
              </Grid>
            </Flex>
            <div style={{ marginBottom: "4%" }}>
              <Center>
                <Link to="/user">
                  <Button size="lg" colorScheme={"red"} bg={"red.400"}>
                    Explore More
                  </Button>
                </Link>
              </Center>
            </div>
          </Container>
        </motion.div>
        <motion.div
          style={{ marginBottom: "2%" }}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <Center borderTop="1px solid gray">
            <Box p={4} mt={"5%"} mb={"5%"}>
              <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                <Heading fontSize={'4xl'}>Courxel : Your Partner in Conquering Goals.</Heading>
                <Text color={'gray.600'} fontSize={'xl'}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                  tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                </Text>
              </Stack>

              <Container maxW={'6xl'} mt={10}>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
                  {features.map((feature) => (
                    <HStack key={feature.id} align={'top'}>
                      <Box color={'green.400'} px={2}>
                        <Icon as={CheckIcon} />
                      </Box>
                      <VStack align={'start'}>
                        <Text fontWeight={600}>{feature.title}</Text>
                        <Text color={'gray.600'}>{feature.text}</Text>
                      </VStack>
                    </HStack>
                  ))}
                </SimpleGrid>
              </Container>
            </Box>
          </Center>
        </motion.div>




        {/* Reviews section */}
        <motion.div
          style={{ marginTop: "2%" }}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <Center>
            <Reviews />
          </Center>
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

export default Home;
