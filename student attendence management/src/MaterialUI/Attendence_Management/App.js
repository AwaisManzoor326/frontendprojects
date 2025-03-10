// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { CssBaseline, Container, ThemeProvider, createTheme } from "@mui/material";
import Navbar from "./Components/Navbar";
import Login from "./Pages/Login";
import HomePage from "./Pages/Homepage";
import AttendancePage from "./Pages/AttendencePage";
import StudentList from "./Components/StudentList";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [students, setStudents] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsAuthenticated(true);
    }
    const savedStudents = JSON.parse(localStorage.getItem("students"));
    if (savedStudents) {
      setStudents(savedStudents);
    }
    const savedTheme = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} darkMode={darkMode} setDarkMode={setDarkMode} />
        <Container>
          <Routes>
            <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <Login setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/home" element={isAuthenticated ? <HomePage /> : <Navigate to="/" />} />
            <Route path="/attendance" element={isAuthenticated ? <AttendancePage students={students} setStudents={setStudents} /> : <Navigate to="/" />} />
            <Route path="/students" element={isAuthenticated ? <StudentList students={students} setStudents={setStudents} /> : <Navigate to="/" />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;