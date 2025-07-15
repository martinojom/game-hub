import { HStack, Skeleton, SkeletonCircle, Stack } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <HStack paddingY={1} gap="5">
      <SkeletonCircle size="12" />
      <Stack flex="1">
        <Skeleton height="5" />
      </Stack>
    </HStack>
  );
};

export default GenreListSkeleton;
