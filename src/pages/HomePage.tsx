import React from "react";
import Layout from "../components/shared/Layout";
import { Box, Typography } from "@mui/material";

const HomePage = () => {
  return (
    <Layout>
      <Box display="flex" alignItems="center" pt={5} flexDirection="column">
        <Typography gutterBottom variant="h3">
          Rebder renader http://127.0.0.1:5173/counter from Iframe
        </Typography>
        <iframe src="http://127.0.0.1:5173/counter" width={500} />
      </Box>
    </Layout>
  );
};

export default HomePage;
