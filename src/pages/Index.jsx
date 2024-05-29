import { Box, Container, Flex, Heading, Text, VStack, Link, Image } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">
          <Link as={RouterLink} to="/" _hover={{ textDecoration: "none" }}>
            Financial Times
          </Link>
        </Heading>
        <Flex>
          <Link as={RouterLink} to="/" p={2} _hover={{ textDecoration: "none", bg: "gray.700" }}>
            Home
          </Link>
          <Link as={RouterLink} to="/world" p={2} _hover={{ textDecoration: "none", bg: "gray.700" }}>
            World
          </Link>
          <Link as={RouterLink} to="/business" p={2} _hover={{ textDecoration: "none", bg: "gray.700" }}>
            Business
          </Link>
          <Link as={RouterLink} to="/tech" p={2} _hover={{ textDecoration: "none", bg: "gray.700" }}>
            Tech
          </Link>
          <Link as={RouterLink} to="/markets" p={2} _hover={{ textDecoration: "none", bg: "gray.700" }}>
            Markets
          </Link>
        </Flex>
      </Flex>
      <Box bg="gray.100" p={4}>
        <VStack spacing={4} align="start">
          <Heading as="h2" size="xl">
            Latest News
          </Heading>
          <Box bg="white" p={4} borderRadius="md" shadow="md" width="100%">
            <Heading as="h3" size="md" mb={2}>
              Article Title 1
            </Heading>
            <Text mb={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
            <Link as={RouterLink} to="/article/1" color="blue.500" _hover={{ textDecoration: "underline" }}>
              Read more
            </Link>
          </Box>
          <Box bg="white" p={4} borderRadius="md" shadow="md" width="100%">
            <Heading as="h3" size="md" mb={2}>
              Article Title 2
            </Heading>
            <Text mb={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
            <Link as={RouterLink} to="/article/2" color="blue.500" _hover={{ textDecoration: "underline" }}>
              Read more
            </Link>
          </Box>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;