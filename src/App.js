import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [data1, setData] = useState([]);

  const [load, setLoad] = useState(20);
  const url = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${load}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const pokemonName = data.results.map((pok) => pok.name);

        setData(pokemonName);
      });
  }, [url]);

  const handleClick = function () {
    setLoad((prev) => prev + 10);
  };

  return (
    <div className="App">
      <ol>
        {data1.map((name, index) => {
          return <li> {name}</li>;
        })}
      </ol>
      <button onClick={handleClick}>load More</button>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
