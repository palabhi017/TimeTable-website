import { Grid,Card,Box,Text,Button,HStack } from "@chakra-ui/react";
import { useState } from "react";
import Timer from "./Timer"

export default function Cards({workname,notes,assignee,status,id,date}){
const [stat,setstat ] =useState(false)
    return (
       
        <Card mt={"20px"} key={id} h="450px" w="350px">
        <Box h="auto" color="green" fontWeight={"bold"} w="50%" m={""} mt={"0px"}>{stat? "COMPLETED": "In progress..."}</Box>
            <Box pt={"10px"} fontSize={"20px"} alignItems="center" fontWeight="bold" color={"white"} h="15%" bgColor="#10b3ff">
             <Timer date={date}/>
            </Box>
            
            <Box borderLeft={"5px solid #e929ba"} m={"auto"} mt={"10px"} w="90%" h="70px" boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}>
            <Text fontWeight={"bold"} color={"#5500b2"}>WORK NAME</Text>
            <Text fontWeight={"600"} color="#333">{workname}</Text>
            </Box>
            <Box borderLeft={"5px solid #e08d00"} m={"auto"} mt={"10px"} w="90%" h="100px" boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}>
                <Text fontWeight={"bold"} color={"#5500b2"}>NOTES</Text>
                <Text  ml={"10px"} textAlign={"left"} fontWeight={"600"} color="#333">{notes}</Text>
            </Box>
            <Box borderLeft={"5px solid blue"} m={"auto"} mt={"10px"} w="90%" h="60px" boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}>
                <Text fontWeight={"bold"} color={"#5500b2"}>ASSIGNEE</Text>
                <Text fontWeight={"600"} color="#333">{assignee}</Text>
            </Box >
            
            <Button  mt={"5px"} onClick={()=>setstat(true)} margin={"auto"} style={{backgroundColor:"#10b3ff"}}>COMPLETE</Button>
            <Button onClick={(e)=>{
                e.target.parentNode.remove()
            }} mt={"5px"} style={{backgroundColor:"#10b3ff"}}>DELETE</Button>
          
            
        </Card>
       
    )
}