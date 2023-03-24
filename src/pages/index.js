import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Textarea,
  Icon,
  useMediaQuery,
} from "@chakra-ui/react";

export default function Home() {
  const [isMobileScreen] = useMediaQuery("(max-width: 480px)");

  return (
    <Flex
      w={"100vw"}
      h={["auto", "100vh"]}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Flex
        mx={"auto"}
        w={["23.5rem", "76rem"]}
        gap={"2rem"}
        flexDirection={["column", "row"]}
      >
        <Flex
          flexDirection={"column"}
          spacing={0}
          mx={"auto"}
          align={["center", "auto"]}
        >
          {!isMobileScreen && (
            <Heading
              alignSelf={"flex-start"}
              fontSize={"2.25rem"}
              fontWeight={"bold"}
            >
              Let's Connect
            </Heading>
          )}
          {!isMobileScreen && (
            <Text
              fontSize={"1.25rem"}
              color={"gray.600"}
              letterSpacing={"0.03rem"}
              my={"2rem"}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              augue ex, iaculis non magna sit amet, posuere fermentum magna.
              Praesent tempus risus mauris, ac pharetra mi sagittis id.
            </Text>
          )}
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"lg"}
            p={"2rem"}
            w={["327px", "800px"]}
            mt={["1.5rem", "0"]}
          >
            {isMobileScreen && (
              <Heading
                alignSelf={"flex-start"}
                fontSize={"2.25rem"}
                fontWeight={"bold"}
              >
                Let's Connect
              </Heading>
            )}
            {isMobileScreen && (
              <Text
                fontSize={"1.25rem"}
                color={"gray.600"}
                letterSpacing={"0.03rem"}
                my={"2rem"}
              >
                FlexiBlog theme comes with a pre-made contact form component.
                You can integrate this form with serverless services such as
                Formspree, Getform, FormKeep and others to receive form
                submissions via email.
              </Text>
            )}
            <Flex flexDirection={"column"} gap={"2rem"} w={"100%"}>
              <Flex gap={"2rem"} flexDirection={["column", "row"]}>
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
              <Flex gap={"2rem"} flexDirection={["column", "row"]}>
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
                w={["auto", "110px"]}
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
          align={"center"}
          justify={"center"}
        >
          <Flex flexDirection={"column"}>
            <Heading
              fontSize={"1xl"}
              fontWeight={"bold"}
              alignSelf={"flex-start"}
              mt={["2rem", "4.5rem"]}
              mb={"0.75rem"}
            >
              Our Commitment
            </Heading>
            <Box
              rounded={"lg"}
              bg={useColorModeValue("white", "gray.900")}
              boxShadow={"lg"}
              w={["327px", "auto"]}
              p={"1.75rem"}
            >
              {!isMobileScreen && (
                <Text fontSize={"1.125rem"} color={"gray.500"}>
                  Orci varius natoque penatibus et magnis disparturient montes,
                  nascetur ridiculus mus. Vivamus hendrerit justo eu diam varius
                  dictum
                </Text>
              )}
              {isMobileScreen && (
                <Text fontSize={"1.125rem"} color={"gray.500"}>
                  We take our commitment to our users seriously. If you need our
                  help with your project, have questions about how to use the
                  site or are experiencing any technical difficulties, please do
                  not hesitate to contact us.
                </Text>
              )}
            </Box>
          </Flex>
          <Flex flexDirection={"column"}>
            <Heading
              fontSize={"1xl"}
              fontWeight={"bold"}
              alignSelf={"flex-start"}
              mt={"4rem"}
              mb={"0.75rem"}
            >
              Art Directing
            </Heading>
            <Box
              rounded={"lg"}
              bg={useColorModeValue("white", "gray.900")}
              w={["327px", "auto"]}
              boxShadow={"lg"}
              p={"1.75rem"}
              mb={"1.5rem"}
            >
              <Flex flexDirection={"column"} gap={"1.5rem"}>
                {!isMobileScreen && (
                  <Text fontSize={"lg"} color={"gray.500"}>
                    Proin sapien ligula, aliquam eget enim ac, fringilla
                    hendrerit nulla.
                  </Text>
                )}
                {isMobileScreen && (
                  <Text fontSize={"lg"} color={"gray.500"}>
                    Interested in working together? Suspendisse potenti. Mauris mollis diam tempus ut.
                  </Text>
                )}
                <Text
                  fontSize={"1rem"}
                  color={"gray.500"}
                  fontWeight={"medium"}
                >
                  <PhoneIcon mr={"8px"} />
                  +123 (4567) 8910
                </Text>
                <Text
                  fontSize={"1rem"}
                  color={"gray.500"}
                  fontWeight={"medium"}
                >
                  <EmailIcon mr={"8px"} />
                  hello@example.com
                </Text>
                <Text
                  fontSize={"1rem"}
                  color={"gray.500"}
                  fontWeight={"medium"}
                >
                  <Icon mr={"8px"} viewBox="0 0 20 20">
                    <path
                      fill="currentColor"
                      d="M15.303 14.47 10 19.773 4.697 14.47a7.5 7.5 0 1 1 10.606 0ZM10 10.833A1.667 1.667 0 1 0 10 7.5a1.667 1.667 0 0 0 0 3.333Z"
                    />
                  </Icon>
                  120 Street Lorem Ipsum Sit Amet
                </Text>
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
