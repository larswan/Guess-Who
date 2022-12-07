import { useState, useEffect } from 'react'

const Forms = ({setPlayerTurn, cards}) => {
    const [formStep, setFormStep] = useState('player1Question')
    const [p1q, setp1q] = useState('')
    const [p2q, setp2q] = useState('')
    const [p1r, setp1r] = useState('')
    const [p2r, setp2r] = useState('')
    const [oldP1Q, setOldP1Q] = useState('')
    const [oldP2Q, setOldP2Q] = useState('')

    // Adding question marks to questions that dont have them
    useEffect(()=>{
    const questionMarkAdder = (string) => {
        if(string.includes('?') || string == ''){
            return
        }
        else {
            let tempString = `${string}?`
            console.log(tempString)
            setOldP1Q(tempString)
        }
    } 
    questionMarkAdder(oldP1Q)
    },[oldP1Q])
        useEffect(() => {
            const questionMarkAdder = (string) => {
                if (string.includes('?') || string == '') {
                    return
                }
                else {
                    let tempString = `${string}?`
                    console.log(tempString)
                    setOldP1Q(tempString)
                }
            }
            questionMarkAdder(oldP2Q)
        }, [oldP2Q])

    const handleSubmit = (e) => {
        e.preventDefault()
        // e.target.email.value grabs the value from the form element at the time of the submit event
    }

    return (
        <div className="formContainerDiv">
            <form className="input" onSubmit={handleSubmit}>
                
                {
                    formStep === "player1Response" && <div>
                        <h3> {oldP2Q} </h3>
                        <input id="player1Response" className="input" onChange={(e) => { setp1r(e.target.value); console.log(p1r) }} type="textarea" placeholder="Yes or No" name="player1Response" /> <br />
                        <button  className="input" type="submit" onClick={() => { setFormStep('player1Question')}}> Next </button>
                    </div>
                }
                {
                    formStep === "player1Question" && <div>
                        {p1q == '' ? setFormStep('player2Response') : <h1>{oldP1Q}<br/>{p2r}</h1> }
                        <h3>Player 1 Enter Your Question</h3>
                        <input id="player1Question" onChange={(e) => { setp1q(e.target.value); console.log(p1q) }} type='textarea' placeholder="What is your question?" name="player1question" className="input" /> <br />
                        <button  className="input" type="submit" onClick={() => { setOldP1Q(p1q) ;setFormStep('player2Response'); setPlayerTurn(2)}}> Next </button>
                    </div>
                }
                
                {
                    formStep === "player2Response" && <div>
                        <h3> {oldP1Q} </h3>
                        <input id="player2Response" className="input" onChange={(e) => { setp2r(e.target.value); console.log(p2r) }} type="textarea" placeholder="Yes or No" name="player2Response" /> <br />
                        <button  className="input" type="submit" onClick={() => { setFormStep('player2Question')}}> Next </button>
                    </div>
                }
                {
                    formStep === "player2Question" && <div>
                        {p2q == '' ? setFormStep('player2Question') : <h1>You asked: {oldP2Q} <br />They said: {p1r}</h1>}
                        <h3>Player 2 Enter Your Question</h3>
                        <input  id="player2Question" onChange={(e) => { setp2q(e.target.value); console.log(p2q) }} type='textarea' placeholder="What is your question?" name="player2question" className="input" /> <br />
                        <button  className="input" type="submit" onClick={() => { setOldP2Q(p2q); setFormStep('player1Response'); setPlayerTurn(1)}}> Next </button>
                    </div>
                }
            </form>
        </div>
    )
    

}

export default Forms