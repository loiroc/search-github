import React, { useState } from "react";
import axios from "axios";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";
import { Box, Button, Heading, Input, useToast } from "@chakra-ui/react";
import { User } from './types';

function App(): JSX.Element {
  const [query, setQuery] = useState<string>("");
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);

  const toast = useToast();

  const searchUsers = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.get<{ items: User[] }>(
        `https://api.github.com/search/users?q=${query}`
      );
      setUsers(response.data.items);
    } catch (error) {
      toast({
        title: `Não foi possível realizar a pesquisa.`,
        status: "error",
        isClosable: true,
      });
      setUsers([]);
    }
  };

  const selectUser = async (username: string) => {
    try {
      const response = await axios.get<User>(
        `https://api.github.com/users/${username}`
      );
      setSelectedUser(response.data);
      setIsModalOpened(true);
    } catch (error) {
      toast({
        id: "errorToast",
        title: `Não foi possível acessar o perfil deste usuário.`,
        status: "error",
        isClosable: true,
      });
      setSelectedUser(null);
      setIsModalOpened(false);
    }
  };

  const resetSearch = () => {
    setQuery("");
    setUsers([]);
    setSelectedUser(null);
  };

  return (
    <Box
      className="App"
      display={"flex"}
      flexDir={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Heading margin={"20px 0"} textAlign={"center"}>
        Pesquisa de Usuários do Github
      </Heading>
      <form
        onSubmit={searchUsers}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          margin: "10px 0px",
        }}
      >
        <Input
          type="text"
          placeholder="Digite o nome do usuário do Github"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          w={"100%"}
        />
        <Box display={"flex"} gap={5}>
          <Button type="submit" colorScheme={"green"}>
            Pesquisar
          </Button>

          <Button
            type="button"
            colorScheme={"red"}
            onClick={resetSearch}
            isDisabled={users.length <= 0}
          >
            Limpar Pesquisa
          </Button>
        </Box>
      </form>
      {selectedUser && (
        <UserDetails
          user={selectedUser}
          handleClose={() => {
            setIsModalOpened(false);
          }}
          isOpen={isModalOpened}
        />
      )}
      {users.length > 0 && (
        <UserList users={users} handleUserClick={selectUser} />
      )}
    </Box>
  );
}

export default App;
