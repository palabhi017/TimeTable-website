import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Text,
    Box,
  } from "@chakra-ui/react";
  import React from "react";
  import { ArrowForwardIcon } from "@chakra-ui/icons";
  
  export default function Sidebar({ isOpen, onClose, onOpen }) {
    // const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
  
    return (
      <>
        <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
          Open
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
          size="md"
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader></DrawerHeader>
  
            <DrawerBody>
              <Text fontSize={"20px"} fontWeight={"bold"}>
                Overview
              </Text>
              <Text lineHeight={"8"} color={"gray.500"}>
                Welcome to Airtable! Here's the basics
              </Text>
  
              <br />
  
              <Text fontSize={"20px"} fontWeight={"bold"}>
                Features
              </Text>
              <Text lineHeight={"8"} color={"gray.500"}>
                Discover automation, views, reporting, and more
              </Text>
  
              <br />
  
              <Text fontSize={"20px"} fontWeight={"bold"}>
                Intigrations
              </Text>
              <Text lineHeight={"8"} color={"gray.500"}>
                Bring your favorite tools into Airtable
              </Text>
  
              <br />
  
              <Text fontSize={"20px"} fontWeight={"bold"}>
                Enterprise Overview
              </Text>
              <Text lineHeight={"8"} color={"gray.500"}>
                See how Airtable scates for large and complex oraganizations
              </Text>
  
              <br />
  
              <Text fontSize={"20px"} fontWeight={"bold"}>
                Marketplace
              </Text>
  
              <br />
  
              <Text fontSize={"20px"} fontWeight={"bold"}>
                Dowload Apps
              </Text>
  
              <br />
  
              <Text fontSize={"20px"} fontWeight={"bold"}>
                What's new
              </Text>
            </DrawerBody>
  
            <Box p={"20px"} bg={"gray.200"} height={"200px"}>
              <Text lineHeight={"8"} fontSize={"20px"} fontWeight={"bold"}>
                Pricing
              </Text>
              <Text lineHeight={"8"} color={"gray.500"}>
                From small business to global enterprise , there's an Airtable
                plan that's just right for you.
              </Text>
  
              <Button
                rightIcon={<ArrowForwardIcon />}
                colorScheme="blue"
                variant="ghost"
                fontSize={"18px"}
                mt={"10px"}
              >
                Explore Pricing
              </Button>
            </Box>
  
            {/* <DrawerFooter></DrawerFooter> */}
          </DrawerContent>
        </Drawer>
      </>
    );
  }