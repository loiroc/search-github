import {
  Box,
  Card,
  CardBody,
  Divider,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";

interface User {
  id?: number;
  login: string;
  avatar_url: string;
  html_url: string;
}

interface Props {
  users: User[];
  handleUserClick: (user: string) => void;
}

const UserList: React.FC<Props> = ({ users, handleUserClick }) => {
  const formatLink = (link: string) => {
    let formatedLink = link.split("://")[1];
    return formatedLink;
  };

  return (
    <Grid
      id={"grid"}
      templateColumns={{
        base: "1fr",
        md: "repeat(3, 1fr)",
        lg: "repeat(5, 1fr)",
      }}
      templateRows={"auto"}
      gap={5}
      m={5}
    >
      {users.map((user) => (
        <GridItem
          as={Card}
          id={"grid-item"}
          maxW="sm"
          key={user.id}
          onClick={() => handleUserClick(user.login)}
          _hover={{ cursor: "pointer" }}
        >
          <CardBody
            display={"flex"}
            flexDir="column"
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Image
              src={user.avatar_url}
              alt={user.login}
              borderRadius="lg"
              w={"80%"}
              h={"80%"}
            />
            <Text mt={5} fontWeight={700}>
              {user.login}
            </Text>
            <Text fontStyle={"italic"}>{formatLink(user.html_url)}</Text>
          </CardBody>
          <Divider />
        </GridItem>
      ))}
    </Grid>
  );
};

export default UserList;
