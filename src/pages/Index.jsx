import React, { useState } from "react";
import { ChakraProvider, Container, VStack, HStack, Text, Box, Image, Button, Input, FormControl, FormLabel, Grid, GridItem, Link } from "@chakra-ui/react";
import { FaHome, FaInfoCircle, FaFileContract, FaDownload, FaPaperPlane, FaHandshake, FaNewspaper } from "react-icons/fa";
import { BrowserRouter as Router, Route, Routes, Link as RouterLink } from "react-router-dom";

// Dummy data for images
const images = [
  { id: 1, src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxuYXR1cmV8ZW58MHx8fHwxNzE2MjExMzMwfDA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 2, src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaXR5fGVufDB8fHx8MTcxNjIxMTMzMnww&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 3, src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb3VudGFpbnN8ZW58MHx8fHwxNzE2MjExMzM4fDA&ixlib=rb-4.0.3&q=80&w=1080" },
  // Add more images as needed
];

// Admin Component
const Admin = () => {
  const [formData, setFormData] = useState({
    author: "",
    date: "",
    country: "",
    city: "",
    address: "",
    views: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, image upload, and database interaction here
    console.log(formData);
  };

  return (
    <Container>
      <VStack spacing={4}>
        <Text fontSize="2xl">Admin Panel</Text>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Author</FormLabel>
            <Input name="author" value={formData.author} onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Date</FormLabel>
            <Input name="date" type="date" value={formData.date} onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Country</FormLabel>
            <Input name="country" value={formData.country} onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>City</FormLabel>
            <Input name="city" value={formData.city} onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <Input name="address" value={formData.address} onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Views</FormLabel>
            <Input name="views" type="number" value={formData.views} onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Image</FormLabel>
            <Input name="image" type="file" onChange={handleChange} />
          </FormControl>
          <Button type="submit" mt={4}>
            Upload
          </Button>
        </form>
      </VStack>
    </Container>
  );
};

// Home Component
const Home = () => {
  return (
    <Container>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {images.map((image) => (
          <GridItem key={image.id}>
            <Image src={image.src} alt={`Image ${image.id}`} />
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
};

// Static Pages
const About = () => <Text>About Us</Text>;
const Terms = () => <Text>Terms and Conditions</Text>;
const Download = () => <Text>Download</Text>;
const Partners = () => <Text>Partners</Text>;
const TheyWroteAboutUs = () => <Text>They Wrote About Us</Text>;
const SendPicture = () => <Text>Send Picture</Text>;

// Main App Component
const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <Container maxW="container.xl">
          <HStack spacing={4} py={4}>
            <Link as={RouterLink} to="/">
              <FaHome /> Home
            </Link>
            <Link as={RouterLink} to="/about">
              <FaInfoCircle /> About
            </Link>
            <Link as={RouterLink} to="/terms">
              <FaFileContract /> Terms
            </Link>
            <Link as={RouterLink} to="/download">
              <FaDownload /> Download
            </Link>
            <Link as={RouterLink} to="/send-picture">
              <FaPaperPlane /> Send Picture
            </Link>
            <Link as={RouterLink} to="/partners">
              <FaHandshake /> Partners
            </Link>
            <Link as={RouterLink} to="/they-wrote-about-us">
              <FaNewspaper /> They Wrote About Us
            </Link>
          </HStack>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/download" element={<Download />} />
            <Route path="/send-picture" element={<SendPicture />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/they-wrote-about-us" element={<TheyWroteAboutUs />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </Container>
      </Router>
    </ChakraProvider>
  );
};

export default App;
