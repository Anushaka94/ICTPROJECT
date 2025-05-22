import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const MatchingNavbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#1e3a5f", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, color: "white" }}>
            TRENDHIVE
          </Typography>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Button sx={{ fontSize: "18px", color: "white" }}>Login</Button>
          </Link>
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <Button sx={{ fontSize: "18px", color: "white" }}>Sign Up</Button>
          </Link>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <Button sx={{ fontSize: "18px", color: "white" }}>Home</Button>
          </Link>
          <Link to="/logout" style={{ textDecoration: "none" }}>
            <Button sx={{ fontSize: "18px", color: "white" }}>Logout</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MatchingNavbar;
