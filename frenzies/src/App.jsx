import { useState } from "react";
import "./index.css";
import Die from "./components/Die.jsx";
import {nanoid} from "nanoid"

function App() {
  const [dice, setDice] = useState(generateAllNewDice());
  function generateAllNewDice() {
    let sides = [];
    for (let i = 0; i < 10; i++) {
      let num = Math.floor(Math.random() * 6) + 1;
      sides.push(num);
    }
    return sides.map((side)=>({value:side,isHeld:false,id:nanoid()}))
  }
  
  const diceRoller = () => {
    setDice(prevDice=>prevDice.map(prev=>prev.isHeld?prev:{...prev,value: Math.floor(Math.random() * 6) + 1}))
  };
  const hold = (id)=>{
    console.log(id);
    setDice(prevDice=>prevDice.map(prev=>prev.id===id?{...prev,isHeld:!prev.isHeld}:prev))
  }

  return (
    <main>
      <div className="grid-container">
        {dice.map((die, index) => (
          <Die key={index} value={die.value} isHeld={die.isHeld} id={die.id} hold={hold} />
        ))}
      </div>
      <button className="roll-dice" onClick={() => diceRoller()}>
        Roll the Dice
      </button>
    </main>
  );
}

export default App;
