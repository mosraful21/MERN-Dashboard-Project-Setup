const express = require("express");
const customerController = require("../controllers/customerController");

const router = express.Router();

router.post("/", customerController.upload.single("photo"), customerController.createCustomer);
router.get("/", customerController.getAllCustomer);
router.delete("/:id", customerController.deleteCustomer);
router.get("/:id", customerController.getCustomerById);
router.put("/:id", customerController.updateCustomer);

module.exports = router;
