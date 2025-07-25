import type { Platform } from "@/hooks/useGames";
import usePlatforms from "@/hooks/usePlatforms";
import { Button, Menu, Portal } from "@chakra-ui/react";
// import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";

interface Props {
  onSelectedPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectedPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();
  // const [value, setValue] = useState("asc");

  if (error) return null;
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button marginBottom={3} bg="AppWorkspace" variant="plain">
          {selectedPlatform?.name || "Platforms"}
          <AiOutlineDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content minW="10rem">
            {data.map((platform) => (
              <Menu.Item
                key={platform.id}
                value={platform.name}
                onClick={() => onSelectedPlatform(platform)}
              >
                {platform.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>

      {/* <Portal>
        <Menu.Positioner>
          <Menu.Content minW="10rem">
            <Menu.RadioItemGroup
              value={value}
              onValueChange={(e) => setValue(e.value)}
            >
              {data.map((platform) => (
                <Menu.RadioItem key={platform.id} value={platform.name}>
                  {platform.name}
                  <Menu.ItemIndicator />
                </Menu.RadioItem>
              ))}
            </Menu.RadioItemGroup>
          </Menu.Content>
        </Menu.Positioner>
      </Portal> */}
    </Menu.Root>
  );
};

export default PlatformSelector;
