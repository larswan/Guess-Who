import { useEffect, useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate
} from "react-router-dom";

import PlayScreen from './PlayScreen'
import StartScreen from './StartScreen'
import WinnerScreen from './WinnerScreen'
import PokeBallSpinner from './PokeBallSpinner'

function App() {
  const [playerTurn, setPlayerTurn] = useState([0])
  const [secretCard, setSecretCard] = useState([])
  const [guessMode, setGuessMode] = useState(false)
  const [guessedCard, setGuessedCard] = useState({})
  const [cardToGuess, setCardToGuess] = useState({})
  const [cardSet, setCardSet]= useState([])

  // player turn effects
  useEffect(()=>{
   if(playerTurn==0){
     document.body.style.backgroundColor = "#ab2c2c"
     setCardToGuess(secretCard[1])
    }
    else{
     document.body.style.backgroundColor =  "#2c30ab"
     setCardToGuess(secretCard[0])
   }
  },[playerTurn])
  
  const Home = () => {
    const navigate = useNavigate() 

    // Reset PlayerTurn to 0
    useEffect(()=>{
      setPlayerTurn(0)
    },[])
    
    return (
      <div onClick={() => { navigate("/StartScreen") }}>
        <h1>Click to Start Game</h1>
        <PokeBallSpinner />
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
      element: <StartScreen secretCard={secretCard} setSecretCard={setSecretCard} cardSet={cardSet} setCardSet={setCardSet} playerTurn={playerTurn} setPlayerTurn={setPlayerTurn} />,
    },
    {
      path: "/PlayScreen", 
      element: <PlayScreen cardSet={cardSet} setCardSet={setCardSet} playerTurn={playerTurn} setPlayerTurn={setPlayerTurn} secretCard={secretCard} cardToGuess={cardToGuess} guessMode={guessMode} setGuessMode={setGuessMode} guessedCard={guessedCard} setGuessedCard={setGuessedCard}/>,
    },
    {
      path: "/WinnerScreen", 
      element: <WinnerScreen guessedCard={guessedCard} playerTurn={playerTurn} />,
    },
  ])
  
  return (
    <div className="App">
      <div>
        <RouterProvider router={router} />
      </div>
    </div>
  )
}

export default App
