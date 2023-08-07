import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Checkbox,
  VStack,
} from '@chakra-ui/react';

function CreateCourseForm() {
  const [videoData, setvideoData] = useState([{ title: '', link: '' }]);

  const addVideoLink = () => {
    setvideoData(prevLinks => [...prevLinks, { title: '', link: '' }]);
  };

  const handleVideoLinkChange = (index, field, value) => {
    const updatedLinks = [...videoData];
    updatedLinks[index][field] = value;
    setvideoData(updatedLinks);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const formData = {
      title: event.target.title.value,
      description: event.target.description.value,
      imageUrl: event.target.imageUrl.value,
      price: event.target.price.value,
      publish: event.target.publish.checked,
      videoData: videoData,
    };

    // You can send the form data, including videoData, to your backend API here
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <VStack spacing={4}>
        <FormControl id="title">
          <FormLabel>Title</FormLabel>
          <Input type="text" name="title" required />
        </FormControl>

        <FormControl id="description">
          <FormLabel>Description</FormLabel>
          <Textarea name="description" required />
        </FormControl>

        <FormControl id="imageUrl">
          <FormLabel>Image URL</FormLabel>
          <Input type="text" name="imageUrl" required />
        </FormControl>

        <FormControl id="price">
          <FormLabel>Price</FormLabel>
          <Input type="number" name="price" required />
        </FormControl>

        <FormControl id="publish">
          <Checkbox name="publish">Published</Checkbox>
        </FormControl>

        <FormControl id="videoData">
          <FormLabel>Video Links</FormLabel>
          {videoData.map((link, index) => (
            <div key={index}>
              <Input
                placeholder="Video Title"
                value={link.title}
                onChange={e => handleVideoLinkChange(index, 'title', e.target.value)}
                required
              />
              <Input
                placeholder="Video Link"
                value={link.link}
                onChange={e => handleVideoLinkChange(index, 'link', e.target.value)}
                required
              />
            </div>
          ))}
          <Button mt={2} onClick={addVideoLink}>
            Add Video Link
          </Button>
        </FormControl>

        <Button type="submit" colorScheme="blue">
          Create Course
        </Button>
      </VStack>
    </form>
  );
}

export default CreateCourseForm;
