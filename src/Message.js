function Message({message}){
    return(
        <div className="conteiner__other-message">
            <div className="header__other-message">
                <span className="name-other-message">{message["from"]["name"]}</span>
                <span className="time-other-message">{message["time"]}</span>
            </div>
            <div className="body__other-message">
                {message["text"]}
            </div>
        </div>
    )
}

export default Message;