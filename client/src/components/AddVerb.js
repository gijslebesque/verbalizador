import React, { useState } from "react";
import service from "../utils/service";
import { set } from "mongoose";

export default function AddVerb() {
  const [verb, setVerb] = useState("");
  const [translation, setTranslation] = useState("");

  return (
    <form action="">
      <input
        type="text"
        placeholder="Werkwoord"
        name="verb"
        value={verb}
        onChange={e => setVerb(e.target.value)}
        required
      />
      <input
        type="text"
        name="translation"
        value={translation}
        onChange={e => setTranslation(e.target.value)}
        required
      />
      <button>Voeg een werkwoord toe</button>
    </form>
  );
}
