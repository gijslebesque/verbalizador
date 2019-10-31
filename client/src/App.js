import React, { useState, useEffect } from "react";
import { Service } from "./utils/service";
import "./App.css";
const service = new Service();

function App() {
  const [verbs, setVerbs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await service.getVerbs();
      setVerbs(data);
    };
    fetchData();
  }, []);
  const showVerbs = () => {};

  return (
    <div className="App">
      <h1>Verblizador</h1>
      <div className="container">
        <table>
          <tr>
            <th>Verb</th>
            <th>Translation</th>
            <th>Yo</th>
            <th>Tú</th>
            <th>El / Ella </th>
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
      </div>
    </div>
  );
}

export default App;
