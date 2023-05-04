const router = require("express").Router();


const { deleteCharacterById, updateCharacterById, createNewCharacter, getCharacterById, getAllCharacters} = require("../controllers/characters")


// Get all characters
router.get("/", getAllCharacters);

// Get a specific character by id
router.get("/:charactersid", getCharacterById);

// Create a new character
router.post('/', createNewCharacter);

// Update a character by id
router.put("/:id", updateCharacterById);

// Delete a character by id
router.delete("/:id",deleteCharacterById);

module.exports = router;