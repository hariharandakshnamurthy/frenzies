import {useState} from 'react'
import './index.css'
import Die from './components/Die.jsx'

function App() {
  const [dice, setDice] = useState(generateAllNewDice())
  function generateAllNewDice(){
    let sides = []
    for(let i=0;i<10;i++){
      let num = Math.floor(Math.random()*6)+1
      sides.push(num)
    }
    console.log(sides)
    return sides
  }

  const diceRoller=()=>{
    setDice(generateAllNewDice())
  }  
  
  return (
    <main>
      <div className='grid-container'>
       {
        dice.map((die,index)=><Die key={index} value={die}/>)
       }
      </div>
      <button className='roll-dice' onClick={()=>diceRoller()}>Roll the Dice</button>
    </main>
  )
}

export default App
