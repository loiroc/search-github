import React, { useState } from "react";
import axios from "axios";
import UserList from "../UserList";
import UserDetails from "../UserDetails";

interface User {
  login: string;
  avatar_url: string;
  html_url: string;
}

interface UserDetails {
  name: string;
  login: string;
  location: string;
  email: string;
  public_repos: number;
}

function App(): JSX.Element {
  const [query, setQuery] = useState<string>("");
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<UserDetails | null>(null);
  const [error, setError] = useState<string | null>(null);

  const searchUsers = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.get<{ items: User[] }>(
        `https://api.github.com/search/users?q=${query}`
      );
      setUsers(response.data.items);
      setError(null);
    } catch (error) {
      setError("Não foi possível realizar a pesquisa.");
      setUsers([]);
    }
  };

  const selectUser = async (username: string) => {
    try {
      const response = await axios.get<UserDetails>(
        `https://api.github.com/users/${username}`
      );
      setSelectedUser(response.data);
      setError(null);
    } catch (error) {
      setError("Não foi possível encontrar informações deste usuário.");
      setSelectedUser(null);
    }
  };

  const resetSearch = () => {
    setQuery("");
    setUsers([]);
    setSelectedUser(null);
    setError(null);
  };

  return (
    <div className="App">
      <h1>Pesquisa de Usuários do Github</h1>
      <form onSubmit={searchUsers}>
        <input
          type="text"
          placeholder="Digite o nome do usuário do Github"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Pesquisar</button>
        {users.length > 0 && (
          <button type="button" onClick={resetSearch}>
            Limpar Pesquisa
          </button>
        )}
      </form>
      {error && <></>}
      {selectedUser && <UserDetails user={selectedUser} handleClose={resetSearch} />}
      {users.length > 0 && !selectedUser && (
         <UserList users={users} handleUserClick={selectUser} />
      )}
    </div>
  );
}

export default App;
