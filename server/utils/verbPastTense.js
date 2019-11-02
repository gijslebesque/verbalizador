module.exports = (verb, translation) => {
  const stem = verb.slice(0, verb.length - 2);
  const endVerb = verb.slice(-2);
  let mutated;
  let mutatedAccent;
  let mutatedAccentAdditional = "ó";
  if (endVerb === "er" || endVerb === "ir") {
    mutated = "i";
    mutatedAccent = "í";
  } else if (endVerb === "ar") {
    mutated = "e";
    mutatedAccent = "é";
  } else return false;

  mutations = {
    verb,
    translation,
    tense: "past",
    yo: `${stem}${mutatedAccent}`,
    tu: `${stem}${mutated}s`,
    el: `${stem}${mutated}`,
    nosotros: `${stem}${mutated}mos`,
    vosotros: `${stem}${mutatedAccent}is`,
    ellos: `${stem}${mutated}n`
  };

  return mutations;
};
