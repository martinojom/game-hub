import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/Image-url";
import { Button, HStack, Image, List } from "@chakra-ui/react";
import GenreListSkeleton from "./GenreListSkeleton";
import GenreLink from "./GenreLink";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const Skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return null;
  if (isLoading)
    return Skeletons.map((skeleton) => <GenreListSkeleton key={skeleton} />);

  return (
    <List.Root>
      {data.map((genre) => (
        <List.Item listStyle="none" key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              onClick={() => console.log(genre)}
              variant="plain"
              fontSize="lg"
            >
              <GenreLink genre={genre.name} />
            </Button>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
