import React from "react";

import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
  useColorMode,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import courxelLogo from "../../assets/courxel-logo.png";

const Navbar = () => {
    const {colorMode , toggleColorMode}= useColorMode()
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();

  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md"
        //  position="sticky"
        // top={0}
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <chakra.a
              href="/"
              title="CourXel Home Page"
              display="flex"
              alignItems="center"
            >
              <VisuallyHidden>CourXel</VisuallyHidden>
            </chakra.a>
            <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
            <Box w="120px" h="fit-content" mr={2}>
              <img  src={courxelLogo} alt="CourXel" />
            </Box>
            </chakra.h1>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{ base: "none", md: "inline-flex" }}
            >
              <Button variant="ghost">Courses</Button>
              <Button variant="ghost">Sign Up</Button>
              <Button variant="ghost">Log in</Button>
              <Button onClick={toggleColorMode}>
                {colorMode==="light" ? <MoonIcon/> : <SunIcon/>}

              </Button>
            </HStack>
            <Button colorScheme="red" size="sm">
              Create Course
            </Button>
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{ color: "inherit" }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />
                <Button w="full" variant="ghost">
                  Courses
                </Button>
                <Button w="full" variant="ghost">
                  Sign Up
                </Button>
                <Button w="full" variant="ghost">
                  Log in
                </Button>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
};
export default Navbar;
