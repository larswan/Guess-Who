function p1Response({oldP2Q, p1r, setp1r }) {
    return (
        <div>
            {oldP2Q == '' ? (p1q) : <h3>{oldP2Q}</h3>}
            <input required id="p1Response" className="input" onChange={(e) => { setp1r(e.target.value); console.log(p1r) }} type="text" placeholder="Yes or No" value={p1r} /> <br />
        </div>
    )
}
export default p1Response