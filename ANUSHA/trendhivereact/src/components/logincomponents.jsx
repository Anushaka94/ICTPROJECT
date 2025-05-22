import React, { useState } from "react";
import { Container, TextField, Button, Typography, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios

const LoginMatchingSignup = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post("https://localhost:7260/api/Values/login", formData);

      if (response.status === 200) {
        const role = response.data.role;
        role === "User" ? navigate("/home") : navigate("/Admin");
      }
    } catch (err) {
      setError("Invalid username or password");
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "white",
      }}
    >
      <Card
        sx={{
          padding: 4,
          maxWidth: 400,
          width: "100%",
          borderRadius: 3,
          backgroundColor: "#6a1b9a",
          color: "white",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <form onSubmit={(e) => e.preventDefault()}>
          <TextField
            fullWidth
            name="username"
            label="Username"
            value={formData.username}
            onChange={handleChange}
            required
            margin="normal"
            sx={{ backgroundColor: "white", borderRadius: 1 }}
          />
          <TextField
            fullWidth
            name="password"
            label="Password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
            margin="normal"
            sx={{ backgroundColor: "white", borderRadius: 1 }}
          />
          {error && <Typography color="error">{error}</Typography>}
          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "white",
              color: "#6a1b9a",
              fontSize: "18px",
              borderRadius: 3,
              marginTop: 2,
            }}
            onClick={handleLogin}
          >
            Login
          </Button>
        </form>
      </Card>
    </Container>
  );
};

export default LoginMatchingSignup;
