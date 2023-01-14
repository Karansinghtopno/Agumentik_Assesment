import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import CarouselComp from "../Components/CarouselComp";

const AboutPage = () => {
  return (
    <Container>
      <Typography variant="h4" textAlign="center" py={1}>
        Meet our members
      </Typography>
      <Typography textAlign="center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Molestiae porro vel nihil,
        aperiam esse asperiores labore distinctio aspernatur, quae omnis fuga
        recusandae quam neque a, facilis consequuntur eos obcaecati harum!
      </Typography>

      <Stack
        sx={{
          mt: 2,
          height: "450px",
          width: "100%",
          // border:"2px solid white"
        }}
      >
        <CarouselComp />
      </Stack>
    </Container>
  );
};

export default AboutPage;
