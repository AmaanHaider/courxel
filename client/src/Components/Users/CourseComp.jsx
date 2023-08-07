import React, { useEffect, useState } from 'react'
import { Box, Center, Container, Flex, Grid, Heading } from '@chakra-ui/react'
import { FeaturedCards } from '../../Components/Users/FeaturedCards';
import axios from 'axios';
import Footer from '../../Components/Users/Footer';

const CourseComp = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}api/allCourse`);
        setCourses(response.data.publicCourse);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };
    fetchCourses();
  }, []);

  return (
    <div>
        <div>
              <Container maxW={"full"}>
              <Center mb={5} >
              <Heading>
                Explore Wide Range of Course
              </Heading>
            </Center>
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
              {courses.map((card, index) => (
                <FeaturedCards key={index} {...card} />
              ))}
            </Grid>
          </Flex>
        </Container>
        </div>
        <div>
          <Footer/>
        </div>
    </div>
  )
}

export default CourseComp