interface User {
    id: number;
    login: string;
    avatar_url: string;
    html_url: string;
    name: string;
    location: string;
    email: string;
    public_repos: number;
  }
  
interface UserDetailsProps {
  user: User;
  handleClose: () => void;
  isOpen: boolean;
}

interface UserListProps {
  users: User[];
  handleUserClick: (user: string) => void;
}


export {User, UserListProps, UserDetailsProps}