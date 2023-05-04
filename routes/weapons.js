const express = require("express");
const router = express.Router();
const weaponsController = require("../controllers/weapons");

// Get all weapons
router.get("/", weaponsController.getAllWeapons);

// Create weapon
router.post("/", weaponsController.createWeapon);

// Update weapon
router.put("/:id", weaponsController.updateWeapon);

// Delete weapon
router.delete("/:id", weaponsController.deleteWeapon);

module.exports = router;