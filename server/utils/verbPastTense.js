module.exports = async (verb, translation) => {
  const stem = verb.slice(0, verb.length - 2);
  const endVerb = verb.slice(-2);
  let firstPersonSingular;
  let mutated;

  let mutatedAccentAdditional;
  let additional = "";

  if (endVerb === "er" || endVerb === "ir") {
    mutated = "i";
    firstPersonSingular = "í";
    mutatedAccentAdditional = "ió";
    additional = "e";
  } else if (endVerb === "ar") {
    mutated = "a";
    firstPersonSingular = "é";
    mutatedAccentAdditional = "ó";
  } else return false;

  mutations = {
    verb,
    translation,
    tense: "past",
    yo: `${stem}${firstPersonSingular}`,
    tu: `${stem}${mutated}ste`,
    el: `${stem}${mutatedAccentAdditional}`,
    nosotros: `${stem}${mutated}mos`,
    vosotros: `${stem}${mutated}steis`,
    ellos: `${stem}${mutated}${additional}ron`
  };

  return mutations;
};

// console.log(verb("beber", "wonen"));
