import { HStack,Text,Button} from '@chakra-ui/react'
import {StarIcon,CheckIcon} from "@chakra-ui/icons"
import {
    List,
    ListItem,
    
    
  } from '@chakra-ui/react'

export default function Pricecards(){

    return (
       <div className='cards1'>
        <div>
            <h3>Free</h3>
            <p>For individuals or very small teams just getting started with Airtable</p>
            <HStack justifyContent="center">
              
              <Text textAlign="left" color="#333" fontSize="64px" fontWeight="600">
                Free
              </Text>
              
            </HStack>
            <Button
  size='md'
  height='48px'
  width='200px'
  border='2px'
  borderColor="#333333"
  borderStyle="solid"
  borderRadius="30px"
  fontSize="15px"
  fontWeight="bold"
  marginLeft="10%"
  backgroundColor="white"
>
  Sign up
</Button>
<div className='list1'>
<List  spacing={3}>
  <ListItem >
    <CheckIcon  color='green.500' />
    Unlimited bases
  </ListItem>
  <ListItem>
    <CheckIcon  color='green.500' />
    Up to 5 creators or editors
  </ListItem>
  <ListItem>
    <CheckIcon  color='green.500' />
    1 sync integration
  </ListItem>
  {/* You can also use custom icons from react-icons */}
  <ListItem>
  <CheckIcon  color='green.500' />
  2GB of attachments per base
  </ListItem>
</List>
</div>
        </div>
        <div style={{backgroundColor:"#ffeab6"}}>
            <h3>Plus</h3>
            <p>For teams looking to create connected apps to manage their own workflows</p>
            <HStack justifyContent="center">
              
              <Text fontSize="64px" color="#333" fontWeight="600">
                $10
              </Text>
              <Text fontSize="20px" color="#333">
                per seat/month
              </Text>
            </HStack>
            <Button
  size='md'
  height='48px'
  width='200px'
  border='2px'
  borderColor="#333333"
  borderStyle="solid"
  borderRadius="30px"
  fontSize="15px"
  fontWeight="bold"
  marginLeft="10%"
  backgroundColor="white"
>
  Try for free
</Button>
<div className='list1'>
<List  spacing={3}>
  <ListItem >
    <CheckIcon  color='green.500' />
    Unlimited bases
  </ListItem>
  <ListItem>
    <CheckIcon  color='green.500' />
    Up to 5 creators or editors
  </ListItem>
  <ListItem>
    <CheckIcon  color='green.500' />
    1 sync integration
  </ListItem>
  {/* You can also use custom icons from react-icons */}
  <ListItem>
  <CheckIcon  color='green.500' />
  2GB of attachments per base
  </ListItem>
</List>
</div>
        </div>
        <div style={{backgroundColor:"#d0f0fd"}}>
            <h3>Pro</h3>
            <p>For teams and departments who need to build connected apps to power their most important processes</p>
            <HStack justifyContent="center">
              <Text fontSize="64px" color="#333" fontWeight="600">
                $20
              </Text>
              <Text fontSize="20px" color="#333">
                per seat/month
              </Text>
            </HStack>
            <Button
  size='md'
  height='48px'
  width='200px'
  border='2px'
  borderColor="#2d7ff9"
  borderStyle="solid"
  borderRadius="30px"
  fontSize="15px"
  fontWeight="bold"
  marginLeft="10%"
  backgroundColor="#2d7ff9"
  color="white"
  
>
  Try for free
</Button>
<div className='list1'>
<List  spacing={3}>
  <ListItem >
    <CheckIcon  color='green.500' />
    Unlimited bases
  </ListItem>
  <ListItem>
    <CheckIcon  color='green.500' />
    Up to 5 creators or editors
  </ListItem>
  <ListItem>
    <CheckIcon  color='green.500' />
    1 sync integration
  </ListItem>
  {/* You can also use custom icons from react-icons */}
  <ListItem>
  <CheckIcon  color='green.500' />
  2GB of attachments per base
  </ListItem>
</List>
</div>
        </div>
        <div style={{backgroundColor:"#333"}} >
            <h3 style={{color:"#ffffff"}}>Enterprise</h3>
            <p style={{color:"#ffffff"}}>For departments and organizations who need a secure, scalable, and customizable connected apps platform to stay aligned and move work forward</p>
            <StarIcon boxSize="30px" color="#999"/>
            <StarIcon boxSize="30px" color="#999"/>
            <StarIcon boxSize="30px" color="#999"/>
            <Button
  size='md'
  height='48px'
  width='200px'
  border='2px'
  borderColor="#333333"
  borderStyle="solid"
  borderRadius="30px"
  fontSize="15px"
  fontWeight="bold"
  marginLeft="10%"
  backgroundColor="white"
  marginTop="180px"
>
  Try for free
</Button>
<div className='list1'>
<List color="white"  spacing={3}>
  <ListItem >
    <CheckIcon  color='green.500' />
    Unlimited bases
  </ListItem>
  <ListItem>
    <CheckIcon  color='green.500' />
    Up to 5 creators or editors
  </ListItem>
  <ListItem>
    <CheckIcon  color='green.500' />
    1 sync integration
  </ListItem>
  {/* You can also use custom icons from react-icons */}
  <ListItem >
  <CheckIcon  color='green.500' />
  2GB of attachments per base
  </ListItem>
</List>
</div>
        </div>
       </div>
    )
}