module.exports = async (verb, translation) => {
  if (!verb || !translation) return false;
  const endVerb = verb.slice(-2);
  let mutated;
  let mutatedAccent;
  let mutatedAccentAdditional = "ó";

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

  const stem = verb.slice(0, verb.length - 2);

  mutations = {
    verb,
    translation,
    tense: "present",
    yo: `${stem}o`,
    tu: `${stem}${mutated}s`,
    el: `${stem}${mutated}`,
    nosotros: `${stem}${mutated}mos`,
    vosotros: `${stem}${mutatedAccent}is`,
    ellos: `${stem}${mutated}n`
  };

  return mutations;
};
