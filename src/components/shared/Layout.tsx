import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  const navigate = useNavigate();
  return (
    <Box sx={{ m: 0, p: 0 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Nanostores Demo
          </Typography>

          <Button color="inherit" onClick={() => navigate("/")}>
            Home
          </Button>
          <Button color="inherit" onClick={() => navigate("/counter")}>
            Counter
          </Button>
          <Button color="inherit" onClick={() => navigate("/player")}>
            Player
          </Button>
          <Button color="inherit" onClick={() => navigate("/reader")}>
            Reader
          </Button>
        </Toolbar>
      </AppBar>
      {children}
    </Box>
  );
};

export default Layout;
