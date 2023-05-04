const express = require('express');
const router = express.Router();

const mapController = require('../controllers/maps');

// Create a new map
router.post('/', mapController.createMap);

// Get all maps
router.get('/', mapController.getAllMaps);

// Update a map
router.put('/:id', mapController.updateMap);

// Delete a map
router.delete('/:id', mapController.deleteMap);

module.exports = router;