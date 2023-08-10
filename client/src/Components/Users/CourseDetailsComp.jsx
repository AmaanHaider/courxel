import {
  Box,
  Flex,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Image,
  Button,
  Icon,
  Center,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Heading,
  Text,
  Card,
  CardBody,
  Stack,
  Divider,
  CardFooter,
  ButtonGroup,
  useToast,
} from "@chakra-ui/react";
import {
  FaShoppingCart,
  FaInfoCircle,
  FaPlayCircle,
  FaLock,
  FaQuestionCircle,
  FaRegFileVideo,
} from "react-icons/fa";
import { AiOutlineClockCircle } from "react-icons/ai";
import { motion } from "framer-motion";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';


const MotionBox = motion(Box);

const CourseDetailsPage = () => {

  const [courseDetails, setCourseDetails] = useState([])
  const {id} = useParams(); 
  const [videoTitle, setvideoTitle] = useState([])
  const stripe = useStripe();
  const elements = useElements();
  const toast = useToast();

  const [isLoading, setIsLoading] = useState(false); 


    useEffect(() => {
    const fetchCoursesDetails = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}api/getcourse/${id}`);
        setCourseDetails(response.data[0]);
        setvideoTitle(response.data[0].videoData)
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };
    fetchCoursesDetails();
  }, []);


  const authToken = localStorage.getItem("USER-JWT-TOKEN");

  const handlePurchase = async (e) => {
    e.preventDefault();
    setIsLoading(true); 
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}api/user/purchase/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      // Redirect to Stripe Checkout page
      const { error } = await stripe.redirectToCheckout({
        sessionId: response.data.sessionId,
      });

      if (error) {
        toast({
          title: "Error",
          description: error.message,
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
      }
    } catch (error) {
      setIsLoading(false); 
      toast({
        title: "Error",
        description: "Error starting payment process. Please try again later.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    }
  };


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
  

//   console.log(videoTitle);


  return (
    <Box>
      <Flex p="4">
        {/* Left Section - Course Details */}
        <Box flex="1">
          <Tabs isLazy variant="enclosed">
            <TabList>
              <Tab>
                <Icon as={FaInfoCircle} mr="2" />
                Overview
              </Tab>
              <Tab>
                <Icon as={FaRegFileVideo} mr="2" />
                Content
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                {/* Overview Content */}
                <MotionBox
                  p="4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Box p="4">
                    <Flex direction="column">
                      <Heading as="h1" size="xl" fontWeight="semibold" mb="2">
                       {courseDetails.title}
                      </Heading>
                      <Flex alignItems="center" mb="2">
                        <Icon as={AiOutlineClockCircle} mr="2" />
                        <Box>Duration: {courseDetails.duration}</Box>
                      </Flex>
                      <Box mb="4" mt="5%">
                        <Heading as="h1" size="xl" fontWeight="semibold" mb="2">
                          Description
                         
                        </Heading>
                        <Text>
                        {courseDetails.description}
                        </Text>
                      </Box>
                      <Box
                        fontSize="xl"
                        p={2}
                        fontWeight="semibold"
                        mt="15%"
                        mb="2%"
                      >
                        <Heading as="h1" size="xl">
                          Frequently Asked Questions (FAQ)
                          <Icon as={FaQuestionCircle} ml="2" />
                        </Heading>
                      </Box>
                      <Accordion allowMultiple>
                        <AccordionItem>
                          <h2>
                            <AccordionButton>
                              <Box flex="1" textAlign="left">
                                What will I learn from this course?
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel>
                            You will learn various skills and techniques to
                            enhance your knowledge in this field.
                          </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                          <h2>
                            <AccordionButton>
                              <Box flex="1" textAlign="left">
                                Pre-requisites
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Earum ut aliquid maiores aspernatur
                            perspiciatis quidem! Quos eos quae qui voluptates
                            voluptatem numquam quidem maiores sed facilis
                            inventore at, explicabo velit?
                          </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                          <h2>
                            <AccordionButton>
                              <Box flex="1" textAlign="left">
                                Is any prior experience required?
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel>
                            No, this course is suitable for beginners and
                            experts alike.
                          </AccordionPanel>
                        </AccordionItem>
                      </Accordion>
                    </Flex>
                  </Box>
                </MotionBox>
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
                    {/* {Array.from({ length: 10 }, (_, index) => (
                      <ChapterCard key={index} title={`Chapter ${index + 1}`} />
                    ))} */}
                    {
                        videoTitle.map((e)=>{
                          return  <ChapterCard key={e.index} title={e.title}/>
                        })
                    } 
                  </MotionBox>
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>

        {/* Right Section - Course Card */}
        <Box ml="4">
          <Card maxW="sm">
            <CardBody>
              <Image
              src={courseDetails.imageUrl}
                alt="Course Image"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Text color="blue.600" fontSize="2xl">
                  {courseDetails.price}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button
                onClick={handlePurchase}
                  colorScheme="teal"
                  size="lg"
                  w="100%"
                  rightIcon={<Icon as={FaShoppingCart} />}
                  isLoading={isLoading} 
                >
                  Buy Course
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </Box>
      </Flex>

      <Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default CourseDetailsPage;
