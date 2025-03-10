// Navbar.jsx
import React from "react";
import { AppBar, Toolbar, Typography, Button, Switch } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar({ isAuthenticated, setIsAuthenticated, darkMode, setDarkMode }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("students");
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, cursor: "pointer" }} onClick={() => navigate("/")}>
            Attendance System
          </Typography>

          {isAuthenticated && (
            <>
              <Button color="inherit" onClick={() => navigate("/home")}>Home</Button>
              <Button color="inherit" onClick={() => navigate("/students")}>Students</Button>
              <Button color="inherit" onClick={() => navigate("/attendance")}>Attendance</Button>
              <Button color="inherit" onClick={handleLogout}>Logout</Button>
            </>
          )}

          <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
        </Toolbar>
      </AppBar>
    </motion.div>
  );
}

export default Navbar;