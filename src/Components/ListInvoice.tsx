import { useEffect, useState } from "react"
import { API } from "aws-amplify"; 
import fetchInvoiceList, { InvoiceDataResponse, InvoiceItem } from "../queries/fetchInvoiceList";
import moment from "moment";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ListInvoice() {

    const navigate = useNavigate();

    const [ invoicesList , SetInvoicesList ] = useState<InvoiceItem[]>([]);

    const fetchDetails = async () => {
        try {
            const response = await API.graphql({ query : fetchInvoiceList }) as { data: InvoiceDataResponse; errors: any[] };
            SetInvoicesList(response.data.listInvoices.items);
        }
        catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchDetails();
    }, [])

    return (
        <div className="flex-column flex-gap-l">
            <div className="spacer-m border-light-grey border-radius-m flex-box flex-gap-l ">
                <strong className="flex-1 flex-box justify-content-center"> Invoice Number </strong>
                <strong className="flex-1 flex-box justify-content-center"> Invoice Date </strong>
                {/* <strong className="flex-1 flex-box justify-content-center"> Buyer Phone Number </strong> */}
                <strong className="flex-1 flex-box justify-content-center"> Total Amount of Sale </strong>
                <strong className="flex-1 flex-box justify-content-center"> Open Detailed View </strong>
            </div>
            {
                invoicesList.length > 0 &&
                invoicesList.map((item: InvoiceItem, index : number) => {
                    return (
                        <div key={item.id} className="spacer-m border-light-grey border-radius-m flex-box flex-gap-l ">
                            <div className="flex-1 flex-box justify-content-center"> {item.invoice_number} </div>
                            <div className="flex-1 flex-box justify-content-center"> {moment(item.date, "YYYY-MM-DD").format("DD-MM-YYYY")} </div>
                            {/* <div className="flex-1 flex-box justify-content-center"> {item.buyer_phone} </div> */}
                            <div className="flex-1 flex-box justify-content-center"> {item.total} </div>
                            <div className="flex-1 flex-box justify-content-center">
                                <Button variant="contained" onClick={_ => navigate(`/invoice/${item.id}`)}> View </Button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )

}