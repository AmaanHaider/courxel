import {
    Box,
    Flex,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    Button,
    Icon,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Heading,
    Text,
    AspectRatio,
  } from "@chakra-ui/react";
  import {
    FaInfoCircle,
    FaQuestionCircle,
    FaRegFileVideo,
    FaRegPlayCircle,
  } from "react-icons/fa";
  import { AiOutlineClockCircle } from "react-icons/ai";
  import { motion } from "framer-motion";
  import Footer from "./Footer";
  import { useParams } from "react-router-dom";
  import { useEffect, useState } from "react";
  import axios from "axios";
  
  const MotionBox = motion(Box);
  
  const PurchasedDeatilsComp = () => {
  
    const [courseDetails, setCourseDetails] = useState([])
    const {id} = useParams(); 
    const [videoData, setvideoData] = useState([])  
    
    const authToken = localStorage.getItem("USER-JWT-TOKEN");
      useEffect(() => {
      const fetchCoursesDetails = async () => {
        try {
          const response = await axios.get(`${import.meta.env.VITE_API_URL}api/user/purchasedcourse/${id}`,{
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          });
          setCourseDetails(response.data);
          setvideoData(response.data.videoData)
          console.log(response.data.videoData);
        } catch (error) {
          console.error('Error fetching courses:', error);
        }
      };
      fetchCoursesDetails();
      
    }, []);
  
    return (
      <Box>
        <Flex >
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
                      {/* <Accordion allowMultiple>
                      {
                          videoData.map((e)=>{
                            return  <ChapterCard key={e.index} title={e.title} link={e.link}/>
                          })
                      } 
                      </Accordion> */}
                       <Accordion allowMultiple>
                      {
                          videoData.map((e)=>{
                            return   <MotionBox
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
          <AccordionItem w={"full"}>
            <AccordionButton>
            <Box flex="1" textAlign="left">
              {e.title}
            </Box>      
          <Button rightIcon={<FaRegPlayCircle />} colorScheme='teal' variant='solid'>
            Watch
          </Button>
            </AccordionButton>

            <AccordionPanel>
              <Box>
              <iframe
              width="100%"
              height="400"
              src={e.link}
              allowFullScreen
              title="YouTube video player"
               frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen:true
            ></iframe>
              </Box>
            </AccordionPanel>
          </AccordionItem>  
        </MotionBox>
                          })
                      } 
                      </Accordion>
                    </MotionBox>
                  </Box>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Flex>
  
        <Box>
          <Footer />
        </Box>
      </Box>
    );
  };
  
  export default PurchasedDeatilsComp;
  