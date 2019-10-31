var express = require("express");
var router = express.Router();
const Verb = require("../models/Verbs");

/* GET home page. */

router.post("/", async (req, res) => {
  try {
    const { verb, translation } = req.body;
    const mutations = await mutateVerb(verb, translation);
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

function mutateVerb(verb, translation) {
  const base = verb.slice(0, verb.length - 2);
  const endVerb = verb.slice(-2);
  let mutated;
  let mutatedAccent;
  if (endVerb === "er") {
    mutated = "e";
    mutatedAccent = "é";
  } else if (endVerb === "ar") {
    mutated = "a";
    mutatedAccent = "á";
  } else if (endVerb === "ir") {
    mutated = "i";
    mutatedAccent = "í";
  } else return false;

  mutations = {
    verb,
    translation,
    yo: `${base}o`,
    tu: `${base}${mutated}s`,
    el: `${base}${mutated}`,
    nosotros: `${base}${mutated}mos`,
    vosotros: `${base}${mutatedAccent}is`,
    ellos: `${base}${mutated}n`
  };

  return mutations;
}

mutateVerb("trabajar", "werken");

module.exports = router;
