import BodyMessage from "./BodyMessage"

function BodyChat({messages}){
    return(
        <div className="conteiner__body-chat">
            <div className="header__body-char">
                <span className="material-symbols-outlined">{messages["avatar"]}</span>
                <div>
                    <div className="title__header-body-chat">{"Чат с " + messages["name"]}</div>
                    <div className="info__header-body-chat">{messages["body"].length + " Сообщений"}</div>
                </div>
            </div>
                <BodyMessage body={messages["body"]}/>
            
        </div>
    )
}

/*
BodyChat.defaultProps({
    messages: {
        name: "React",
        body: [],
        avatar: "psychology"
    }
})
*/
export default BodyChat;