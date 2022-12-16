import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
    Icon,
    createIcon,
    useColorModeValue,
    Tag,
    VStack,
  } from "@chakra-ui/react";
  import Footer from "./Footer";
  import Navbar from "./Navbar"
  import { ArrowForwardIcon } from "@chakra-ui/icons";
  
  export default function Home() {
    return (
      <>
      <Navbar pos={"sticky"} top={"0"}/>
        <Container maxW={"full"} bg={"#f0f6ff"}>
          <Stack
            align={"center"}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
            direction={{ base: "column", md: "row" }}
            width="90%"
            margin={"auto"}
          >
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                textAlign={"left"}
                fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
              >
                <Text  as={"span"}  fontSize={"70px"}>
                  Connect everything Achieve anything.
                </Text>
                <br />
              </Heading>
              <Text textAlign={"left"} fontSize={"25px"}>
                <b>
                  Accelerate work and unlock potential with powerful apps that
                  connect your data, workflows and teams. This is how.
                </b>
              </Text>
              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={{ base: "column", sm: "row" }}
              >
                <Button colorScheme="blue" size="lg" fontSize={"25px"}>
                  Sign up for free
                </Button>
              </Stack>
            </Stack>
            <Flex
              flex={1}
              justify={"center"}
              align={"center"}
              position={"relative"}
              w={"full"}
            >
              <Blob
                w={"150%"}
                h={"150%"}
                position={"absolute"}
                top={"-20%"}
                left={0}
                zIndex={-1}
                color={useColorModeValue("red.50", "red.400")}
              />
              <Box
                position={"relative"}
                height={"auto"}
                rounded={"2xl"}
                boxShadow={"2xl"}
                width={"600px"}
                overflow={"hidden"}
              >
                <video muted autoPlay preload="auto" playsInline loop>
                  <source
                    src="https://videos.ctfassets.net/wl95ljfippl8/4mknj7oTndciGSdFtTDjZq/adcfe61bb0700d98af81f1f47e72a787/Homepage_Brand_Video_May_2022_V2.mp4"
                    type="video/mp4"
                  />
                </video>
              </Box>
            </Flex>
          </Stack>
        </Container>
  
        <Container maxW={"full"} bg={"#f2f4f7"} height={"100px"}>
          <Flex height={"25px"} justifyContent={"space-around"}>
            <Image
              mt={"40px"}
              height={"20px"}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWFhcmccpxji36f0fccleLD-U-hEuZUGSLVw&usqp=CAU"
            />
  
            <Image
              height={"23px"}
              mt={"40px"}
              src="data:image/png;base64,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"
            />
            <Image
              height={"30px"}
              mt={"40px"}
              src="data:image/png;base64,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"
            />
            <Image
              height={"26px"}
              mt={"40px"}
              src="data:image/png;base64,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"
            />
            <Image
              height={"26px"}
              mt={"40px"}
              src="data:image/png;base64,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"
            />
            <Image
              height={"45px"}
              mt={"40px"}
              src="data:image/png;base64,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"
            />
          </Flex>
        </Container>
  
        <Container maxW={"full"} bg={"#fbfbfc"} height={"400px"} p={"85px"}>
          <Text
            lineHeight={"75px"}
            fontFamily="sans-serif;"
            margin={"auto"}
            width={"50%"}
            fontSize={"65px"}
          >
            <b>Create solutions that mirror your business</b>
          </Text>
          <Text
            margin={"auto"}
            width={"50%"}
            fontSize={"20px"}
            lineHeight={"30px"}
          >
            Move work forward faster with no-code apps that perfectly match your
            team’s agility and scale.
          </Text>
        </Container>
  
        <Container maxW={"full"} bg={"#faf2f4"}>
          <Stack
            align={"center"}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
            direction={{ base: "column", md: "row" }}
            width="85%"
            margin={"auto"}
          >
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                textAlign={"left"}
                fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
              >
                <Text as={"span"} position={"relative"} fontSize={"50px"}>
                  <b>Unite every stream of work</b>
                </Text>
                <br />
              </Heading>
              <Text textAlign={"left"} fontSize={"20px"} lineHeight={"30px"}>
                Create a single source of truth that’s tailored precisely to how
                your teams work. Include everything you need, nothing you don’t.
              </Text>
              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={{ base: "column", sm: "row" }}
              >
                <Button
                  rightIcon={<ArrowForwardIcon />}
                  colorScheme="blue"
                  variant="ghost"
                  fontSize={"18px"}
                >
                  <b>Explore the product</b>
                </Button>
              </Stack>
            </Stack>
            <Flex
              flex={1}
              justify={"center"}
              align={"center"}
              position={"relative"}
              w={"full"}
            >
              <Blob
                w={"150%"}
                h={"150%"}
                position={"absolute"}
                top={"-20%"}
                left={0}
                zIndex={-1}
                color={useColorModeValue("red.50", "red.400")}
              />
              <Box
                position={"relative"}
                height={"auto"}
                boxShadow={"2xl"}
                width={"700px"}
                overflow={"hidden"}
              >
                <video muted autoPlay preload="auto" playsInline loop>
                  <source
                    src="https://static.airtable.com/images/homescreen/Homepage_Anim_02_Unite_FINAL.mp4"
                    type="video/mp4"
                  />
                </video>
              </Box>
            </Flex>
          </Stack>
        </Container>
  
        <Container maxW={"full"} bg={"#faf2f4"}>
          <Stack
            align={"center"}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
            direction={{ base: "column", md: "row" }}
            width="80%"
            margin={"auto"}
          >
            <Flex
              flex={1}
              justify={"center"}
              align={"center"}
              position={"relative"}
              w={"full"}
            >
              <Blob
                w={"150%"}
                h={"150%"}
                position={"absolute"}
                top={"-20%"}
                left={0}
                zIndex={-1}
                color={useColorModeValue("red.50", "red.400")}
              />
              <Box
                position={"relative"}
                height={"auto"}
                boxShadow={"2xl"}
                width={"700px"}
                overflow={"hidden"}
              >
                <video muted autoPlay preload="auto" playsInline loop>
                  <source
                    src="https://static.airtable.com/images/homescreen/Homepage_Anim_03_TurnInformation_FINAL.mp4"
                    type="video/mp4"
                  />
                </video>
              </Box>
            </Flex>
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
              <Tag
                size={"md"}
                bg={useColorModeValue("purple.600")}
                ml={2}
                rounded={"30px"}
                width={"50px"}
                color={"white"}
              >
                <b>NEW</b>
              </Tag>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
              >
                <Text as={"span"} position={"relative"} fontSize={"50px"}>
                  <b>Interface with work in a new way</b>
                </Text>
                <br />
              </Heading>
              <Text fontSize={"20px"} lineHeight={"30px"}>
                Create custom interfaces that give each and every teammate the
                relevant information they need, and a simple way to take action.
              </Text>
              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={{ base: "column", sm: "row" }}
              >
                <Button
                  rightIcon={<ArrowForwardIcon />}
                  colorScheme="blue"
                  variant="ghost"
                  fontSize={"18px"}
                >
                  <b>Learn more about Interface Designer </b>
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Container>
  
        <Container maxW={"full"} bg={"#faf2f4"}>
          <VStack
            align={"center"}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
            direction={{ base: "column", md: "row" }}
            width="80%"
            margin={"auto"}
          >
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <Heading
                    lineHeight={1.1}
                    fontWeight={600}
                    fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
                  >
                    <Text as={"span"} position={"relative"} fontSize={"50px"}>
                      <b>Bring all your data together</b>
                    </Text>
                    <br />
                  </Heading>
                </div>
                <div style={{ width: "50%" }}>
                  <Text fontSize={"20px"} lineHeight={"30px"}>
                    All your information. Always up to date. At your fingertips.
                    Keep everything in sync across your organization.
                  </Text>
                  <Stack
                    spacing={{ base: 4, sm: 6 }}
                    direction={{ base: "column", sm: "row" }}
                  >
                    <Button
                      rightIcon={<ArrowForwardIcon />}
                      colorScheme="blue"
                      variant="ghost"
                      fontSize={"18px"}
                    >
                      <b>Learn about Sync</b>
                    </Button>
                  </Stack>
                </div>
              </div>
            </Stack>
  
            <div>
              <Image
                width={"90%"}
                margin={"auto"}
                marginTop={"-10"}
                alt={"Login Image"}
                objectFit={"cover"}
                src={
                  "https://static.airtable.com/images/homescreen/homepage-sync.jpg"
                }
              />
            </div>
          </VStack>
        </Container>
  
        <Container maxW={"full"} bg={"#fbfbfc"}>
          <Stack
            align={"center"}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
            direction={{ base: "column", md: "row" }}
            width="80%"
            margin={"auto"}
          >
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
              >
                <Text as={"span"} position={"relative"} fontSize={"50px"}>
                  Get started quickly
                </Text>
                <br />
              </Heading>
              <Text fontSize={"20px"} lineHeight={"30px"}>
                Begin building on day one. Airtable’s pre-made templates and
                intuitive design help you tackle even your most complex needs,
                right away.
              </Text>
              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={{ base: "column", sm: "row" }}
              >
                <Button
                  rightIcon={<ArrowForwardIcon />}
                  colorScheme="blue"
                  variant="ghost"
                  fontSize={"18px"}
                >
                  <b>Explore the product</b>
                </Button>
              </Stack>
            </Stack>
            <Flex
              flex={1}
              justify={"center"}
              align={"center"}
              position={"relative"}
              w={"full"}
            >
              <Blob
                w={"150%"}
                h={"150%"}
                position={"absolute"}
                top={"-20%"}
                left={0}
                zIndex={-1}
                color={useColorModeValue("red.50", "red.400")}
              />
              <Box
                position={"relative"}
                height={"auto"}
                boxShadow={"2xl"}
                width={"700px"}
                overflow={"hidden"}
              >
                <video muted autoPlay preload="auto" playsInline loop>
                  <source
                    src="https://static.airtable.com/images/homescreen/Homepage_Anim_05_SeeValueFast_FINAL.mp4"
                    type="video/mp4"
                  />
                </video>
              </Box>
            </Flex>
          </Stack>
        </Container>
  
        <Container maxW={"full"} bg={"#fbfbfc"}>
          <Stack
            align={"center"}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
            direction={{ base: "column", md: "row" }}
            width="80%"
            margin={"auto"}
          >
            <Flex
              flex={1}
              justify={"center"}
              align={"center"}
              position={"relative"}
              w={"full"}
            >
              <Blob
                w={"150%"}
                h={"150%"}
                position={"absolute"}
                top={"-20%"}
                left={0}
                zIndex={-1}
                color={useColorModeValue("red.50", "red.400")}
              />
              <Box
                position={"relative"}
                height={"auto"}
                boxShadow={"2xl"}
                width={"700px"}
                overflow={"hidden"}
              >
                <Image src="https://static.airtable.com/images/homescreen/homepage-apps-dashboard.jpg" />
              </Box>
            </Flex>
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
              >
                <Text as={"span"} position={"relative"} fontSize={"50px"}>
                  <b>Transform how teams work at scale</b>
                </Text>
                <br />
              </Heading>
              <Text fontSize={"20px"} lineHeight={"30px"}>
                Discover deep integrations, advanced extensibility, expert
                support—everything your organization needs to reach new heights.
              </Text>
            </Stack>
          </Stack>
        </Container>
  
        <Container maxW={"full"} bg={"#faf2f4"}>
          <VStack
            align={"center"}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
            direction={{ base: "column", md: "row" }}
            width="80%"
            margin={"auto"}
          >
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <Heading
                    mt={"-10%"}
                    lineHeight={1.1}
                    fontWeight={600}
                    width={"50%"}
                    fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
                  >
                    <Text as={"span"} position={"relative"} fontSize={"50px"}>
                      Trusted by teams from all industries
                    </Text>
                    <br />
                  </Heading>
                </div>
                <div style={{ width: "50%" }}>
                  <Stack
                    spacing={{ base: 4, sm: 6 }}
                    direction={{ base: "column", sm: "row" }}
                  >
                    <Button
                      rightIcon={<ArrowForwardIcon />}
                      colorScheme="blue"
                      variant="ghost"
                      fontSize={"18px"}
                      marginTop={"20%"}
                    >
                      <b>Read all costomers strories</b>
                    </Button>
                  </Stack>
                </div>
              </div>
            </Stack>
  
            <div>
              <Image
                width={"1100px"}
                height={"650px"}
                margin={"auto"}
                alt={"Login Image"}
                src={"https://i.postimg.cc/MKJV8QjY/Untitleddddddddddd.png"}
              />
            </div>
          </VStack>
        </Container>
  
        <Footer />
      </>
    );
  }
  
  const PlayIcon = createIcon({
    displayName: "PlayIcon",
    viewBox: "0 0 58 58",
    d: "M28.9999 0.562988C13.3196 0.562988 0.562378 13.3202 0.562378 29.0005C0.562378 44.6808 13.3196 57.438 28.9999 57.438C44.6801 57.438 57.4374 44.6808 57.4374 29.0005C57.4374 13.3202 44.6801 0.562988 28.9999 0.562988ZM39.2223 30.272L23.5749 39.7247C23.3506 39.8591 23.0946 39.9314 22.8332 39.9342C22.5717 39.9369 22.3142 39.8701 22.0871 39.7406C21.86 39.611 21.6715 39.4234 21.5408 39.1969C21.4102 38.9705 21.3421 38.7133 21.3436 38.4519V19.5491C21.3421 19.2877 21.4102 19.0305 21.5408 18.8041C21.6715 18.5776 21.86 18.3899 22.0871 18.2604C22.3142 18.1308 22.5717 18.064 22.8332 18.0668C23.0946 18.0696 23.3506 18.1419 23.5749 18.2763L39.2223 27.729C39.4404 27.8619 39.6207 28.0486 39.7458 28.2713C39.8709 28.494 39.9366 28.7451 39.9366 29.0005C39.9366 29.2559 39.8709 29.507 39.7458 29.7297C39.6207 299523 39.4404 30.1391 39.2223 30.272Z",
  });
  
  export const Blob = (props) => {
    return (
      <Icon
        width={"100%"}
        viewBox="0 0 578 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
          fill="currentColor"
        />
      </Icon>
    );
  };