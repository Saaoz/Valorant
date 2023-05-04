const express = require("express");
const router = express.Router();
const playerController = require("../controllers/players");

// Créer un joueur
router.post("/", playerController.createPlayer);

// Récupérer tous les joueurs
router.get("/", playerController.getAllPlayers);

// Récupérer un joueur spécifique
router.get("/:id", playerController.getPlayerById);

// Mettre à jour un joueur spécifique
router.put("/:id", playerController.updatePlayerById);

// Supprimer un joueur spécifique
router.delete("/:id", playerController.deletePlayerById);

module.exports = router;