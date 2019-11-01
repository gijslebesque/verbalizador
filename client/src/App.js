import React, { useState, useEffect } from "react";
import { Service } from "./utils/service";
import "./App.css";
import AddVerb from "./components/AddVerb";
const service = new Service();
function App() {
  const [verbs, setVerbs] = useState([]);
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
    setVerbs(verbs.concat(data));
  };
  const showVerbs = () => {};

  return (
    <div className="App">
      <h1>Verblizador</h1>
      <div className="container">
        <AddVerb addVerb={addVerb} />
        <div className="row">
          <div className="col s12">
            <ul className="tabs">
              <li
                onClick={() => setTab(1)}
                className={`tab col s6 ${tab === 1 ? "active" : ""}`}
              >
                <a>Presente de indicativo</a>
              </li>
              <li
                onClick={() => setTab(2)}
                className={`tab col s6 ${tab === 2 ? "active" : ""}`}
              >
                <a>Test 2</a>
              </li>
            </ul>
          </div>
          <div id="test1" className="col s12">
            {tab === 1 && (
              <table className="highlight">
                <tr>
                  <th>El verbo</th>
                  <th>traduccion</th>
                  <th>Yo</th>
                  <th>Tú</th>
                  <th>Él / Ella </th>
                  <th>Nosotros </th>
                  <th>Vosotros</th>
                  <th>Ellos / Ellas / Ustedes</th>
                </tr>
                {verbs.map(v => {
                  const {
                    verb,
                    translation,
                    yo,
                    tu,
                    el,
                    nosotros,
                    vosotros,
                    ellos
                  } = v;
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
                })}
              </table>
            )}
          </div>
          <div id="test2" className="col s12">
            {tab === 2 && <p>Hi</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
