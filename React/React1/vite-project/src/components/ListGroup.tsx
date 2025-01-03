import { Fragment } from "react/jsx-runtime";
import { MouseEvent, useState } from "react";

interface Props {
    heading: string;
    items: string[];
    onSelectedItem: (item: string) => void
}

function ListGroup({heading, items, onSelectedItem}: Props) {
    const [selected, setSelected] = useState(-1)

    return (
        <Fragment>
            <h1>ListGroup</h1>
            {items.length === 0 && "No items found"}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li 
                        key={item}
                        className={selected === index? "list-group-item active": "list-group-item"} 
                        onClick={()=> {
                            setSelected(index)
                            onSelectedItem(item)
                        }}
                        >
                        {item}
                    </li>
                ))}
            </ul>
        </Fragment>
    )
}


export default ListGroup;