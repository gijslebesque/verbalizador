const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const verbSchema = new Schema({
  verb: { type: String, unique: true },
  translation: { type: String, required: true },
  tense: { type: String, required: true },
  yo: { type: String, required: true },
  tu: { type: String, required: true },
  el: { type: String, required: true },
  nosotros: { type: String, required: true },
  vosotros: { type: String, required: true },
  ellos: { type: String, required: true }
});

const Verb = mongoose.model("PastVerb", verbSchema);

module.exports = Verb;
