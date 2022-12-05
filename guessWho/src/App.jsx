import { useEffect, useState } from 'react'
import './App.css'
import Player1Screen from './Player1Screen'
import StartScreen from './StartScreen'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  useNavigate
} from "react-router-dom";


// Filters cards to new array of only pokemon
// const allBase1Pokemon = allBase1Cards.filter((x) => { return (x.supertype == 'Pokémon') })
// console.log(allBase1Pokemon)

function App() {
  
  return (
    <div  className="App">
      <div>
        <a></a>
        <a href="https://reactjs.org" target="_blank">
          <img src='https://github.com/larswan/Guess-Who/blob/main/guessWho/pokeball%20icon.png?raw=true' className="logo" alt="React logo" />
        </a>
      </div>
    </div>
  )
}

export default App