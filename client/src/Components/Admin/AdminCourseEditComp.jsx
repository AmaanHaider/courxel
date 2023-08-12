import React, { useEffect, useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
  Switch,
  useColorMode,
  Box,
  Heading,
  Center,
  CloseButton,
  Flex,
} from '@chakra-ui/react';
import axios from 'axios';
import { useToast } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';


function AdminCourseEditComp() {
  const [videoData, setVideoData] = useState([{ title: '', link: '' }]);
  const [isPublished, setIsPublished] = useState(false);
  const { colorMode } = useColorMode();
  const {id} = useParams(); 

  const toast = useToast();

  const addVideoLink = () => {
    setVideoData(prevLinks => [...prevLinks, { title: '', link: '' }]);
  };

  const handleVideoLinkChange = (index, field, value) => {
    const updatedLinks = [...videoData];
    updatedLinks[index][field] = value;
    setVideoData(updatedLinks);
  };
  
  const handleDeleteVideoLink = index => {
    const updatedLinks = [...videoData];
    updatedLinks.splice(index, 1);
    setVideoData(updatedLinks);
  };

  const handlePublishedToggle = () => {
    setIsPublished(prevValue => !prevValue);
  };

  useEffect(() => {
    const fetchCourseDetails = async () => {
      const authToken = localStorage.getItem("ADMIN-JWT-TOKEN");
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}api/admin/mycourses/${id}`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        // console.log(response.data.course);
        
        setVideoData(response.data.course[0].videoData);
        setIsPublished(response.data.course[0].publish);
      
        document.getElementById('title').value = response.data.course[0].title;
        document.getElementById('description').value = response.data.course[0].description;
        document.getElementById('imageUrl').value = response.data.course[0].imageUrl;
        document.getElementById('price').value = response.data.course[0].price;
      } catch (error) {
        console.error('Error fetching course details:', error);
      }
    };

    fetchCourseDetails();
  }, [id]);

  const handleSubmit = async event => {
    event.preventDefault();
    const formData = {
      title: event.target.title.value,
      description: event.target.description.value,
      imageUrl: event.target.imageUrl.value,
      duration:20,
      price: event.target.price.value,
      publish: isPublished,
      videoData: videoData,
    };

    const authToken = localStorage.getItem("ADMIN-JWT-TOKEN");
    try {
         await axios.put(`${import.meta.env.VITE_API_URL}api/admin/course/update/${id}`, formData,{
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      event.target.reset();
      toast({
        title: 'Course Updated',
        description: 'The course has been Updated successfully.',
        status: 'success',
        duration: 3000,
        isClosable: true,
        position:'top-right'
      });

    } catch (error) {
      
      toast({
        title: 'Error updating course',
        description: 'An error occurred while updating the course.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleCourseDelete =async(e)=>{
    event.preventDefault();
    const authToken = localStorage.getItem("ADMIN-JWT-TOKEN");
    try {
         await axios.delete(`${import.meta.env.VITE_API_URL}api/admin/course/delete/${id}`,{
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      toast({
        title: 'Course Deleted',
        description: 'The course has been deleted successfully.',
        status: 'success',
        duration: 3000,
        isClosable: true,
        position:'top-right'
      });

    } catch (error) {
      
      toast({
        title: 'Error deleting course',
        description: 'An error occurred while deleting the course.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  }

  return (
    <Box>
        <Box mb="2%">
            <Center>
            <Heading>
                Edit Course
            </Heading>
            </Center>
        </Box>
        <Box>

    <form onSubmit={handleSubmit}>
      <VStack
        spacing={4}
        bg={colorMode === 'light' ? 'gray.100' : 'gray.800'}
        p={8}
        borderRadius="md"
      >
        <FormControl id="title">
          <FormLabel fontWeight="extrabold" fontSize="xl">Course Title</FormLabel>
          <Input type="text" name="title" required />
        </FormControl>

        <FormControl id="description">
          <FormLabel fontWeight="extrabold" fontSize="xl"> Course Description</FormLabel>
          <Textarea name="description" required />
        </FormControl>

        <FormControl id="imageUrl">
          <FormLabel fontWeight="extrabold" fontSize="xl">Image URL</FormLabel>
          <Input type="text" name="imageUrl" required placeholder='Enter Your Cours Image URL(thumbnail)' />
        </FormControl>

        <FormControl id="price">
          <FormLabel fontWeight="extrabold" fontSize="xl">Price</FormLabel>
          <Input type="number" name="price" required />
        </FormControl>

        <FormControl id="publish">
          <FormLabel fontWeight="extrabold" fontSize="xl">Visibility</FormLabel>
          <Switch
            id="publishedSwitch"
            size="lg"
            isChecked={isPublished}
            onChange={handlePublishedToggle}
            colorScheme={isPublished ? 'green' : 'red'}

          />
          <FormLabel>
            {isPublished ? 'Public' : 'Private'}
          </FormLabel>
        </FormControl>

        <FormControl id="videoData">
              <FormLabel fontWeight="extrabold" fontSize="xl">
                Course Video Content
              </FormLabel>
              {videoData.map((link, index) => (
                <div key={index}>
                  <Flex>

                  <FormLabel>Video {index + 1}</FormLabel>
                  {videoData.length > 1 && (
                    <CloseButton
                      onClick={() => handleDeleteVideoLink(index)}
                      size="md"
                      ml={2}
                      color="red"
                    />
                  )}
                  </Flex>
                  <Input
                    placeholder="Video Title"
                    value={link.title}
                    onChange={e =>
                      handleVideoLinkChange(index, 'title', e.target.value)
                    }
                    
                  />
                  <Input
                    placeholder="Video Link"
                    value={link.link}
                    onChange={e =>
                      handleVideoLinkChange(index, 'link', e.target.value)
                    }
                    
                  />
                 
                </div>
              ))}
              <Button mt={2} onClick={addVideoLink}>
                Add Video Link
              </Button>
            </FormControl>
            <Flex gap={5}>
            <Button type="submit" colorScheme="blue">
              Edit Course
            </Button>
            <Button  onClick={handleCourseDelete} colorScheme="red">
              Delete Course
            </Button>
            </Flex>
     
      </VStack>
    </form>
        </Box>

    </Box>
  );
}

export default AdminCourseEditComp;
