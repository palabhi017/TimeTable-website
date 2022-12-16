import { LinkBox,Heading,LinkOverlay, Divider } from "@chakra-ui/react"
import {ChevronDownIcon} from "@chakra-ui/icons"
import PriceTable from "./PriceTable"
export default function Linkbox(){

    return (
        <>
         <div style={{width:"50%",margin:"auto"}} >
        <LinkBox   as='article' maxW='xl' p='5'  rounded='md'>
  
  <Heading  my='2'>
    <LinkOverlay _hover={{color:"#999"}} fontSize="30px"  color="#333" textDecoration="none" href={<PriceTable/>}>
      see all features and compare plans
    </LinkOverlay>
    <Divider />
    <ChevronDownIcon/>
  </Heading>
  
</LinkBox>
        </div>
        </>
    )
}