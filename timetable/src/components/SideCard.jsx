import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Button,
  border,
  Input,
  Box,
} from "@chakra-ui/react";

const SideCard = () => {
  return (
    <div>
      <Card width={"100%"} bg={"#d0f0fd"} lineHeight={"20px"}>
        <CardHeader>
          <Heading size="xs"> Upgrade to Pro before your trial expires</Heading>
        </CardHeader>
        <CardBody mt={"-8"}>
          <Text fontSize={"11px"}>
            Keep the power you need to manage complex workflows, run reports,
            and more with tools like:
          </Text>
          <Text fontSize={"11px"}>✔️ Multiple extensions per base</Text>
          <Text fontSize={"11px"}>
            ✔️ More sync integrations to quickly bring in outside data
          </Text>
          <Text fontSize={"11px"}>
            ✔️ More record limits and attachment space
          </Text>
          <Text fontSize={"11px"}>✔️ Team permissions</Text>
        </CardBody>
        <CardFooter mt={"-8"} ml={"90px"}>
          <Button size="sm" color={"white"} bg="#6B46C1" fontSize={"14px"}>
            ✨ Upgrade now
          </Button>
        </CardFooter>
      </Card>

      <Input
        bg={"gray.100"}
        size={"md"}
        fontSize={"sm"}
        mt={"20px"}
        placeholder="🔍 Find a base or interface"
      />

      <Text fontSize={"sm"} m={"10px"}>
        <b>⊞ Interfaces</b>
      </Text>
      <Box overflow="scroll" fontSize="sm" lineHeight="30px" m="10px" height="300px">
        <Text color="gray.500">WORKSPACES</Text>
        <Text>
          📑 First Workspace{" "}
          <Button fontSize="xs" size="xs" bg="gray.100">
            ✨Trial
          </Button>
        </Text>
        <Text color="gray.600">➕ Add a workspace</Text>
        <Text color="gray.600">🛢️ Trash</Text>
        <br />
        <Text color="gray.500">▼ LEARNING AND RESOURCES</Text>
        <Text>🔼 Guide to Airtable</Text>
        <Text>✉️ Contact sales</Text>
        <Text>▶ Webinars</Text>
        <Text>❓ Help center</Text>
        <Text>⬆️ Importing</Text>
        <Text>🖼️ Understanding views</Text>
        <Text>🔗 Advanced linking</Text>
        <Text>🎁 What's new</Text>
      </Box>
    </div>
  );
};

export default SideCard;