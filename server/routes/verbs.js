var express = require("express");
var router = express.Router();
const Verb = require("../models/Verbs");
const presentTense = require("../utils/verbPresentTense");

/* GET home page. */

router.post("/", async (req, res) => {
  try {
    const { verb, translation } = req.body;
    const mutations = await presentTense(verb, translation);
    if (!mutations) {
      res.status(406).json({ message: "Onregelmatig werkwoord" });
      return;
    }
    const newVerb = await Verb.create(mutations);
    res.status(200).json(newVerb);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const verbs = await Verb.find();
    res.status(200).json(verbs);
  } catch (err) {
    res.status(500).json(err);
  }
});

mutateVerb("trabajar", "werken");

module.exports = router;
