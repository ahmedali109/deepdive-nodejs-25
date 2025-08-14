const http = require('http');
const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;
const server = http.createServer(app);
const students = JSON.parse(fs.readFileSync("./data.json", "utf-8"));

const getAverageGrade = (grade) => grade.reduce((a, b) => a + b, 0) / grade.length;

app.get("/students", (_, res) => res.json(students));

app.get("/students/active", (_, res) => res.json(students.filter((student) => student.status === "active")));

app.get("/students/inactive", (_, res) => res.json(students.filter((student) => student.status === "inactive")));

app.get("/students/top", (_, res) => {
  const topStudent = students.reduce((top, student) => {
    return getAverageGrade(student.grades) > getAverageGrade(top.grades) ? student : top;
  }, students[0]);
  res.json(topStudent);
});

app.get("/students/fail", (_, res) => res.json(students.filter((student) => getAverageGrade(student.grades) < 60)));

server.listen(3000, () => console.log(`Server running on http://localhost:${PORT}`));
