// AttendanceSummary.jsx
import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Paper, Typography, Container } from "@mui/material";

function AttendanceSummary({ students }) {
  const data = [
    { status: "Present", count: students.filter((s) => s.present).length },
    { status: "Absent", count: students.filter((s) => !s.present).length },
  ];

  return (
    <Container sx={{ mt: 3 }}>
      <Paper sx={{ p: 3, boxShadow: 3, borderRadius: 2, textAlign: "center" }}>
        <Typography variant="h5" sx={{ mb: 2 }}>Attendance Summary</Typography>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="status" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </Paper>
    </Container>
  );
}

export default AttendanceSummary;
