import React, { useState } from "react";

export default function AddVerb({ addVerb }) {
  const [verb, setVerb] = useState("");
  const [translation, setTranslation] = useState("");

  return (
    <div className="row">
      <div className="col s12">
        <div className="row">
          <form onSubmit={e => addVerb(e, { verb, translation })}>
            <div className="input-field col s12">
              <input
                type="text"
                placeholder="El verbo"
                name="verb"
                value={verb}
                onChange={e => setVerb(e.target.value)}
                required
              />
            </div>
            <div className="input-field col s12">
              <input
                type="text"
                placeholder="El traduccion"
                name="translation"
                value={translation}
                onChange={e => setTranslation(e.target.value)}
                required
              />
            </div>
            <button className="btn" type="submit">
              Agregar un verbo
            </button>
          </form>
        </div>
      </div>
    </div>
    // <form onSubmit={e => addVerb(e, { verb, translation })}>
    //   <input
    //     type="text"
    //     placeholder="Werkwoord"
    //     name="verb"
    //     value={verb}
    //     onChange={e => setVerb(e.target.value)}
    //     required
    //   />
    //   <input
    //     type="text"
    //     name="translation"
    //     value={translation}
    //     onChange={e => setTranslation(e.target.value)}
    //     required
    //   />
    //   <button className="btn" type="submit">
    //     Agregar un verbo
    //   </button>
    // </form>
  );
}
