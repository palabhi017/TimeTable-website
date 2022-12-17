import {useState,useContext} from "react"
import { useNavigate } from "react-router-dom";
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    Image,
    useColorModeValue,
  } from '@chakra-ui/react';
  import TimeTable from "../images/TimeTable.jpg"
import { AuthContext } from "./Authcontext";

  
  export default function SimpleCard() {
    const [email,setemail] = useState("")
    const [Password,setPassword] = useState("")
    const [load,setload] = useState(false)
    const navigate = useNavigate()
   const {settoken,login1} = useContext(AuthContext)
    const login= async ()=>{
      setload(true)

        try {
         
            let res = await fetch(`https://mockserver-fhbg.onrender.com/users`)
        let data = await res.json()
        console.log(data)
      let Auth = false
      for(let i in data){
        if(data[i].email === email && data[i].Password === Password){
                 Auth=true;
                 settoken(data[i].id)
                 break;
        }
      }
      setload(false)
      if(Auth==false){
      
        alert("Your email or password incorrect")
      }
      else{
        login1()
        navigate("/pricepage")
        // alert("you are loged in successfully")
      }
      console.log(Auth)
        } catch (error) {
          setload(false)

            console.log(error)
        }
       setemail("")
       setPassword("")
    }


    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Image
      width="40%"
      margin="auto"
      objectFit='cover'
      src={TimeTable}
      alt='Dan Abramov'
    />
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input value={email} onChange={(e)=>setemail(e.target.value)} type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input value={Password} onChange={(e)=>setPassword(e.target.value)} type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                {load?  <Button isLoading colorScheme='teal' variant='solid'>
                        Email
               </Button> : <Button
                onClick={login}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button>}
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }