import React from "react";
import { Flex, Box, chakra, Image, Button, Center, Text } from "@chakra-ui/react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { Link } from "react-router-dom";
// import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";


export const AdminCourseCards = ({ imageUrl, title, description, authorName, date, _id, link, publish }) => (
    <motion.div whileHover={{ scale: 1.05 }}>
      <Box mx="auto" mb={4} rounded="lg" shadow="md" bg="white" _dark={{ bg: "gray.800" }} maxW={{ base: "90%", md: "2xl" }}>
        <Image roundedTop="lg" w="full" h={{ base: "auto", md: 64 }} fit="cover" src={imageUrl} alt="Article" />
        <Box p={6}>
          <Box>
            <Link
              display="block"
              color="gray.800"
              _dark={{ color: "white" }}
              fontWeight="bold"
              fontSize="2xl"
              mt={2}
              _hover={{ color: "gray.600", textDecor: "underline" }}
            >
             Course Name : {title}
            </Link>
          </Box>
          <Box mt={5}>
            <Link
              display="block"
              color="gray.800"
              _dark={{ color: "white" }}
              fontWeight="bold"
              fontSize="2xl"
              mt={2}
              _hover={{ color: "gray.600", textDecor: "underline" }}
            >
               Creation Date: {new Date(date).toLocaleDateString()}
            </Link>
          </Box>
         
          <Box mt={4}>
            <Flex alignItems="center" justifyContent="space-between" flexDirection={{ base: "column", md: "row" }}>
              <Flex alignItems="center" mb={{ base: 2, md: 0 }}>

                Visibility : {" "}
              
                {publish ? (
                  <Flex mr={2} ml={2} alignItems="center" color="green.500">
                    <ViewIcon boxSize={4} mr={2} />
                    Public
                  </Flex>
                ) : (
                  <Flex mr={2} ml={2} alignItems="center" color="red.500">
                    <ViewOffIcon boxSize={4} mr={2} />
                    Private
                  </Flex>
                )}
              </Flex>
              <Link to={`${link}/${_id}`}>
                <Button colorScheme='teal' variant='outline' mt={{ base: 2, md: 0 }}>
                  Edit
                </Button>
              </Link>
            </Flex>
          </Box>
        </Box>
      </Box>
    </motion.div>
);
  
  
