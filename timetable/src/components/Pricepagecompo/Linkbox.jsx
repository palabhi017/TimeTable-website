import { LinkBox,Heading,LinkOverlay, Divider } from "@chakra-ui/react"
import {ChevronDownIcon} from "@chakra-ui/icons"
export default function Linkbox(){

    return (
        <>
         <div  >
        <LinkBox   as='article' maxW='sm' p='5' borderWidth='1px' rounded='md'>
  
  <Heading  my='2'>
    <LinkOverlay _hover={{color:"#999"}} fontSize="30px"  color="#333" textDecoration="none" href='#'>
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