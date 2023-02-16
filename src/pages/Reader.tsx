import React, { useState } from "react";
import Layout from "../components/shared/Layout";
import { Box } from "@mui/material";
import { TempTheater } from "@wiley-flint/icons";

import { useStore } from "@nanostores/react";
import { changeMode, playerStore, updateSpeed } from "../store/player";

type Props = {};

const ReaderPage = (props: Props) => {
  const store = useStore(playerStore);

  const handleClose = (speed: number) => {
    updateSpeed(speed);
    changeMode("player");
  };
  return (
    <Layout>
      <Box p={10}>
        {store.mode === "theater" ? (
          <Box>
            <h1>reader content</h1>
            <TempTheater speed={store.speed} onClose={handleClose} />
          </Box>
        ) : (
          <iframe src="http://127.0.0.1:5173/player" width={500} height={200} />
        )}
      </Box>
    </Layout>
  );
};

export default ReaderPage;
