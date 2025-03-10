// AttendancePage.jsx
import React from "react";
import { Container, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import AttendanceSummary from "../Components/AttendenceSummary";

function AttendancePage({ students }) {
  return (
    <Container sx={{ mt: 3 }}>
      <Paper sx={{ mt: 2, p: 3, boxShadow: 3, borderRadius: 2 }}>
        <Typography variant="h5" sx={{ mb: 2, textAlign: "center" }}>Attendance Record</Typography>
        <Table sx={{ border: "1px solid #ddd", borderRadius: "10px" }}>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell><strong>Status</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student, index) => (
              <TableRow key={index}>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.present ? "✅ Present" : "❌ Absent"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      {/* Attendance Chart */}
      <AttendanceSummary students={students} />
    </Container>
  );
}

export default AttendancePage;
