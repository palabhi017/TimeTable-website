import { HStack,Box,Flex,Text,Button,Input,Select } from "@chakra-ui/react"
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
 import React from "react"
import {RepeatClockIcon,QuestionOutlineIcon,CopyIcon,BellIcon,ChevronDownIcon,SmallAddIcon} from "@chakra-ui/icons"
import { useState,useContext } from "react"
import { useDisclosure } from '@chakra-ui/react'
import { AuthContext } from "./Authcontext";
import { useEffect } from "react";
import Sideimg from "../images/Sideimg.jpeg"

export default function Todotable(){
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = React.useState('right')
  const [workname,setworkname] = useState("")
  const [notes,setnotes] = useState("")
  const [assignee,setassignee] = useState("")
  const [status,setstatus] = useState(false)
  
  const [date,setdate] =useState("")
  const {token} = useContext(AuthContext)

const [todoarr,settodoarr]= useState([])

useEffect(()=>{
  getuserdata()
},[])
const getuserdata= async () =>{
  try {
      let res = await fetch(`https://mockserver-fhbg.onrender.com/users/${token}`)
  let data = await res.json()
  console.log(data)
  settodoarr(data.todos)
  } catch (error) {
      console.log(error)
  }
  
}


  const postdata= async ()=>{
    
      try {
   

        let res = await fetch(`https://mockserver-fhbg.onrender.com/users/${token}`,{
      method: "PATCH",
      headers:{
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        todos : [...todoarr,{workname,notes,assignee,status,date}]
      })
    })
    let data = await res.json()
    console.log(data)
    getuserdata()
    
   
      } catch (error) {
    

        console.log(error)
      }
    
   
  }



    return (
        <>
    <Flex bgColor={"#e08d00"} justifyContent={"space-between"} padding="15px"> 
        <HStack gap={"20px"}>
        <Box ml={"30px"}>
          <Text color={"white"} fontSize={"20px"}>Untitled Base</Text>
        </Box>
        <HStack>
            <Button _hover={{bgColor:"#bf7800"}}  bgColor={"#bf7800"} color={"white"}>Data</Button>
            <Button _hover={{bgColor:"#bf7800"}}  bgColor={"#e08d00"} color={"white"}>Animation</Button>
            <Button _hover={{bgColor:"#bf7800"}}  bgColor={"#e08d00"} color={"white"}>Interface</Button>
        </HStack>
        </HStack>
        <HStack width={"25%"} gap="10px">
        <Button _hover={{bgColor:"#bf7800"}} bgColor={"#e08d00"}><RepeatClockIcon color={"white"}/></Button>
        <Button _hover={{bgColor:"#bf7800"}} bgColor={"#e08d00"} color={"white"}> <QuestionOutlineIcon color={"white"}/>{"  "}Help</Button>
        <Button bgColor={"#white"} color="#e08d00" ><CopyIcon/>Share</Button>
        <Button bgColor={"#white"} color="#e08d00" ><BellIcon boxSize={"20px"}/></Button>
        <Button bgColor={"#e929ba"} color="white" fontSize={"23px"}>A</Button>
        </HStack>
    </Flex>
    <HStack height={"30px"} bgColor={"#bf7800"}>
        <Box textAlign={"center"} borderRadius={"5px 5px 0px 0px"} h={"100%"} ml={"20px"} width={"7%"} bgColor={"white"}>Table</Box>
        <ChevronDownIcon boxSize={"20px"} color={"white"}/>
    </HStack>
    <div class="slide-in">
  <img src={Sideimg} alt="Your image description" />
    </div>
    <HStack  h="40px"  gap={"30px"}>
        <Box ml={"40px"}>Views</Box>
        <Box>Grid view</Box>
        <Box>Hide fields</Box>
        <Box>Filter</Box>
        <Box>Group</Box>
        <Box>Sort</Box>
        <Box>Color</Box>
        <Box>Share View</Box>
        
    </HStack>
   

 <TableContainer style={{padding: 20, margin: 0,ml:"20px"}}>
  <Table style={{borderCollapse: "collapse", width: "60%",ml:"20px"}}>
    <Thead>
      <Tr style={{padding: 0, margin: 0}}>
        <Th style={{textAlign: "center", padding: 0, margin: 0,width:"10px"}}>No.</Th>
        <Th style={{textAlign: "center", padding: 0, margin: 0}}>Name</Th>
        <Th style={{padding: 0, margin: 0}}>Notes</Th> 
        <Th style={{padding: 0, margin: 0}}>Assignee</Th>
        <Th style={{padding: 0, margin: 0}}>Deadline</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr style={{columnGap: "none", padding: 0, margin: 0}}>
      <Td style={{padding: 0, margin: 0}}>1</Td>

        <Td style={{padding: 0, margin: 0}}><Input onChange={(e)=>setworkname(e.target.value)} style={{borderRadius: 0, width: "100%", padding: 0, margin: 0}}></Input></Td>
        <Td style={{padding: 0, margin: 0}}><Input onChange={(e)=>setnotes(e.target.value)} style={{borderRadius: 0, padding: 0, margin: 0}}></Input></Td>
        <Td style={{padding: 0, margin: 0}}><Input onChange={(e)=>setassignee(e.target.value)} style={{borderRadius: 0, padding: 0, margin: 0}}></Input></Td>
        <Td style={{padding: 0, margin: 0}}><Input type={"date"} onChange={(e)=>setdate(e.target.value)}/></Td>
      </Tr>
      <Tr style={{columnGap: "none", padding: 0, margin: 0}}>
      <Td style={{padding: 0, margin: 0,w:"10px"}}>2</Td>

        <Td style={{padding: 0, margin: 0}}><Input style={{borderRadius: 0, width: "100%", padding: 0, margin: 0}}></Input></Td>
        <Td style={{padding: 0, margin: 0}}><Input style={{borderRadius: 0, padding: 0, margin: 0}}></Input></Td>
        <Td style={{padding: 0, margin: 0}}><Input style={{borderRadius: 0, padding: 0, margin: 0}}></Input></Td>
        <Td style={{padding: 0, margin: 0}}><Input type={"date"} onChange={(e)=>setdate(e.target.value)}/></Td>
      </Tr>
      <Tr style={{columnGap: "none", padding: 0, margin: 0}}>
      <Td style={{padding: 0, margin: 0,w:"10px"}}>3</Td>
        <Td style={{padding: 0, margin: 0}}><Input style={{borderRadius: 0, width: "100%", padding: 0, margin: 0}}></Input></Td>
        <Td style={{padding: 0, margin: 0}}><Input style={{borderRadius: 0, padding: 0, margin: 0}}></Input></Td>
        <Td style={{padding: 0, margin: 0}}><Input style={{borderRadius: 0, padding: 0, margin: 0}}></Input></Td>
        <Td style={{padding: 0, margin: 0}}><Input type={"date"} onChange={(e)=>setdate(e.target.value)}/></Td>
      </Tr>
      <Tr style={{columnGap: "none", padding: 0, margin: 0}}>
        <Td style={{padding: 0, margin: 0,w:"10px"}}>4</Td>
        <Td style={{padding: 0, margin: 0}}><Input style={{borderRadius: 0, width: "100%", padding: 0, margin: 0}}></Input></Td>
        <Td style={{padding: 0, margin: 0}}><Input style={{borderRadius: 0, padding: 0, margin: 0}}></Input></Td>
        <Td style={{padding: 0, margin: 0}}><Input style={{borderRadius: 0, padding: 0, margin: 0}}></Input></Td>
        <Td style={{padding: 0, margin: 0}}><Input type={"date"} onChange={(e)=>setdate(e.target.value)}/></Td>
      </Tr>
      
      
      </Tbody>
      </Table>
      </TableContainer>

    <Button onClick={postdata} left={"40px"} p={"10px 30px"} borderRadius={"30px"} position={"fixed"} top="550px"><SmallAddIcon/>Add..</Button>
    </>
    )
}