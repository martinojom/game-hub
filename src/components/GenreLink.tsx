import { Box, HoverCard, Link, Portal, Strong } from "@chakra-ui/react";
import { useState } from "react";

const GenreLink = ({ genre }: { genre: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <HoverCard.Root size="sm" open={open} onOpenChange={(e) => setOpen(e.open)}>
      <HoverCard.Trigger asChild>
        <Link>{genre}</Link>
      </HoverCard.Trigger>
      <Portal>
        <HoverCard.Positioner>
          <HoverCard.Content maxWidth="240px">
            <HoverCard.Arrow />
            <Box>
              Filter By <Strong>{genre}</Strong>
            </Box>
          </HoverCard.Content>
        </HoverCard.Positioner>
      </Portal>
    </HoverCard.Root>
  );
};

export default GenreLink;
