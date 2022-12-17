import {
    Box,
    Flex,
    Link,
    Button,
    useDisclosure,
    useColorModeValue,
    useColorMode,
    Heading,
  } from "@chakra-ui/react";
  import { ArrowForwardIcon,ChevronRightIcon } from "@chakra-ui/icons";
  import { Link as RouterLink } from "react-router-dom";
  import Sidebar from "./Sidebar";
  import TimeTable from "../images/TimeTable.jpg"
  import { Popover, PopoverTrigger, PopoverContent } from "@chakra-ui/react";
  import { useNavigate } from "react-router-dom";
  // const NavLink = ({ children }) => (
  //   <Link
  //     px={2}
  //     py={1}
  //     rounded={"md"}
  //     _hover={{
  //       textDecoration: "none",
  //       bg: useColorModeValue("gray.200", "gray.700"),
  //     }}
  //     href={"#"}
  //   >
  //     {children}
  //   </Link>
  // );
  
  export default function Navbar({pos,top}) {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate = useNavigate()
    return (
      <>
        <Box
          width={"100%"}
          height={"50px"}
          bg={"#f0f6ff"}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <p>
            See how new Airtable features can improve your work in our latest
            webinar
            <Button
              rightIcon={<ArrowForwardIcon />}
              colorScheme="blue"
              variant="ghost"
              fontSize={"14px"}
            >
              View webinar
            </Button>
          </p>
        </Box>
        <Box
          bg={useColorModeValue("white", "gray.900")}
          // px={4}
          height={"80px"}
          width={"100%"}
          position={pos}
          top={top}
          zIndex="1"
        >
          <Flex
            alignItems="center"
            h={20}
            justifyContent={"space-between"}
            width={"100%"}
            // mt={"10px"}
            // border={"1px solid red"}
          px={4}

          >
            <Flex>
              <Box w="18%" >
                <Link onClick={()=> navigate("/")}>
                <img
                  width="100%"
                  src={TimeTable}
                  alt="xyz"
                  
                />
                </Link>
                
              </Box>
              {/* <Heading ml={"10px"} mt={"9px"} fontSize={"20px"}>
                My Airtable App
              </Heading> */}
              <Box ml={"25px"} mt={"10px"}>
                <Popover>
                  <PopoverTrigger>
                    <Link
                      p={2}
                      fontSize={"16px"}
                      fontWeight="600"
                      // mr={"5"}
                      onClick={onOpen}
                      color="#181d26"
                      textDecoration={"none"}
                      _hover={{color:"blue"}}
                    >
                      Products <ChevronRightIcon/>
                    </Link>
                  </PopoverTrigger>
                  <PopoverTrigger>
                    <Link
                      p={2}
                      fontSize={"16px"}
                      fontWeight="600"
                      // mr={"5"}
                      onClick={onOpen}
                      textDecoration={"none"}
                      _hover={{color:"blue"}}
                    >
                      Solutions <ChevronRightIcon/>
                    </Link>
                  </PopoverTrigger>
  
                  <Link p={2} fontSize={"16px"} fontWeight="bold"  textDecoration={"none"}
                      _hover={{color:"blue"}} onClick={()=> navigate("/pricepage")} >
                    Pricing
                  </Link>
  
                  <PopoverTrigger>
                    <Link
                      p={2}
                      fontSize={"16px"}
                      fontWeight="600"
                      // mr={"5"}
                      onClick={onOpen}
                      textDecoration={"none"}
                      _hover={{color:"blue"}}
                    >
                      Enterprise <ChevronRightIcon/>
                    </Link>
                  </PopoverTrigger>
                  <PopoverTrigger>
                    <Link
                      p={2}
                      fontSize={"16px"}
                      fontWeight="600"
                      // mr={"5"}
                      onClick={onOpen}
                      textDecoration={"none"}
                      _hover={{color:"blue"}}
                    >
                      Resourses <ChevronRightIcon/>
                    </Link>
                  </PopoverTrigger>
  
                  <PopoverContent>
                    <Sidebar isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
                  </PopoverContent>
                </Popover>
              </Box>
            </Flex>
  
            <Flex width={"400px"} justifyContent={"space-around"}>
              <RouterLink>
                <Button colorScheme="blue" color="black" variant="outline">
                  Contact sales
                </Button>
              </RouterLink>
  
              <Link textDecoration={"none"} _hover={{bg:"wihie" ,color:"blue"}}>
                <Button colorScheme="blue" onClick={()=>navigate("/signuppage")} variant="solid">
                  Sign up for free
                </Button>
              </Link>
  
              <Link onClick={()=>navigate("/loginpage")}>
                <Button colorScheme="blue" color="black" variant="ghost">
                  Sign in
                </Button>
              </Link>
            </Flex>
          </Flex>
        </Box>
      </>
    );
  }