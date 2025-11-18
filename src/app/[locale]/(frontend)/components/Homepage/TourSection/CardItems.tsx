
import { Fragment } from "react/jsx-runtime";
import CardItem from "./CardItem";
import { item } from "@/src/types";


interface Props {
    items: item[];
}

const CardItems = ({ items }: Props) => {
    if (!items || items.length === 0) {
        return null;
    }

    return (
        <Fragment>
            {items.map((item, index) => (
                <CardItem item={item} key={index} />
            ))}
        </Fragment>
    );
};

export default CardItems;
