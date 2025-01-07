const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const XLSX = require("xlsx");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).send("Backend server is working fine!");
});

const filePath = "./feedback_data.xlsx";

app.post("/submit", (req, res) => {
  const { name, phone, sendUpdates } = req.body;

  try {
    let workbook;
    let worksheet;

    // Check if the Excel file exists
    if (fs.existsSync(filePath)) {
      workbook = XLSX.readFile(filePath);
      worksheet = workbook.Sheets[workbook.SheetNames[0]];
    } else {
      workbook = XLSX.utils.book_new();
      worksheet = XLSX.utils.json_to_sheet([]);
      XLSX.utils.book_append_sheet(workbook, worksheet, "Feedback");
    }

    // Get existing data
    const existingData = XLSX.utils.sheet_to_json(worksheet);

    // Add the new data
    existingData.push({
      Name: name,
      Phone: phone,
      "Send Updates": sendUpdates,
    });

    // Update worksheet and save to file
    const updatedWorksheet = XLSX.utils.json_to_sheet(existingData);
    workbook.Sheets[workbook.SheetNames[0]] = updatedWorksheet;
    XLSX.writeFile(workbook, filePath);

    res.status(200).json({ message: "Data saved successfully!" });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ message: "Error saving data to Excel." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
