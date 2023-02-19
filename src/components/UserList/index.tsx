import React from 'react';

interface User {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
}

interface Props {
  users: User[];
  handleUserClick: (user: User) => void;
}

const UserList: React.FC<Props> = ({ users, handleUserClick }) => {
  return (
    <div>
      <h2>Search Results:</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <a href="#" onClick={() => handleUserClick(user)}>
              <img src={user.avatar_url} alt={user.login} />
              <div>
                <h3>{user.login}</h3>
                <p>{user.html_url}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
