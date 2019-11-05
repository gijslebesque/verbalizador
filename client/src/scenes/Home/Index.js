import React, { useState, useEffect } from "react";
import AddVerb from "../../components/AddVerb";
import { Service } from "../../utils/service";
import { Link, Route } from "react-router-dom";
const service = new Service();

export default function Index(props) {
  const [verbs, setVerbs] = useState([]);
  const [tense, setTense] = useState("present");
  const [tab, setTab] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await service.getVerbs();
      setVerbs(data);
    };
    fetchData();
  }, []);

  const addVerb = async (e, payload) => {
    e.preventDefault();
    const { data } = await service.addVerb(payload);
    debugger;
    setVerbs(verbs.concat(data));
  };
  const showVerbs = () => {
    return verbs
      .filter(verb => verb.tense === tense)
      .map(v => {
        const { verb, translation, yo, tu, el, nosotros, vosotros, ellos } = v;
        return (
          <tr>
            <td>{verb}</td>
            <td>{translation}</td>
            <td>{yo}</td>
            <td>{tu}</td>
            <td>{el}</td>
            <td>{nosotros}</td>
            <td>{vosotros}</td>
            <td>{ellos}</td>
          </tr>
        );
      });
  };

  return (
    <div>
      <div className="container">
        <AddVerb addVerb={addVerb} />
        <div className="row">
          <div className="col s12">
            <ul className="tabs">
              <li
                onClick={() => setTab(1)}
                className={`tab col s6 ${tab === 1 ? "active" : ""}`}
              >
                <Link onClick={() => setTense("present")} to="present">
                  El Presente
                </Link>
              </li>
              <li
                onClick={() => setTab(2)}
                className={`tab col s6 ${tab === 2 ? "active" : ""}`}
              >
                <Link onClick={() => setTense("past")} to="past">
                  El Pretérito
                </Link>
              </li>
            </ul>
          </div>
          <div className="col s12">
            {tab === 1 && (
              <table className="highlight">
                <tr>
                  <th>El verbo</th>
                  <th>Traduccion</th>
                  <th>Yo</th>
                  <th>Tú</th>
                  <th>Él / Ella </th>
                  <th>Nosotros </th>
                  <th>Vosotros</th>
                  <th>Ellos / Ellas / Ustedes</th>
                </tr>
                {showVerbs()}
              </table>
            )}
          </div>
          <div className="col s12">
            {tab === 2 && (
              <table className="highlight">
                <tr>
                  <th>El verbo</th>
                  <th>Traduccion</th>
                  <th>Yo</th>
                  <th>Tú</th>
                  <th>Él / Ella </th>
                  <th>Nosotros </th>
                  <th>Vosotros</th>
                  <th>Ellos / Ellas / Ustedes</th>
                </tr>
                {showVerbs()}
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
