import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Container, TextField, Button, Paper, Typography, Snackbar, Alert } from "@mui/material";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    id: 0,
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.name === "id" ? parseInt(e.target.value, 10) || 0 : e.target.value,
    });
    setErrorMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://localhost:7260/api/Values/register", formData);
      if (response.status === 200) {
        navigate("/login");
      }
    } catch (error) {
      console.error("Error registering:", error);
      setErrorMessage("Registration failed! Please try again.");
      setOpenSnackbar(true);
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: "20px", textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>Sign Up</Typography>
        <form onSubmit={handleSubmit}>
          <TextField label="ID" type="number" name="id" value={formData.id} onChange={handleChange} fullWidth margin="normal" required />
          <TextField label="Username" type="text" name="username" value={formData.username} onChange={handleChange} fullWidth margin="normal" required />
          <TextField label="Password" type="password" name="password" value={formData.password} onChange={handleChange} fullWidth margin="normal" required />
          <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: "15px" }}>Register</Button>
        </form>
      </Paper>
      <Snackbar open={openSnackbar} autoHideDuration={4000} onClose={() => setOpenSnackbar(false)}>
        <Alert severity="error">{errorMessage}</Alert>
      </Snackbar>
    </Container>
  );
};

export default Signup;
