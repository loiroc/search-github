import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React from "react";

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
  isOpen: boolean;
}

const UserDetails: React.FC<Props> = ({ user, handleClose, isOpen }) => {
  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Informações do usuário</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>Usuário: {user.login}</Text>
          <Text>Nome: {user.name}</Text>
          <Text>Localização: {user.location ? user.location : 'Indisponível'}</Text>
          <Text>Email: {user.email ? user.email : 'Indisponível'}</Text>
          <Text>Repositórios Públicos: {user.public_repos}</Text>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleClose}>
            Fechar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default UserDetails;
