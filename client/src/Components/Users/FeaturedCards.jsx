import React from "react";
import { Flex, Box, chakra, Image, Link } from "@chakra-ui/react";

export const FeaturedCards = ({ imageUrl, title, description, author, date }) => (
  <Box
    mx="auto"
    mb={4}
    rounded="lg"
    shadow="md"
    bg="white"
    _dark={{ bg: "gray.800" }}
    maxW={{ base: "90%", md: "2xl" }}
  >
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
        {/* <chakra.span
          fontSize="xs"
          textTransform="uppercase"
          color="brand.600"
          _dark={{ color: "brand.400" }}
        >
          Product
        </chakra.span> */}
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
        <Flex alignItems="center">
          <Flex alignItems="center">
            <Image
              h={10}
              fit="cover"
              rounded="full"
              src={author.avatarUrl}
              alt="Avatar"
            />
            <Link
              mx={2}
              fontWeight="bold"
              color="gray.700"
              _dark={{ color: "gray.200" }}
            >
              {author.name}
            </Link>
          </Flex>
          <chakra.span
            mx={1}
            fontSize="sm"
            color="gray.600"
            _dark={{ color: "gray.300" }}
          >
            {date}
          </chakra.span>
        </Flex>
      </Box>
    </Box>
  </Box>
);

