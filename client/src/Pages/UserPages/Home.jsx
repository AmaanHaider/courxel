import React from "react";
import {
  Button,
  Center,
  Container,
  Grid,
  GridItem,
  Heading,
} from "@chakra-ui/react";
import { Box, Flex, Image, Link, chakra } from "@chakra-ui/react";
import Navbar from "../../Components/Users/Navbar";
import Hero from "../../Components/Users/Hero";
import { FeaturedCards } from "../../Components/Users/FeaturedCards";
import Footer from "../../Components/Users/Footer";
import Reviews from "../../Components/Users/Reviews";

const Home = () => {
  const cardsData = [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      title: "I Built A Successful Blog In One Year",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris egestas quam volutpat viverra. In pretium nec senectus erat. Et malesuada lobortis.",
      author: {
        name: "John Doe",
        avatarUrl:
          "https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60",
      },
      date: "21 SEP 2015",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      title: "I Built A Successful Blog In One Year",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris egestas quam volutpat viverra. In pretium nec senectus erat. Et malesuada lobortis.",
      author: {
        name: "John Doe",
        avatarUrl:
          "https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60",
      },
      date: "21 SEP 2015",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      title: "I Built A Successful Blog In One Year",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris egestas quam volutpat viverra. In pretium nec senectus erat. Et malesuada lobortis.",
      author: {
        name: "John Doe",
        avatarUrl:
          "https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60",
      },
      date: "21 SEP 2015",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      title: "I Built A Successful Blog In One Year",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris egestas quam volutpat viverra. In pretium nec senectus erat. Et malesuada lobortis.",
      author: {
        name: "John Doe",
        avatarUrl:
          "https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60",
      },
      date: "21 SEP 2015",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      title: "I Built A Successful Blog In One Year",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris egestas quam volutpat viverra. In pretium nec senectus erat. Et malesuada lobortis.",
      author: {
        name: "John Doe",
        avatarUrl:
          "https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60",
      },
      date: "21 SEP 2015",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      title: "I Built A Successful Blog In One Year",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris egestas quam volutpat viverra. In pretium nec senectus erat. Et malesuada lobortis.",
      author: {
        name: "John Doe",
        avatarUrl:
          "https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60",
      },
      date: "21 SEP 2015",
    },

    // Add more card data here...
  ];
  return (
    <div>
      <Navbar />
      <div>
        {" "}
        <Hero />{" "}
      </div>

      <div
        style={{
          marginTop: "2%",
        }}
      >
        <Container>
          <Center>
            <Heading>Featured Courses</Heading>
          </Center>
        </Container>
      </div>

      <div
        style={{
          marginTop: "2%",
        }}
      >
        <Container maxW={"full"}>
          <Flex
            bg="#edf3f8"
            _dark={{ bg: "#3e3e3e" }}
            p={50}
            w="full"
            alignItems="center"
            justifyContent="center"
            flexWrap="wrap"
          >
            <Grid
              templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
              gap={6}
            >
              {cardsData.map((card, index) => (
                <FeaturedCards key={index} {...card} />
              ))}
            </Grid>
          </Flex>
        </Container>
      </div>
      <div
        style={{
          marginTop: "2%",
        }}
      >
        <Center>
          <Button>Explore More</Button>
        </Center>
      </div>

      <div
        style={{
          marginTop: "2%",
        }}
      >
        <Center>
          <Reviews />
        </Center>
      </div>
      <div
        style={{
          marginTop: "2%",
        }}
      >
        <Footer />
      </div>
    </div>
  );
};

export default Home;
