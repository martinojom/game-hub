import useGenres, { type Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/Image-url";
import { Button, HStack, Image, List } from "@chakra-ui/react";
import GenreListSkeleton from "./GenreListSkeleton";
import GenreLink from "./GenreLink";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
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
              onClick={() => onSelectGenre(genre)}
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
