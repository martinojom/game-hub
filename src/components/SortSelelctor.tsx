import { Button, Menu, Portal } from "@chakra-ui/react";
import { AiOutlineDown } from "react-icons/ai";

const SortSelelctor = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button marginBottom={10} bg="AppWorkspace" variant="plain">
          Order by: Relavance
          <AiOutlineDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="Relavance">Relavance</Menu.Item>
            <Menu.Item value="Date added">Date added</Menu.Item>
            <Menu.Item value="Name">Name</Menu.Item>
            <Menu.Item value="Release date">Release date</Menu.Item>
            <Menu.Item value="Popularity">Popularity</Menu.Item>
            <Menu.Item value="Average rating">Average rating</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelelctor;
