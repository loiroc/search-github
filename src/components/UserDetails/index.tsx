import {
  Box,
  Button,
  Heading,
  Image,
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
  avatar_url?: string;
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
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      size={{ base: "sm", md: "lg" }}
      id={"modal"}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Informações do usuário</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box
            display={"flex"}
            flexDir={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            mb={10}
          >
            <Image
              src={user.avatar_url}
              alt={user.login}
              borderRadius={"50%"}
              h={200}
              w={200}
            />
            <Heading mt={5} id={"modal-user"}>
              {user.login}
            </Heading>
          </Box>
          <Text id={"modal-name"}>
            <b>Nome:</b> {user.name}
          </Text>
          <Text id={"modal-location"}>
            <b>Localização:</b> {user.location ? user.location : "Indisponível"}
          </Text>
          <Text id={"modal-email"}>
            <b>Email:</b> {user.email ? user.email : "Indisponível"}
          </Text>
          <Text id={"modal-repos"}>
            <b>Repositórios Públicos:</b> {user.public_repos}
          </Text>
        </ModalBody>

        <ModalFooter>
          <Button
            id={"modal-close"}
            colorScheme="blue"
            mr={3}
            onClick={handleClose}
          >
            Fechar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default UserDetails;
