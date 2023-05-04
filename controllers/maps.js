const Map = require('../Model/map');



// Create a new map
exports.createMap = async (req, res) => {
  try {
    const map = new Map(req.body);
    await map.save();
    res.status(201).json({ success: true, map });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// Get all maps
exports.getAllMaps = async (req, res) => {
  try {
    const maps = await Map.find();
    res.status(200).json({ success: true, maps });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// Update a map
exports.updateMap = async (req, res) => {
  try {
    const { id } = req.params;
    const map = await Map.findByIdAndUpdate(id, req.body, { new: true });
    if (!map) {
      return res.status(404).json({ success: false, message: 'Map not found' });
    }
    res.status(200).json({ success: true, map });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// Delete a map
exports.deleteMap = async (req, res) => {
  try {
    const { id } = req.params;
    const map = await Map.findByIdAndDelete(id);
    if (!map) {
      return res.status(404).json({ success: false, message: 'Map not found' });
    }
    res.status(200).json({ success: true, message: 'Map deleted successfully' });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};