import React from "react";
import Layout from "../components/shared/Layout";
import { Box } from "@mui/material";
import { TempPlayer } from "@wiley-flint/icons";
import { useStore } from "@nanostores/react";
import { playerStore, updateSpeed, changeMode } from "../store/player";

type Props = {};

const PlayerPage = (props: Props) => {
  const store = useStore(playerStore);

  const handleOnTheaterMode = (val: number) => {
    changeMode("theater");
    updateSpeed(val);
  };

  const handleSpeedChange = (val: number) => {
    // console.log("player -- handleSpeedChange", val);
    // updateSpeed(val);
  };

  console.log("player -- speedVal", store.speed);

  return (
    <Layout>
      <Box p={10}>
        <TempPlayer
          speed={store.speed}
          onTheaterMode={handleOnTheaterMode}
          onSpeedChange={handleSpeedChange}
        />
      </Box>
    </Layout>
  );
};

export default PlayerPage;
