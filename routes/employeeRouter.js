const express = require("express");
const {
  getAllEmployees,
  getEmployeeById,
} = require("../controllers/employeeController");

const router = express.Router();

router.route("/getAllEmployee").get(getAllEmployees);
router.route("/getEmployeeById/:empId").get(getEmployeeById);

module.exports = router;
