const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  uuid: {
    type: String,
    required: true,
    unique: true
  },
  displayName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  developerName: {
    type: String,
    required: true
  },
  characterTags: {
    type: [String]
  },
  displayIcon: {
    type: String,
    required: true
  },
  displayIconSmall: {
    type: String,
    required: true
  },
  bustPortrait: {
    type: String,
    required: true
  },
  fullPortrait: {
    type: String,
    required: true
  },
  fullPortraitV2: {
    type: String,
    required: true
  },
  killfeedPortrait: {
    type: String,
    required: true
  },
  background: {
    type: String,
    required: true
  },
  backgroundGradientColors: {
    type: [String],
    required: true
  },
  assetPath: {
    type: String,
    required: true
  },
  isFullPortraitRightFacing: {
    type: Boolean,
    required: true
  },
  isPlayableCharacter: {
    type: Boolean,
    required: true
  },
  isAvailableForTest: {
    type: Boolean,
    required: true
  },
  isBaseContent: {
    type: Boolean,
    required: true
  },
  role: {
    uuid: {
      type: String,
      required: true
    },
    displayName: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    displayIcon: {
      type: String,
      required: true
    },
    assetPath: {
      type: String,
      required: true
    }
  },
  abilities: {
    type: [{
      slot: {
        type: String,
        required: true
      },
      displayName: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      displayIcon: {
        type: String,
        required: true
      }
    }],
    required: true
  },
  voiceLine: {
    minDuration: {
      type: Number,
      required: true
    },
    maxDuration: {
      type: Number,
      required: true
    },
    // plus d'autres champs qui pourraient être ajoutés
  }
});

module.exports = mongoose.model('Character', characterSchema);