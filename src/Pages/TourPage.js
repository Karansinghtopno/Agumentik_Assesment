import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

const flags = [
  "https://images.unsplash.com/photo-1626836014893-37663794dca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=846&q=80",
  "https://images.unsplash.com/photo-1636626328641-e9d45ebcb57c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVrJTIwZmxhZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1632184078944-b8a9cd828a57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YnJhemlsJTIwZmxhZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1532375810709-75b1da00537c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80",
];

const TourPage = () => {
  return (
    <Container>
      <Typography variant="h3" mt={3} fontWeight={600}>
        OUR TOURS
      </Typography>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        mt={3}
        spacing={6}
        alignItems="center"
      >
        <Box flex={5}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
          consequatur sed voluptas quibusdam? Optio quia quisquam hic ea
          voluptatem? Cupiditate!
        </Box>
        <Box flex={2}>
          <button
            style={{
              fontSize: "25px",
              fontWeight: "600",
              padding: "5px 15px",
              borderStyle: "double",
              borderColor: "none",
              borderWidth: "8px",
            }}
          >
            View Tours
          </button>
        </Box>
      </Stack>
      <Stack
        mt={7}
        width="100%"
        direction={{ xs: "column", sm: "row" }}
        gap={3}
      >
        <Box
          style={{
            borderRadius:"15px",
            height: "300px",
            border: "2px solid white",
            width: "250px",
            backgroundImage: `url("${flags[0]}})`,
            filter: "grayscale(100)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            backgroundRepeat:"no-repeat"
          }}
        >
          <Typography variant="h2" fontWeight={800}>
            USA
          </Typography>
        </Box>

        <Box
          style={{
            borderRadius:"15px",
            height: "300px",
            border: "2px solid white",
            width: "250px",
            backgroundImage: `url("${flags[1]}})`,
            filter: "grayscale(100)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <Typography variant="h2" fontWeight={800}>
            UK
          </Typography>
        </Box>

        <Box
          style={{
            height: "300px",
            borderRadius:"15px",
            border: "2px solid white",
            width: "250px",
            backgroundImage: `url("${flags[2]}})`,
            filter: "grayscale(100)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <Typography variant="h2" fontWeight={800}>
            BRA
          </Typography>
        </Box>

        <Box
          style={{
            height: "300px",
            borderRadius:"15px",
            border: "2px solid white",
            width: "250px",
            backgroundImage: `url("${flags[3]}})`,
            filter: "grayscale(100)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <Typography variant="h2" fontWeight={800}>
            IND
          </Typography>
        </Box>
      </Stack>
    </Container>
  );
};

export default TourPage;
