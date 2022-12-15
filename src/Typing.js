function Typing({message}){
    return (
        <div>
            <div className="header__other-message">
                <span className="name-other-message">{message["from"]["name"]}</span>
                <span className="time-other-message">{message["time"]}</span>
            </div>
            <ul className="conteiner__typing">
                <li className="loader-block"></li>
                <li className="loader-block"></li>
                <li className="loader-block"></li>
            </ul>
        </div>
    )
}
export default Typing;