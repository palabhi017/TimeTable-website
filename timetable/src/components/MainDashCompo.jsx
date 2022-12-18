import { Button } from "@chakra-ui/button";
import { Container, Flex, Grid, Heading, Text } from "@chakra-ui/layout";
import {
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Link,
  Image,
} from "@chakra-ui/react";
import { Select } from "@chakra-ui/select";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./Authcontext";
import { useContext,useState,useEffect } from "react";
import Cards from "./Cards"
const MainDashCompo = () => {
  const navigate = useNavigate()

  const {token} = useContext(AuthContext)
  const [maindata,setmaindata] =useState([])
  useEffect(()=>{
      getuserdata()
  },[])
  
      const getuserdata= async () =>{
          try {
              let res = await fetch(`https://mockserver-fhbg.onrender.com/users/${token}`)
          let data = await res.json()
          console.log(data.todos)
         setmaindata(data.todos)
          } catch (error) {
              console.log(error)
          }
          
      }
  return (
    <div style={{ width: "100%" }}>
      <Container
        rounded={"lg"}
        bg={"gray.100"}
        maxW="-moz-fit-content"
        height={"50px"}
      >
        <Text align="" fontSize={"12px"} color="blue" p={"15px"}>
          ⭐ Invite your friends and coworkers to earn account credit!
        </Text>
      </Container>

      <Flex mt={"40px"}>
        <Heading fontSize="3xl" fontFamily="GT Eesti Display">
          My First Workspace
        </Heading>
        <Select ml={"20px"} width={"45px"}>
          <option value="settings">Workspace settings</option>
          <option value="share">Share workspace</option>
          <option value="rename">Rename workspace</option>
          <option value="delete">Delete workspace</option>
        </Select>
        <Button color={"gray.600"} mt={"10px"} ml={"15px"} size={"xs"}>
          ✨ Pro trial
        </Button>
        <Text mt={"12px"} ml={"15px"} fontSize={"12px"}>
          <b>11 days left</b>
        </Text>
        <Button onClick={()=>navigate("/")} ml={"300px"}>Logout</Button>
      </Flex>

      <SimpleGrid
        mt={"50px"}
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(230px, 1fr))"
        position={"sticky"}
        top="2"
        zIndex={"1"}
      >
        <Link onClick={()=> navigate("/todopage")}>
          <Card zIndex="1"  h="60px" border={"1px solid RGBA(0, 0, 0, 0.24)"}>
            <Flex p={"10px"} justifyContent={"space-around"}>
              <Image
                  w={"12%"}
                  
                  src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-squares-01/3/03-512.png"
                
                />
              <Text fontSize={"20px"} textAlign={"center"}>
                <b>Start from scratch</b>
              </Text>
              {/* <Text textAlign={"center"} mt={"20px"} mb={"-25px"}>
                Create a new blank base with custom tables, fields, and views.
              </Text> */}
            
            </Flex>
            
          </Card>
        </Link>
        
        <RouterLink>
          <Card  h="60px" border={"1px solid RGBA(0, 0, 0, 0.24)"}>
            <Flex p={"10px"} justifyContent={"space-around"}>
              <Image
                  w={"12%"}
                  
                  src="https://cdn2.iconfinder.com/data/icons/interface-elements/32/previous-square-512.png"
                
                />
              <Text fontSize={"20px"} textAlign={"center"}>
                <b>Quickly upload</b>
              </Text>
              {/* <Text textAlign={"center"} mt={"20px"} mb={"-25px"}>
                Create a new blank base with custom tables, fields, and views.
              </Text> */}
            
            </Flex>
            
          </Card>
        </RouterLink>
        
        <RouterLink>
          <Card  h="60px" border={"1px solid RGBA(0, 0, 0, 0.24)"}>
            <Flex p={"10px"} justifyContent={"space-around"}>
              <Image
                  w={"12%"}
                  
                  src="https://www.bluleadz.com/hs-fs/hubfs/Square%20Logos/MicrosoftLogo3.png?width=225&name=MicrosoftLogo3.png"
                
                />
              <Text fontSize={"20px"} textAlign={"center"}>
              <b>Start with templates</b>
              </Text>
              {/* <Text textAlign={"center"} mt={"20px"} mb={"-25px"}>
                Create a new blank base with custom tables, fields, and views.
              </Text> */}
            
            </Flex>
            
          </Card>
        </RouterLink>

        
      </SimpleGrid>
     <Grid mt={"50px"} justifyContent="space-around"  templateColumns='repeat(2, 1fr)' gap={5}>
      {maindata.map((e)=> <Cards {...e} />)}
     </Grid>
      
    </div>
  );
};

export default MainDashCompo;