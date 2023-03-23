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
      w={"100vw"}
      h={["auto", "100vh"]}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Flex spacing={0} mx={"auto"} w={["375px", "1216px"]} py={0} px={0} gap={"2rem"}>
        <Flex flexDirection={"column"} spacing={0} mx={"auto"} py={0} px={0}>
          <Heading
            alignSelf={"flex-start"}
            fontSize={"2.25rem"}
            fontWeight={"bold"}
          >
            Let's Connect
          </Heading>
          <Text
            fontSize={"1.25rem"}
            color={"gray.600"}
            letterSpacing={"0.03rem"}
            my={"2rem"}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla augue ex, iaculis non magna sit amet, posuere fermentum magna. Praesent tempus risus mauris, ac pharetra mi sagittis id.
          </Text>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"lg"}
            p={"2rem"}
            w={"800px"}
          >
            <Flex flexDirection={"column"} gap={"2rem"} w={"100%"}>
              <Flex gap={"2rem"}>
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
              </Flex>
              <Flex gap={"2rem"}>
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
              </Flex>
              <FormControl id="subject">
                <FormLabel>Subject</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Your Message</FormLabel>
                <InputGroup>
                  <Textarea />
                </InputGroup>
              </FormControl>
              <Button
                loadingText="Submitting"
                size="lg"
                w={"110px"}
                bg={"red.400"}
                color={"white"}
                _hover={{
                  bg: "red.500",
                }}
              >
                Submit
              </Button>
            </Flex>
          </Box>
        </Flex>
        <Flex
          flexDirection={"column"}
          h={"100%"}
          w={"100%"}
          align={"flex-start"}
          justify={"center"}
        >
          <Heading fontSize={"1xl"} fontWeight={"bold"} mt={"4.5rem"} mb={"0.75rem"}>
            Our Commitment
          </Heading>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"lg"}
            p={"1.75rem"}
          >
            <Text fontSize={"1.125rem"} color={"gray.600"}>
              Orci varius natoque penatibus et magnis disparturient montes,
              nascetur ridiculus mus. Vivamus hendrerit justo eu diam varius
              dictum
            </Text>
          </Box>
          <Heading fontSize={"1xl"} fontWeight={"bold"} mt={"4rem"} mb={"0.75rem"}>
            Art Directing
          </Heading>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"lg"}
            p={"1.75rem"}
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
        </Flex>
      </Flex>
    </Flex>
  );
}
