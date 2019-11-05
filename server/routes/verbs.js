var express = require("express");
var router = express.Router();
const PresentVerb = require("../models/PresentVerb");
const PastVerb = require("../models/PastVerb");
const presentTense = require("../utils/verbPresentTense");
const pastTense = require("../utils/verbPastTense");
/* GET home page. */

router.post("/", async (req, res) => {
  try {
    const { verb, translation } = req.body;
    const present = await presentTense(verb, translation);
    const past = await pastTense(verb, translation);

    if (!present || !past) {
      res.status(406).json({ message: "Onregelmatig werkwoord" });
      return;
    }
    const presentVerb = await PresentVerb.create(present);
    const pastVerb = await PastVerb.create(past);
    const verbs = [presentVerb, pastVerb];
    res.status(200).json(verbs);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const presentVerbs = await PresentVerb.find();
    const pastVerbs = await PastVerb.find();
    const verbs = presentVerbs.concat(pastVerbs);
    res.status(200).json(verbs);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
