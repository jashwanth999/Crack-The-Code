import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import SolutionCard from "../Components/HomeComponents/SolutionCard";
import { StyleRoot } from "radium/lib";

export default function Home() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: "white", height: "auto" }}>
          <SolutionCard />
        </Box>
      </Container>
    </React.Fragment>
  );
}
