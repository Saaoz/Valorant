const Player = require("../Model/player");




// Endpoint pour créer un nouveau joueur
exports.createPlayer = async (req, res) => {
  try {
    const newPlayer = new Player(req.body);
    const savedPlayer = await newPlayer.save();
    res.status(201).json(savedPlayer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Endpoint pour récupérer tous les joueurs
exports.getAllPlayers = async (req, res) => {
  try {
    const players = await Player.find();
    res.json(players);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Endpoint pour récupérer un joueur spécifique
exports.getPlayerById = async (req, res) => {
  try {
    const player = await Player.findById(req.params.id);
    if (!player) {
      return res.status(404).json({ message: "Player not found" });
    }
    res.json(player);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Endpoint pour mettre à jour un joueur spécifique
exports.updatePlayerById = async (req, res) => {
  try {
    const updatedPlayer = await Player.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedPlayer) {
      return res.status(404).json({ message: "Player not found" });
    }
    res.json(updatedPlayer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Endpoint pour supprimer un joueur spécifique
exports.deletePlayerById = async (req, res) => {
  try {
    const deletedPlayer = await Player.findByIdAndDelete(req.params.id);
    if (!deletedPlayer) {
      return res.status(404).json({ message: "Player not found" });
    }
    res.json(deletedPlayer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};