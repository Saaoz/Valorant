const Weapon = require("../Model/weapon");


// Create weapon
exports.createWeapon = async (req, res) => {
  try {
    const weapon = new Weapon(req.body);
    await weapon.save();
    res.status(201).json(weapon);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all weapons
exports.getAllWeapons = async (req, res) => {
  try {
    const weapons = await Weapon.find();
    res.json(weapons);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update weapon
exports.updateWeapon = async (req, res) => {
  try {
    const weapon = await Weapon.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!weapon) {
      return res.status(404).json({ message: "Weapon not found" });
    }
    res.json(weapon);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete weapon
exports.deleteWeapon = async (req, res) => {
  try {
    const weapon = await Weapon.findByIdAndDelete(req.params.id);
    if (!weapon) {
      return res.status(404).json({ message: "Weapon not found" });
    }
    res.json({ message: "Weapon deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};