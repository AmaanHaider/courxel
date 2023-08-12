import React from "react";
import { Flex, Box, chakra, Image, Button, Center, Text } from "@chakra-ui/react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { Link } from "react-router-dom";



export const FeaturedCards = ({ imageUrl, title, description, authorName, date, _id ,link}) => (
  <motion.div whileHover={{ scale: 1.05 }}> {/* Apply the hover animation */}

  <Box
    mx="auto"
    mb={4}
    rounded="lg"
    shadow="md"
    bg="white"
    _dark={{ bg: "gray.800" }}
    maxW={{ base: "90%", md: "2xl" }}
    style={{
  boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"

    }}  >
    <Image
      roundedTop="lg"
      w="full"
      h={64}
      fit="cover"
      src={imageUrl}
      alt="Article"
    />
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
          {title}
        </Link>
        <chakra.p mt={2} fontSize="sm" color="gray.600" _dark={{ color: "gray.400" }}>
          {description}
        </chakra.p>
      </Box>
      <Box mt={4}>
        <Box alignItems="center">
          <Flex alignItems="center">
            <Text
              mx={2}
              fontWeight="bold"
              color="gray.700"
              _dark={{ color: "gray.200" }}
            >
             Author : {authorName}
            </Text>
          </Flex>
          <Text
              mx={2}
              fontWeight="bold"
              color="gray.700"
              _dark={{ color: "gray.200" }}
            >
              Date : {new Date(date).toLocaleDateString() }
            </Text>
              
         </Box>
        <Box mt={5}>
            <Center>
              <Link to={`${link}/${_id}`}>
            <Button  colorScheme='teal' variant='outline'>
              View Details
             </Button>
              </Link>
            </Center>
         </Box>
      </Box>
    </Box>
  </Box>
  </motion.div >
);

