import ItemContact from "./ItemContact"

function ListContact({list, func}){
    return (
        <div className="conteiner__list-contact">
            {
                list.map(contact => <ItemContact key={contact["name"]} item={contact} func={func}/>)
            }
        </div>
    )

}

export default ListContact;