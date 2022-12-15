import Message from "./Message"
import Response from "./Response"
import Typing from "./Typing"

function renderSwitch(message){
    switch(message["type"]){
        case "response":
            return <Response key={message["id"]} message={message}/>
            break;
        case "message":
            return <Message key={message["id"]} message={message}/>
            break;
        case "typing":
            return <Typing key={message["id"]} message={message}/>
            break;
    }
}


function BodyMessage({body}){
    if(body.length === 0){
        return(
            <div className="empty-result">
                Начните диалог...
            </div>
        )
    }
    return(
        <div className="conteiner__body-messages">
            {
                body.map(message=>
                    renderSwitch(message)
                )
            }
        </div>
    )
}

export default BodyMessage;