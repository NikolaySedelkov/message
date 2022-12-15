function ItemContact({item, func}){
    const callBack = () => {
        func(item["name"], item["avatar"]);
    }
    return( 
        <div onClick={callBack} className="conteiner__item-contact">
            <span className="material-symbols-outlined">{item["avatar"]}</span>{item["name"]}
        </div>
    )
}

export default ItemContact;