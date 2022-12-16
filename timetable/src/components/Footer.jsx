import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    Tag,
    useColorModeValue,
    Divider,
    Image,
    Center,
  } from "@chakra-ui/react";
  import { Link as RouterLink } from "react-router-dom";
  import { Popover, PopoverTrigger } from "@chakra-ui/react";
  import TimeTable from "../images/TimeTable.jpg"
  
  const Logo = (props) => {
    return (
      <svg
        height={32}
        viewBox="0 0 120 28"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M34.87 8.07H37.87V20.2H34.87V8.07ZM39.06 15.62C39.06 12.62 40.9 10.83 43.74 10.83C46.58 10.83 48.42 12.62 48.42 15.62C48.42 18.62 46.62 20.42 43.74 20.42C40.86 20.42 39.06 18.67 39.06 15.62ZM45.41 15.62C45.41 13.97 44.76 13 43.74 13C42.72 13 42.08 14 42.08 15.62C42.08 17.24 42.71 18.22 43.74 18.22C44.77 18.22 45.41 17.3 45.41 15.63V15.62ZM49.55 20.79H52.43C52.5671 21.0945 52.7988 21.3466 53.0907 21.5088C53.3826 21.6709 53.7191 21.7345 54.05 21.69C55.19 21.69 55.79 21.07 55.79 20.17V18.49H55.73C55.491 19.0049 55.1031 19.4363 54.6165 19.7287C54.1299 20.021 53.5668 20.1608 53 20.13C50.81 20.13 49.36 18.46 49.36 15.59C49.36 12.72 50.74 10.91 53.04 10.91C53.6246 10.8871 54.2022 11.0434 54.6955 11.3579C55.1888 11.6725 55.5742 12.1303 55.8 12.67V12.67V11H58.8V20.1C58.8 22.29 56.87 23.65 54.02 23.65C51.37 23.65 49.72 22.46 49.55 20.8V20.79ZM55.8 15.61C55.8 14.15 55.13 13.23 54.07 13.23C53.01 13.23 52.36 14.14 52.36 15.61C52.36 17.08 53 17.91 54.07 17.91C55.14 17.91 55.8 17.1 55.8 15.62V15.61ZM59.93 15.61C59.93 12.61 61.77 10.82 64.61 10.82C67.45 10.82 69.3 12.61 69.3 15.61C69.3 18.61 67.5 20.41 64.61 20.41C61.72 20.41 59.93 18.67 59.93 15.62V15.61ZM66.28 15.61C66.28 13.96 65.63 12.99 64.61 12.99C63.59 12.99 63 14 63 15.63C63 17.26 63.63 18.23 64.65 18.23C65.67 18.23 66.28 17.3 66.28 15.63V15.61ZM70.44 8.82C70.4321 8.51711 70.5144 8.2187 70.6763 7.96261C70.8383 7.70651 71.0726 7.50427 71.3496 7.38151C71.6266 7.25875 71.9338 7.221 72.2323 7.27305C72.5308 7.32511 72.8071 7.46462 73.0262 7.67389C73.2454 7.88317 73.3974 8.1528 73.4631 8.44859C73.5288 8.74438 73.5052 9.05301 73.3952 9.33536C73.2853 9.61772 73.094 9.86108 72.8456 10.0346C72.5973 10.2081 72.3029 10.304 72 10.31C71.7992 10.3238 71.5977 10.2959 71.4082 10.2281C71.2186 10.1603 71.0452 10.0541 70.8987 9.91601C70.7522 9.77796 70.6358 9.61111 70.5569 9.42594C70.4779 9.24077 70.4381 9.04128 70.44 8.84V8.82ZM70.44 11.02H73.44V20.2H70.44V11.02ZM84.33 15.61C84.33 18.61 83 20.32 80.72 20.32C80.1354 20.3575 79.5533 20.2146 79.0525 19.9106C78.5517 19.6065 78.1564 19.156 77.92 18.62H77.86V23.14H74.86V11H77.86V12.64H77.92C78.1454 12.0951 78.5332 11.6329 79.0306 11.3162C79.528 10.9995 80.1109 10.8437 80.7 10.87C83 10.91 84.37 12.63 84.37 15.63L84.33 15.61ZM81.33 15.61C81.33 14.15 80.66 13.22 79.61 13.22C78.56 13.22 77.89 14.16 77.88 15.61C77.87 17.06 78.56 17.99 79.61 17.99C80.66 17.99 81.33 17.08 81.33 15.63V15.61ZM89.48 10.81C91.97 10.81 93.48 11.99 93.55 13.88H90.82C90.82 13.23 90.28 12.82 89.45 12.82C88.62 12.82 88.25 13.14 88.25 13.61C88.25 14.08 88.58 14.23 89.25 14.37L91.17 14.76C93 15.15 93.78 15.89 93.78 17.28C93.78 19.18 92.05 20.4 89.5 20.4C86.95 20.4 85.28 19.18 85.15 17.31H88.04C88.13 17.99 88.67 18.39 89.55 18.39C90.43 18.39 90.83 18.1 90.83 17.62C90.83 17.14 90.55 17.04 89.83 16.89L88.1 16.52C86.31 16.15 85.37 15.2 85.37 13.8C85.39 12 87 10.83 89.48 10.83V10.81ZM103.79 20.18H100.9V18.47H100.84C100.681 19.0441 100.331 19.5466 99.8468 19.8941C99.3629 20.2415 98.7748 20.413 98.18 20.38C97.7242 20.4059 97.2682 20.3337 96.8427 20.1682C96.4172 20.0027 96.0322 19.7479 95.7137 19.4208C95.3952 19.0938 95.1505 18.7021 94.9964 18.2724C94.8422 17.8427 94.7821 17.3849 94.82 16.93V11H97.82V16.24C97.82 17.33 98.38 17.91 99.31 17.91C99.5281 17.9104 99.7437 17.8643 99.9425 17.7746C100.141 17.6849 100.319 17.5537 100.463 17.3899C100.606 17.226 100.714 17.0333 100.777 16.8247C100.84 16.616 100.859 16.3962 100.83 16.18V11H103.83L103.79 20.18ZM105.24 11H108.14V12.77H108.2C108.359 12.2035 108.702 11.7057 109.174 11.3547C109.646 11.0037 110.222 10.8191 110.81 10.83C111.409 10.7821 112.003 10.9612 112.476 11.3318C112.948 11.7024 113.264 12.2372 113.36 12.83H113.42C113.601 12.2309 113.977 11.7093 114.488 11.3472C114.998 10.9851 115.615 10.8031 116.24 10.83C116.648 10.8163 117.054 10.8886 117.432 11.0422C117.811 11.1957 118.152 11.4272 118.435 11.7214C118.718 12.0157 118.936 12.3662 119.075 12.7501C119.213 13.134 119.27 13.5429 119.24 13.95V20.2H116.24V14.75C116.24 13.75 115.79 13.29 114.95 13.29C114.763 13.2884 114.577 13.327 114.406 13.4032C114.235 13.4794 114.082 13.5914 113.958 13.7317C113.834 13.872 113.741 14.0372 113.686 14.2163C113.631 14.3955 113.616 14.5843 113.64 14.77V20.2H110.79V14.71C110.79 13.79 110.34 13.29 109.52 13.29C109.331 13.2901 109.143 13.3303 108.971 13.408C108.798 13.4858 108.643 13.5993 108.518 13.741C108.392 13.8827 108.298 14.0495 108.241 14.2304C108.185 14.4112 108.167 14.6019 108.19 14.79V20.2H105.19L105.24 11Z"
          fill="currentColor"
        />
        <path
          d="M26.48 8.62001C25.9711 7.45637 25.2975 6.37195 24.48 5.40001C23.2714 3.92035 21.7632 2.71341 20.0546 1.85862C18.346 1.00383 16.4758 0.520582 14.567 0.440674C12.6582 0.360766 10.7541 0.68601 8.98 1.395C7.20594 2.104 5.60214 3.18067 4.27417 4.55414C2.94619 5.92762 1.92414 7.56676 1.27529 9.36369C0.626436 11.1606 0.365493 13.0746 0.509634 14.9796C0.653775 16.8847 1.19973 18.7376 2.11157 20.4164C3.02341 22.0953 4.28046 23.562 5.79998 24.72C6.77498 25.4779 7.85233 26.094 8.99998 26.55C10.609 27.2094 12.3311 27.549 14.07 27.55C17.6594 27.5421 21.0992 26.1113 23.6354 23.5713C26.1717 21.0314 27.5973 17.5894 27.6 14C27.6026 12.1485 27.2213 10.3166 26.48 8.62001V8.62001ZM14.06 3.19001C15.6215 3.18984 17.1642 3.53115 18.58 4.19001V4.19001C18.2347 4.33918 17.8718 4.44337 17.5 4.50001C16.2766 4.67711 15.1432 5.24509 14.2691 6.11918C13.3951 6.99328 12.8271 8.12661 12.65 9.35001C12.5722 10.0361 12.2602 10.6744 11.7665 11.1572C11.2728 11.64 10.6277 11.9377 9.93998 12C8.71657 12.1771 7.58324 12.7451 6.70915 13.6192C5.83505 14.4933 5.26707 15.6266 5.08998 16.85C5.03002 17.5024 4.75167 18.1155 4.29998 18.59V18.59C3.52063 16.9433 3.17053 15.1261 3.28225 13.3077C3.39397 11.4893 3.96388 9.72871 4.93895 8.18976C5.91401 6.65081 7.26255 5.38353 8.85905 4.50586C10.4555 3.62819 12.2481 3.16865 14.07 3.17001L14.06 3.19001ZM5.78998 21C5.90998 20.89 6.02998 20.79 6.14998 20.67C7.03963 19.8075 7.61069 18.6689 7.76998 17.44C7.83456 16.7493 8.14298 16.1041 8.63998 15.62C9.11822 15.1222 9.76195 14.8163 10.45 14.76C11.6734 14.5829 12.8067 14.0149 13.6808 13.1408C14.5549 12.2667 15.1229 11.1334 15.3 9.91001C15.3432 9.18752 15.6533 8.50685 16.17 8.00001C16.66 7.51186 17.3099 7.21711 18 7.17001C19.1239 7.01537 20.1721 6.51573 21 5.74001C21.9426 6.52208 22.7413 7.46291 23.36 8.52001C23.322 8.57136 23.2784 8.61832 23.23 8.66001C22.7526 9.16221 22.1098 9.47477 21.42 9.54001C20.1953 9.71401 19.0603 10.281 18.1856 11.1557C17.311 12.0303 16.744 13.1654 16.57 14.39C16.4995 15.0784 16.1932 15.7213 15.7029 16.2098C15.2127 16.6982 14.5687 17.0021 13.88 17.07C12.653 17.2458 11.5154 17.8126 10.6363 18.6863C9.75713 19.5601 9.18328 20.6941 8.99998 21.92C8.94616 22.4087 8.77832 22.878 8.50998 23.29C7.48397 22.6808 6.56506 21.9072 5.78998 21V21ZM14.06 24.86C13.0452 24.8611 12.0354 24.7197 11.06 24.44C11.3936 23.818 11.6106 23.1402 11.7 22.44C11.7701 21.7531 12.0749 21.1114 12.5632 20.6232C13.0514 20.135 13.6931 19.8301 14.38 19.76C15.6052 19.5849 16.7408 19.0178 17.6168 18.1435C18.4929 17.2693 19.0624 16.1349 19.24 14.91C19.3101 14.2231 19.6149 13.5814 20.1032 13.0932C20.5914 12.605 21.2331 12.3001 21.92 12.23C22.842 12.1101 23.7208 11.7668 24.48 11.23C24.9015 12.8279 24.9515 14.5012 24.626 16.1214C24.3004 17.7416 23.6081 19.2657 22.6021 20.5768C21.5961 21.8879 20.3031 22.9511 18.8224 23.6849C17.3417 24.4187 15.7125 24.8036 14.06 24.81V24.86Z"
          fill="#2F855A"
        />
      </svg>
    );
  };
  
  const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
        {children}
      </Text>
    );
  };
  
  export default function Footer() {
    return (
      <>
        <Box
          bg={useColorModeValue("white", "gray.900")}
          px={4}
          height={"80px"}
          width={"100%"}
        >
          <Flex
            alignItems="center"
            h={20}
            justifyContent={"space-between"}
            width={"(90%"}
            mt={"10px"}
            border={"1px solid red"}
          >
            <Flex>
              <Box mr={"5px"} ml="40px">
                <img
                  src={TimeTable}
                  alt="xyz"
                  width="150px"
                  ml=""
                />
              </Box>
  
              <Box ml={"25px"} mt={"10px"}>
                <Popover>
                  <PopoverTrigger>
                    <Link p={2} fontSize={"16px"} fontWeight="bold" mr={"5"}>
                      Products
                    </Link>
                  </PopoverTrigger>
                  <PopoverTrigger>
                    <Link p={2} fontSize={"16px"} fontWeight="bold" mr={"5"}>
                      Solutions
                    </Link>
                  </PopoverTrigger>
  
                  <Link p={2} fontSize={"16px"} fontWeight="bold" mr={"5"}>
                    Pricing
                  </Link>
  
                  <PopoverTrigger>
                    <Link p={2} fontSize={"16px"} fontWeight="bold" mr={"5"}>
                      Enterprise
                    </Link>
                  </PopoverTrigger>
                  <PopoverTrigger>
                    <Link p={2} fontSize={"16px"} fontWeight="bold" mr={"5"}>
                      Contact Sales
                    </Link>
                  </PopoverTrigger>
                </Popover>
              </Box>
            </Flex>
  
            <Flex width={"300px"} mr={"30px"} justifyContent={"space-around"}>
              <RouterLink>
                <Image
                  width={"30px"}
                  src="data:image/png;base64,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"
                />
              </RouterLink>
  
              <RouterLink>
                <Image
                  width={"30px"}
                  src="data:image/png;base64,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"
                />
              </RouterLink>
  
              <RouterLink>
                <Image
                  width={"30px"}
                  src="data:image/png;base64,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"
                />
              </RouterLink>
  
              <RouterLink>
                <Image
                  width={"30px"}
                  src="data:image/png;base64,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"
                />
              </RouterLink>
  
              <RouterLink>
                <Image
                  width={"30px"}
                  src="https://icones.pro/wp-content/uploads/2021/02/youtube-logo-icone-grise.png"
                />
              </RouterLink>
            </Flex>
          </Flex>
        </Box>
  
        <Center height="2px" bg="gray.200" width={"95%"} margin="auto">
          <Divider orientation="vertical" />
        </Center>
  
        <Box
          bg={useColorModeValue("gray.50", "gray.900")}
          color={useColorModeValue("gray.700", "gray.200")}
        >
          <Container as={Stack} maxW={""} py={10}>
            <SimpleGrid
              width={"90%"}
              margin="auto"
              columns={{ base: 1, sm: 3, md: 5 }}
              spacing={8}
            >
              <Stack align={"flex-start"}>
                <ListHeader>Popular Templates</ListHeader>
                <Link href={"#"}>Content Calender</Link>
                <Stack direction={"row"} align={"center"} spacing={2}>
                  <Link href={"#"}>Product Roadmap</Link>
                </Stack>
                <Link href={"#"}>Inventory Tracking</Link>
                <Link href={"#"}>Marketing Campaign Tracking</Link>
                <Link href={"#"}>Event Planning</Link>
                <Link href={"#"}>
                  <b>Show more</b>
                </Link>
              </Stack>
              <Stack align={"flex-start"}>
                <ListHeader>Popular Extensions</ListHeader>
                <Link href={"#"}>Miro</Link>
                <Link href={"#"}>Jira</Link>
                <Link href={"#"}>Clearbit</Link>
                <Link href={"#"}>Loom</Link>
                <Link href={"#"}>FormStack</Link>
                <Link href={"#"}>
                  <b>Show more</b>
                </Link>
              </Stack>
              <Stack align={"flex-start"}>
                <ListHeader>Popular Solutions</ListHeader>
                <Link href={"#"}>Marketing</Link>
                <Link href={"#"}>Product Operations</Link>
                <Link href={"#"}>Human Resources</Link>
                <Link href={"#"}>Sales</Link>
                <Link href={"#"}>Operations</Link>
                <Link href={"#"}>
                  <b>Show more</b>
                </Link>
              </Stack>
              <Stack align={"flex-start"}>
                <ListHeader>Learn More</ListHeader>
                <Stack direction={"row"} align={"center"} spacing={2}>
                  <Link href={"#"}>Webinars</Link>
                  <Tag
                    size={"sm"}
                    bg={useColorModeValue("blue.100")}
                    ml={2}
                    color={"blue"}
                  >
                    POPULAR
                  </Tag>
                </Stack>
                <Stack direction={"row"} align={"center"} spacing={2}>
                  <Link href={"#"}>Demos</Link>
                  <Tag
                    size={"sm"}
                    bg={useColorModeValue("green.200")}
                    ml={2}
                    color={"green"}
                  >
                    NEW
                  </Tag>
                </Stack>
                <Link href={"#"}>Guides</Link>
                <Link href={"#"}>Articles</Link>
                <Link href={"#"}>Community</Link>
                <Link href={"#"}>
                  <b>Show more</b>
                </Link>
              </Stack>
              <Stack align={"flex-start"}>
                <ListHeader>Company</ListHeader>
                <Link href={"#"}>About</Link>
                <Stack direction={"row"} align={"center"} spacing={2}>
                  <Link href={"#"}>Careers</Link>
                  <Tag
                    size={"sm"}
                    bg={useColorModeValue("blue.100")}
                    ml={2}
                    color={"blue"}
                  >
                    POPULAR
                  </Tag>
                </Stack>
                <Link href={"#"}>Blog</Link>
                <Link href={"#"}>Status</Link>
                <Link href={"#"}>Newsroom</Link>
                <Link href={"#"}>
                  <b>Show more</b>
                </Link>
              </Stack>
            </SimpleGrid>
          </Container>
        </Box>
  
        <Box height={"70px"} bg={"gray.200"}>
          <Flex justifyContent={"space-between"} alignItems="stretch">
            <Box
              display={"flex"}
              justifyContent="space-around"
              width={"40%"}
              mt={"20px"}
              color={"gray"}
              fontWeight={"bold"}
            >
              <Text>Security</Text>
              <Text>API</Text>
              <Text>Sitemap</Text>
              <Text>Privacy</Text>
              <Text>Terms</Text>
            </Box>
            <Flex
              width={"20%"}
              height={"30px"}
              justifyContent={"space-evenly"}
              mt={"17px"}
              ml={"200px"}
            >
              <Image src="data:image/png;base64,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" />
              <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" />
            </Flex>
          </Flex>
        </Box>
      </>
    );
  }