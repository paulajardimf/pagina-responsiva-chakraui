import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Textarea,
  VStack,
  Icon,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"start"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <HStack spacing={8} mx={"auto"} maxW={"800px"} py={12} px={6}>
        <VStack align={"start"}>
          <Heading fontSize={"4xl"} fontWeight={"bold"} textAlign={"center"}>
            Let's Connect
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla augue
            ex, iaculis non magna sit amet, posuere fermentum magna. Praesent
            tempus risus mauris, ac pharetra mi sagittis id.
          </Text>

          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"lg"}
            p={30}
          >
            <Stack spacing={4}>
              <HStack w="100%">
                <Box flex={1}>
                  <FormControl id="name">
                    <FormLabel>Name</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box>
                <Box flex={1}>
                  <FormControl id="companyName">
                    <FormLabel>Company Name</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box>
              </HStack>
              <HStack>
                <Box flex={1}>
                  <FormControl id="email">
                    <FormLabel>Email</FormLabel>
                    <Input type="email" />
                  </FormControl>
                </Box>
                <Box flex={1}>
                  <FormControl id="name">
                    <FormLabel>Phone Number</FormLabel>
                    <Input type="phone" />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="subject">
                <FormLabel>Subject</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Your Message</FormLabel>
                <InputGroup>
                  <Textarea />
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"red.400"}
                  color={"white"}
                  _hover={{
                    bg: "red.500",
                  }}
                >
                  Sign up
                </Button>
              </Stack>
            </Stack>
          </Box>
        </VStack>
        <VStack h={"100%"} align={"flex-start"} spacing={8} >
          <Heading fontSize={"1xl"} fontWeight={"bold"}>
            Our Commitment
          </Heading>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"lg"}
            p={30}
          >
            <Text fontSize={"lg"} color={"gray.600"}>
              Orci varius natoque penatibus et magnis disparturient montes,
              nascetur ridiculus mus. Vivamus hendrerit justo eu diam varius
              dictum
            </Text>
          </Box>
          <Heading fontSize={"1xl"} fontWeight={"bold"}>
            Art Directing
          </Heading>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"lg"}
            p={30}
          >
            <Text fontSize={"lg"} color={"gray.600"}>
              Proin sapien ligula, aliquam eget enim ac, fringilla hendrerit
              nulla.
            </Text>
            <Text fontSize={"small"} color={"gray.500"} fontWeight={"medium"}>
              <PhoneIcon />
              +123 (4567) 8910
            </Text>
            <Text fontSize={"small"} color={"gray.500"} fontWeight={"medium"}>
              <EmailIcon />
              hello@example.com
            </Text>
            <Text fontSize={"small"} color={"gray.500"} fontWeight={"medium"}>
              <Icon viewBox="0 0 20 20">
                <path
                  fill="currentColor"
                  d="M15.303 14.47 10 19.773 4.697 14.47a7.5 7.5 0 1 1 10.606 0ZM10 10.833A1.667 1.667 0 1 0 10 7.5a1.667 1.667 0 0 0 0 3.333Z"
                />
              </Icon>
              120 Street Lorem Ipsum Sit Amet
            </Text>
          </Box>
        </VStack>
      </HStack>
    </Flex>
  );
}
