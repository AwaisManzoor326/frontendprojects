import React, { useState } from "react";
import { Container, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Login({ setIsAuthenticated }) {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username.trim() !== "") {
      localStorage.setItem("user", username);
      setIsAuthenticated(true);
      navigate("/home");
    }
  };

  return (
    <Container sx={{ mt: 5, textAlign: "center" }}>
      <TextField label="Enter Username" fullWidth value={username} onChange={(e) => setUsername(e.target.value)} />
      <Button variant="contained" sx={{ mt: 2 }} fullWidth onClick={handleLogin}>Login</Button>
    </Container>
  );
}

export default Login;