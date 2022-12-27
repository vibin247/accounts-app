import { TextField } from "@mui/material";
import { ChangeEventHandler } from "react";

type ItemDetailsProps = {
    onChange : ChangeEventHandler,
    index?   : number,
    className? : string
}

export default function ItemDetails(props : ItemDetailsProps) {

    return (
        <div className={`${props.className} flex-box flex-gap-l align-items-flex-start`}>
            <TextField label="Product type" className="flex-4" id={`${props.index}.product_type`}
             onChange={props.onChange} autoComplete="off"/>

            <TextField label="Rate (in Rs.)" type={"number"} className="flex-1" id={`${props.index}.rate`}
             onChange={props.onChange} autoComplete="off"/>

            <TextField label="Quantity" type={"number"} className="flex-1" id={`${props.index}.quantity`}
             onChange={props.onChange} autoComplete="off"/>
        </div>
    )

}