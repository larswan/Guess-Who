function p2Response({ p2r, setp2r, oldP1Q }) {
    return (
        <div>
            <h3>{oldP1Q}</h3>
            <input id="p2Response" className="input" onChange={(e) => { setp2r(e.target.value); console.log(p2r) }} type="text" placeholder="Yes or No" value={p2r} /> <br />
        </div>
    )
}
export default p2Response