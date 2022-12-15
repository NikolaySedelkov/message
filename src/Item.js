import PropTypes from 'prop-types';

function Item({
    url = "https://etsy.com/", 
    img = "https://pix2apps.com/images/javascript/slide-3.jpg", 
    title = "etsy", 
    currency_code = "y.e", 
    price = 0, 
    quantity = 0
    }){

    let style = "item-quantity";
    if(quantity < 10){
        style += " level-low"; 
    }
    if(quantity > 10 && quantity < 20){
        style += " level-medium"; 
    }
    if(quantity > 20){
        style += " level-high"; 
    }
    return (
            <div className="item">
                <div className="item-image">
                    <a href={url}>
                        <img src={img}/>
                    </a>
                </div>
                <div className="item-details">
                <p className="item-title">{title.length<=50?title:title.substr(0, 49)+"..."}</p>
                <p className="item-price"> {['$', '€'].indexOf(currency_code)>-1?currency_code+price:price+" "+currency_code}</p>
                <p className={style}>{quantity+" left"}</p>
                </div>
            </div>
    )
}
/*
Item.propTypes({
    url: PropTypes.string,
    img: PropTypes.string,
    title: PropTypes.string,
    currency_code: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number
})
*/

export default Item;