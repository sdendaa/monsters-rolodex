import { useState, useEffect } from "react";

import SearchBox from "./components/search-box/search-box.componentFun";
import CardComponent from "./components/card/card.component";
import "./App.css";

const AppFun = () => {
  console.log("Render");
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  console.log(searchField);
  console.log(filteredMonsters);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
    console.log("Effect is firing");
  }, [monsters, searchField]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };
  const filteredMonster = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField);
  });
  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        className="monsters-search-box"
        onChange={onSearchChange}
        placeholder="search monsters"
      />
      <div className="card-list">
        {filteredMonster.map((monster) => {
          return <CardComponent key={monster.id} monster={monster} />;
        })}
      </div>
    </div>
  );
};
export default AppFun;
