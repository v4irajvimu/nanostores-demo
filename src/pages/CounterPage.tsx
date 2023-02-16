import React from "react";
import Layout from "../components/shared/Layout";
import { Grid, Button, Typography } from "@mui/material";
import { useStore } from "@nanostores/react";
import { count, increase, decrease } from "../store/persistentCount";
import Result from "../components/counter/Result";
// import { count, increase, decrease } from "../store/counter";

type Props = {};

const CounterPage = (props: Props) => {
  return (
    <Layout>
      <Grid container>
        <Result />
        <Grid item xs={6} sx={{ display: "flex", justifyContent: "center" }}>
          <Button variant="contained" color="primary" onClick={decrease}>
            -
          </Button>
        </Grid>
        <Grid item xs={6} sx={{ display: "flex", justifyContent: "center" }}>
          <Button variant="contained" color="primary" onClick={increase}>
            +
          </Button>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default CounterPage;
