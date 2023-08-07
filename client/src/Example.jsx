import { Box, Flex, Tabs, TabList, Tab, TabPanels, TabPanel, Image, Button, Icon, Center } from '@chakra-ui/react';
import { FaShoppingCart, FaInfoCircle, FaPlayCircle, FaLock } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const CourseDetailsPage = () => {
  const ChapterCard = ({ title }) => {
    return (
      <MotionBox
        p="4"
        borderRadius="md"
        shadow="md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box fontSize="lg" fontWeight="bold">
          {title}
        </Box>
        <Icon as={FaLock} />
      </MotionBox>
    );
  };

  return (
    <Flex p="4">
      {/* Left Section - Course Details */}
      <Box flex="1">
        <Tabs isFitted variant="enclosed">
          <TabList>
            <Tab>
              <Icon as={FaInfoCircle} mr="2" />
              Overview
            </Tab>
            <Tab>Chapters</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              {/* Overview Content */}
              {/* Replace this with the actual course details */}
              <Box p="4">
                <p>This is the overview of the course. It contains...</p>
              </Box>
            </TabPanel>
            <TabPanel>
              {/* Chapters Content */}
              <Box p="4">
                <MotionBox
                  display="grid"
                  gridTemplateColumns="repeat(1, 1fr)"
                  gap="4"
                >
                  {/* Dynamically generate chapter cards */}
                  {Array.from({ length: 10 }, (_, index) => (
                    <ChapterCard key={index} title={`Chapter ${index + 1}`} />
                  ))}
                </MotionBox>
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>

      {/* Right Section - Course Card */}
      <Box ml="4" w="25%">

        <Image src="https://via.placeholder.com/300x200" alt="Course Image" mb="4" w={'full'} />
        <Button
          colorScheme="teal"
          size="lg"
          w="100%"
          leftIcon={<Icon as={FaShoppingCart} />}
        >
          Buy Course
        </Button>
      </Box>
    </Flex>
  );
};

export default CourseDetailsPage;
