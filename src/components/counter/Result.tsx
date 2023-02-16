import { Grid, Typography } from "@mui/material";
import { useStore } from "@nanostores/react";
import { count } from "../../store/persistentCount";
// import { count, increase, decrease } from "../store/counter";

type Props = {};

const Result = (props: Props) => {
  const counterValue = useStore(count);
  return (
    <Grid item xs={12}>
      <Typography variant="h1" textAlign={"center"}>
        Count:{counterValue}
      </Typography>
    </Grid>
  );
};

export default Result;
