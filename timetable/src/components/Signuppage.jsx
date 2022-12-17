import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    Image
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import TimeTable from "../images/TimeTable.jpg"
import {  useNavigate } from 'react-router-dom';
  
  export default function SignupCard() {
    const [Password, setPassword] = useState("");
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [load,setload] = useState(false)
    const navigate = useNavigate()
  const postdata= async ()=>{
    setload(true)
      try {
   

        let res = await fetch(`https://mockserver-fhbg.onrender.com/users`,{
      method: "POST",
      headers:{
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        Password
      })
    })
    let data = await res.json()
    console.log(data)
    setload(false)
    navigate("/loginpage")
   
      } catch (error) {
    setload(false)

        console.log(error)
      }
    
    setname("")
    setemail("")
    setPassword("")
  }


    return (
      <Flex
      
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={"white"}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Image
      width="40%"
      margin="auto"
      objectFit='cover'
      src={TimeTable}
      alt='Dan Abramov'
    />
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input style={{width:"340px"}} value={name} onChange={(e)=> setname(e.target.value)}  type="text" />
                  </FormControl>
                </Box>
                {/* <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box> */}
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input value={email} onChange={(e)=> setemail(e.target.value)} type="email" />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input value={Password} onChange={(e)=> setPassword(e.target.value)} type='password' />
                  {/* <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement> */}
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                {load?  <Button isLoading colorScheme='teal' variant='solid'>
                        Email
               </Button>:<Button
                onClick={postdata}
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign up
                </Button>}
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link onClick={()=>navigate("/loginpage")} color={'blue.400'}>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }