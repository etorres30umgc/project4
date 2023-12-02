const mongoose = require("mongoose");

const ResourceSchema = new mongoose.Schema({
  name: {
    // TODO: string, required (provide a validation message), unique
    type: String,
    required: [true, 'Name Validated'],
    unique: true
  },
  provider: {
    // TODO: string, required (provide a validation message), unique
    type: String,
    required: [true, 'Provider Validated'],
    unique: true
  },
  url: {
    // TODO: string, required (provide a validation message), unique
    type: String,
    required: [true, 'URL Validated'],
    unique: true
  },
});

module.exports = mongoose.model("Resource", ResourceSchema);
