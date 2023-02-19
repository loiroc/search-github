import React from 'react';

interface User {
  id?: number;
  login: string;
  name: string;
  location: string;
  email: string;
  public_repos: number;
}

interface Props {
  user: User;
  handleClose: () => void;
}

const UserDetails: React.FC<Props> = ({ user, handleClose }) => {
  return (
    <div>
      <button onClick={handleClose}>Close</button>
      <h2>{user.login}</h2>
      <p>Name: {user.name}</p>
      <p>Location: {user.location}</p>
      <p>Email: {user.email}</p>
      <p>Public Repos: {user.public_repos}</p>
    </div>
  );
};

export default UserDetails;
