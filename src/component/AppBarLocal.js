import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

function AppBarLocal(props) {
  const navigate = useNavigate();
  const cookies = new Cookies();

  return (
    <AppBar
      position="static"
      style={{ direction: "rtl", backgroundColor: "#A0CE5E" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            דף הבית
          </Typography> */}
          <Divider orientation="vertical" color="white" />
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {props.linksNavBar.map((page) => (
              <Button
                key={page}
                sx={{
                  color: "white",
                  display: "block",
                  fontFamily: "monospace",
                }}
              >
                <Link className="link" to={page.link}>
                  {page.name}
                </Link>
              </Button>
            ))}
          </Box>
          {props.register && (
            <>
              {" "}
              <Typography
                variant="h6"
                noWrap
                component="a"
                // href="/"
                sx={{
                  ml: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                שלום-{props.userName}
              </Typography>
              {/* <Link to="/LoginHome"> */}
              <Button
                sx={{
                  borderRadius: 20,
                  marginTop: 2,
                  marginBottom: 4,
                  color: "black",
                  backgroundColor: "#FEFFFE",
                }}
                onClick={() => {
                  navigate("/");
                  props.setUserName("");
                  cookies.remove("user");
                }}
                variant="contained"
                type="submit"
                href="/"
              >
                התנתק
              </Button>
              {/* </Link> */}
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default AppBarLocal;
