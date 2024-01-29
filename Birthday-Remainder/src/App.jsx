import { useState } from "react"
import List from "./List";
import data from './data';

function App() {

    const[people, setPeople] =useState(data);
  return (
    <main>
      <section className="container">
        <h2>{people.length} birthdays today</h2>
        <List people ={people} />
        <button onClick={() =>setPeople([])}>clear all</button>
      </section>
    </main>
  )
}

export default App;
