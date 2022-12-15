function Response({message}){
    return(
        <div className="conteiner__my-message">
            <div className="header__my-message">
                <span className="time-my-message">{message["time"]}</span>
                <span className="name-my-message">{message["from"]["name"]}</span>
            </div>
            <div className="body__my-message">
                {message["text"]}
            </div>
        </div>
    )
}

export default Response;