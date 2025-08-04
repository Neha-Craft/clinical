const XLSX = require("xlsx");
const fs = require("fs");

const workbook = XLSX.readFile("20250710_Charge Types.xls");
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];

const jsonData = XLSX.utils.sheet_to_json(sheet);

fs.writeFileSync("charges.json", JSON.stringify(jsonData, null, 2));
console.log("charges.json created!");
