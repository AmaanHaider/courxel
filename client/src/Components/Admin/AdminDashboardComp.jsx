import React from 'react'

import { IconButton, Avatar, Box, CloseButton, Flex, HStack, VStack, Icon, useColorModeValue, Text, Drawer, DrawerContent, useDisclosure, Menu, MenuButton, MenuDivider, MenuItem, MenuList, useColorMode, Button, Container, Center, Heading } from "@chakra-ui/react";
import { FiHome, FiTrendingUp, FiCompass, FiStar, FiSettings, FiMenu, FiBell, FiChevronDown } from "react-icons/fi";
import { ArrowForwardIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import courxelLogo from "../../assets/courxel-logo.png";
import { AiFillBook } from "react-icons/ai";
import { TfiWrite } from "react-icons/tfi";
import { Link, useLocation, useNavigate } from "react-router-dom";


const LinkItems = [
  { name: "Create Course", icon: TfiWrite ,navlink:"/admin/dashboard" },
  { name: "My Courses", icon: AiFillBook,navlink:"/admin/dashboard/mycourses"  },
  
];

const SidebarContent = ({ onClose, ...rest }) => {
  const location = useLocation(); // Get the current route location

  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
        <Box w="120px" h="fit-content" mr={2}>
              <img  src={courxelLogo} alt="CourXel" />
             </Box>
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <Link to={link.navlink}>
          <NavItem
            key={link.name}
            icon={link.icon}
            isActive={location.pathname === link.navlink} 
          >
            {link.name}
          </NavItem>
        </Link>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children,isActive, ...rest }) => {
  const activeBgColor = useColorModeValue("red.500", "red.600");
  const defaultBgColor = useColorModeValue("transparent", "gray.700");

  return (
    <Box
    as="a"
    href="#"
    style={{ textDecoration: "none" }}
    _focus={{ boxShadow: "none" }}
    m={1}
  >
    <Flex
      align="center"
      p="4"
      mx="4"
      borderRadius="lg"
      role="group"
      cursor="pointer"
      bg={isActive ? activeBgColor : defaultBgColor} // Apply active or default background color
      color={isActive ? "white" : undefined} // Apply white text color for active link
      _hover={{
        bg: "red.500",
        color: "white",
      }}
      {...rest}
    >
      {icon && (
        <Icon
          mr="4"
          fontSize="16"
          _groupHover={{
            color: "white",
          }}
          as={icon}
        />
      )}
      {children}
    </Flex>
  </Box>
);
};

const MobileNav = ({ onOpen, ...rest }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();

  const handleAdminLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("ADMIN-JWT-TOKEN");
    localStorage.removeItem("ADMINNAME");
    navigate("/admin/login");
  };


  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        {/* CourXel */}
        <Box w="120px" h="fit-content" mr={2}>
              <img  src={courxelLogo} alt="CourXel" />
             </Box>
      </Text>

      <HStack spacing={{ base: "0", md: "6" }}>
        <Button onClick={toggleColorMode}>
          {colorMode === "dark" ? <MoonIcon /> : <SunIcon />}
        </Button>
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">Hi , {localStorage.getItem('NAME')}</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              {/* <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem> */}
              <MenuDivider />
              <MenuItem  >
                <Button
                   
                  rightIcon={<ArrowForwardIcon />}
                  colorScheme="red"
                  variant="outline"
                  onClick={handleAdminLogout}
                >
                  Sign Out
                </Button>
              
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

const AdminDashboardComp = ({Children}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />


      <Box ml={{ base: 0, md: 60 }} p="4">
        {/* Content */}
        <div>
          <Container maxW="full" >
           {Children}
          </Container>
        </div>
      </Box>
    </Box>
  );
};

export default AdminDashboardComp;
