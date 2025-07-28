import { HStack, Switch } from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch.Root checked={colorMode === "dark"} onChange={toggleColorMode}>
        <Switch.HiddenInput />
        <Switch.Control bg={colorMode === "light" ? "blue.400" : "pink.400"} />
        <Switch.Label whiteSpace="nowrap">Dark Mode</Switch.Label>
      </Switch.Root>
    </HStack>
  );
};

export default ColorModeSwitch;
