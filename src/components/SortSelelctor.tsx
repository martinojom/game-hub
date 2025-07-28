import { Button, Menu, Portal } from "@chakra-ui/react";
import { AiOutlineDown } from "react-icons/ai";

interface Props {
  onSelectOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const SortSelelctor = ({ onSelectOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relavance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release data" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button marginBottom={10} bg="AppWorkspace" variant="plain">
          Order by: {currentSortOrder?.label || "Relevance"}
          <AiOutlineDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {sortOrders.map((order) => (
              <Menu.Item
                onClick={() => onSelectOrder(order.value)}
                key={order.value}
                value={order.value}
              >
                {order.label}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelelctor;
