// StudentList.jsx
import React, { useState } from "react";
import { Container, TextField, Button, List, ListItem, ListItemText, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";

function StudentList({ students, setStudents }) {
  const [name, setName] = useState("");

  const addStudent = () => {
    if (name.trim() !== "") {
      setStudents([...students, { name, present: false }]);
      setName("");
    }
  };

  const toggleAttendance = (index) => {
    const updatedStudents = students.map((student, i) =>
      i === index ? { ...student, present: !student.present } : student
    );
    setStudents(updatedStudents);
  };

  return (
    <Container sx={{ mt: 3 }}>
      <Paper sx={{ p: 3, boxShadow: 3, borderRadius: 2 }}>
        <Typography variant="h5" sx={{ textAlign: "center", mb: 2 }}>Manage Students</Typography>
        
        <TextField label="Student Name" fullWidth value={name} onChange={(e) => setName(e.target.value)} />
        <Button variant="contained" sx={{ mt: 2 }} fullWidth onClick={addStudent}>Add Student</Button>
        
        <List sx={{ mt: 2 }}>
          {students.map((student, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <ListItem sx={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #ddd" }}>
                <ListItemText primary={student.name} />
                <Button
                  variant="contained"
                  color={student.present ? "success" : "error"}
                  onClick={() => toggleAttendance(index)}
                >
                  {student.present ? "Present" : "Absent"}
                </Button>
              </ListItem>
            </motion.div>
          ))}
        </List>
      </Paper>
    </Container>
  );
}

export default StudentList;
