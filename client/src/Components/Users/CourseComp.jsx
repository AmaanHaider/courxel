import React, { useEffect, useState } from 'react';
import { Center, Container, Flex, Grid, Heading, Button, chakra } from '@chakra-ui/react';
import { FeaturedCards } from '../../Components/Users/FeaturedCards';
import axios from 'axios';
import Footer from '../../Components/Users/Footer';
import { motion } from 'framer-motion';

const MotionHeading = motion(Heading);

const CourseComp = () => {
  const [courses, setCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 9;

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
  }, [])

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1) {
      setCurrentPage(pageNumber);
    }
  };

  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse);

  const totalPages = Math.ceil(courses.length / coursesPerPage);

  return (
    <div>
      <div>
        <Container maxW={'full'}>
          <Center mb={5}>
            <MotionHeading
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Explore Courses
            </MotionHeading>
          </Center>
          <Flex
            bg="#edf3f8"
            _dark={{ bg: '#3e3e3e' }}
            p={50}
            w="full"
            alignItems="center"
            justifyContent="center"
            flexWrap="wrap"
          >
            <Grid
              templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
              gap={6}
            >
              {currentCourses.map((card, index) => (
                <FeaturedCards key={index} {...card} link="/user/courses" />
              ))}
            </Grid>
          </Flex>
        </Container>
      </div>
      <Flex justify="center" align="center" mt="4%" mb="2%">
        <Button

          bg="red.500"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          mr="2"
        >
          Previous Page
        </Button>
        <chakra.span>
          Page {currentPage} of {totalPages}
        </chakra.span>
        <Button
          bg="red.500"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          ml="2"
        >
          Next Page
        </Button>
      </Flex>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CourseComp;
