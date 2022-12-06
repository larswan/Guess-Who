import { useEffect, useState } from 'react'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  useNavigate
} from "react-router-dom";

import Player1Screen from './Player1Screen'
import StartScreen from './StartScreen'

function App() {
  const [cards, setCards] = useState([])
  const [playerTurn, setPlayerTurn] = useState([1])

  useEffect(()=>{
   if(playerTurn==1){
     document.body.style.backgroundColor = "#ab2c2c"
    }
    else{
      
     document.body.style.backgroundColor =  "#2c37ab"
   }
  },[playerTurn])
  
  const Home = () => {
    const navigate = useNavigate() 
    return (
      <div>
        <h1>Click to Start Game</h1>
        <a></a>
        <a>
          <img onClick={() => { navigate("/StartScreen") }} src='https://github.com/larswan/Guess-Who/blob/main/guessWho/pokeball%20icon.png?raw=true' className="logo" alt="Start game" />
        </a>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/StartScreen", 
      element: <StartScreen cards={cards} setCards={setCards} playerTurn={playerTurn} setPlayerTurn={setPlayerTurn}/>,
    },
  ])
  
  return (
    <div  className="App">
      <div>
        <RouterProvider router={router} />
      </div>
    </div>
  )
}

export default App