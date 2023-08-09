import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Center,
  Container,
  Grid,
  Heading,
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
              bg="#edf3f8"
              _dark={{ bg: "#3e3e3e" }}
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
                  <FeaturedCards key={card._id} {...card} />
                ))}
              </Grid>
            </Flex>
            <div style={{ marginTop: "4%" }}>
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
