const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const verbSchema = new Schema({
  verb: { type: String, unique: true },
  translation: String,
  yo: String,
  tu: String,
  el: String,
  nosotros: String,
  vosotros: String,
  ellos: String
});

const Verb = mongoose.model("Verb", verbSchema);

module.exports = Verb;
