import ItemProps from "../interfaces/ItemProps";
import definitionQuantityStatus from "./definitionQuantityStatus";
import validationPrice from "./validationPrice";
import validationTitle from "./validationTitle";

export default function Item({ obj }: ItemProps) {
    if (obj.state === 'removed') return;

    return (
        <div key={obj.listing_id} className="item">
            <div className="item-image">
                <a href={obj.url}>
                    <img src={obj.MainImage?.url_570xN}/>
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{validationTitle(obj.title)}</p>
                <p className="item-price">{`${validationPrice(obj.currency_code)}${obj.price}`}</p>
                <p className={`item-quantity ${definitionQuantityStatus(obj.quantity)}`}>{`${obj.quantity} left`}</p>
            </div>
        </div>
    )
}
