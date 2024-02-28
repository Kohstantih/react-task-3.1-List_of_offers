import Item from "./Item";
import ListingProps from "../interfaces/ListingProps";

export default function Listing({items = []}: ListingProps) {
    if (items.length === 0) return;

    const result: Array<React.ReactNode> = [];

    items.forEach((item) => {
        result.push(<Item obj={item}/>)
    })

    if (!result) return;

    return (
        <div className="item-list">
            { result }
        </div>
    )
}
