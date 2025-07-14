import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import "./App.css";

function App() {
  const showSidebar = useBreakpointValue({ base: false, lg: true });
  return (
    <Grid
      templateAreas={{
        base: `"nav main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area={"nav"} bg="coral">
        Nav
      </GridItem>
      {showSidebar && (
        <GridItem area={"aside"} bg="gold">
          Aside
        </GridItem>
      )}

      <GridItem area={"main"} bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
