import { TextField, Button } from "@mui/material";
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { useEffect, useState } from "react";
import moment from "moment";
import ItemDetails from "./ItemDetails";
import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { storeInvoiceDetails } from "../store/InvoiceDetailsReducer";

export default function Sales() {

    const [ date, setDate ] = useState(moment());
    const [ items, setItems ] = useState([{}]);
    const [ invoiceDetails, setInvoiceDetails ] = useState({});

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(storeInvoiceDetails({}));
    }, [])

    const onValueChange = e => {
        setInvoiceDetails(current => {
            return {
                ...current,
                [e.target.id] : e.target.value
            }
        })
    }

    const addItem = _ => {
        setItems(current => {
            const temp : object[] = [...current];
            temp.push({});
            return temp;
        })
    }

    const removeItem = index => {
        setItems(current => {
            const temp = [...current.slice(0,index), ...current.slice(index+1)];
            return temp;
        })
    }

    const submitInvoice = () => {
        var invoiceObject = {};
        var items = [];
        Object.keys(invoiceDetails).map(key => {
            if (key.indexOf(".") > -1) {
                var index = key.substring(0, key.indexOf("."));
                var valueKey = key.substring(key.indexOf(".") + 1)
                if (items[index]) {
                    items[index][valueKey] = invoiceDetails[key];
                }
                else {
                    items[index] = { id : index+1 };
                    items[index][valueKey] = invoiceDetails[key];
                }
            }
            else {
                invoiceObject[key] = invoiceDetails[key]
            }
        })
        invoiceObject = {
            ...invoiceObject,
            date,
            items
        }

        dispatch(storeInvoiceDetails(invoiceObject));
        
        navigate("/invoice");
    }

    return (
        <form onSubmit={event => {
            event.preventDefault();
            submitInvoice();
        }}>
            <div className="flex-column flex-gap-l">
                <LocalizationProvider dateAdapter={AdapterMoment}>
                    <DatePicker
                        className="half-field" label="Invoice Date"
                        value={date} onChange={newValue => setDate(moment(newValue))}
                        renderInput={(params) => <TextField className="half-field" {...params} />} />
                </LocalizationProvider>

                <TextField id="invoice_number" onChange={onValueChange} autoComplete="off"
                 label="Invoice Number" className="half-field" />

                <div className="flex-box flex-gap-l align-items-flex-start">
                    <TextField id="name" className="flex-1" label="Name" size="small"
                     onChange={onValueChange} autoComplete="off"/>

                    <TextField id="phone_number" type="number" className="flex-1" size="small"
                     label="Phone Number" onChange={onValueChange} autoComplete="off"/>
                </div>
                
                <div className="flex-box flex-gap-l align-items-flex-start">
                    <TextField id="address" className="flex-1" size="small"
                     label="Address" onChange={onValueChange} autoComplete="off"/>

                    <TextField id="city" className="flex-1" size="small"
                     label="City" onChange={onValueChange} autoComplete="off"/>

                    <TextField id="pincode" className="flex-1" size="small"
                     label="Pincode" onChange={onValueChange} autoComplete="off"/>
                </div>

                <div className="flex-column flex-gap-l spacer-vm ">
                    <div className="flex-box justify-content-center"> Item Details </div>
                    {
                        items && items.map((item, index) => {
                            return (
                                <div key={index} className="flex-box flex-gap-m align-items-center">
                                    <ItemDetails index={index} className="flex-1" onChange={onValueChange}/>
                                    <AddCircleOutline className="cursor-pointer" onClick={addItem}/>
                                    <RemoveCircleOutline className="cursor-pointer" onClick={_ => removeItem(index)}/>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="flex-box flex-gap-l align-items-flex-start">

                    <TextField id="shipping" label="Transport Charges" className="half-field"
                     onChange={onValueChange} autoComplete="off" />

                    <TextField id="discount" label="Discount" className="half-field"
                     onChange={onValueChange} autoComplete="off" />

                </div>

                <Button style={{ textTransform : "none" }} className="half-field"
                 type="submit" variant="contained">
                    Generate Invoice
                </Button>
            </div>
        </form>
    )
}