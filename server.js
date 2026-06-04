const express = require('express');
const app = express();
const PORT = 3000;

// This is your fake data - departments and the roles available to each one
const departmentRoles = {
  "Finance": ["Finance Viewer", "Finance Editor", "Budget Approver"],
  "HR": ["HR Viewer", "HR Editor", "Recruitment Manager"],
  "IT": ["IT Support", "System Administrator", "Security Analyst"],
  "Operations": ["Operations Viewer", "Operations Editor", "Process Manager"]
};

// This is your API endpoint - ServiceNow will call this URL
app.get('/roles', (req, res) => {
  const department = req.query.department;

  if (!department) {
    return res.status(400).json({ error: "Please provide a department" });
  }

  const roles = departmentRoles[department];

  if (!roles) {
    return res.status(404).json({ error: "No roles found for that department" });
  }

  res.json({ department: department, roles: roles });
});

// This starts your server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});