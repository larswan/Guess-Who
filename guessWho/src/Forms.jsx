import { useState } from 'react'

const Forms = ({setPlayerTurn, cards}) => {
    const [formStep, setFormStep] = useState('player1Question')
    const [p1q, setp1q] = useState('Player 1 hasnt asked a question')
    const [p2q, setp2q] = useState('Player 2 hasnt asked a question')
    const [p1r, setp1r] = useState('Player 1 has no response')
    const [p2r, setp2r] = useState('Player 2 has no response')
    
    

    const handleSubmit = (e) => {
        e.preventDefault()
        // e.target.email.value grabs the value from the form element at the time of the submit event
    }

    return (
        <div className="formContainerDiv">
            <form className="input" onSubmit={handleSubmit}>
                
                {
                    formStep === "player1Response" && <div>
                        <h3> {p2q} </h3>
                        <input id="player1Response" className="input" onChange={(e) => { setp1r(e.target.value); console.log(p1r) }} type="textarea" placeholder="Yes or No" name="player1Response" /> <br />
                        <button className="input" onClick={() => { setFormStep('player1Question')}}> Next </button>
                    </div>
                }
                {
                    formStep === "player1Question" && <div>
                        <h2>Player 1 Enter Your Question</h2>
                        <input id="player1Question" onChange={(e) => { setp1q(e.target.value); console.log(p1q) }} type='textarea' placeholder="What is your question?" name="player1question" className="input" /> <br />
                        <button className="input" onClick={() => { setFormStep('player2Response'); setPlayerTurn(2) }}> Next </button>
                    </div>
                }
                
                {
                    formStep === "player2Response" && <div>
                        <h3> {p1q} </h3>
                        <input id="player2Response" className="input" onChange={(e) => { setp2r(e.target.value); console.log(p2r) }} type="textarea" placeholder="Yes or No" name="player2Response" /> <br />
                        <button className="input" onClick={() => { setFormStep('player2Question')}}> Next </button>
                    </div>
                }
                {
                    formStep === "player2Question" && <div>
                        <h2>Player 2 Enter Your Question</h2>
                        <input id="player2Question" onChange={(e) => { setp2q(e.target.value); console.log(p2q) }} type='textarea' placeholder="What is your question?" name="player2question" className="input" /> <br />
                        <button className="input" onClick={() => { setFormStep('player1Response'); setPlayerTurn(1) }}> Next </button>
                    </div>
                }
            </form>
        </div>
    )
    

}

export default Forms