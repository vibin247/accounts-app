import { Button, Divider } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { inWords, formatCurrency } from "../utils";
import { useReactToPrint } from "react-to-print";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useNavigate } from "react-router-dom";

export default function Invoice() {

    var componentRef = useRef(null);
    const [ totalBeforeDiscount, setTotalBeforeDiscount ] = useState(0);
    const [ total, setTotal ] = useState(0);

    var invoiceDetails = useSelector((state : RootState) => state.invoiceReducer.invoiceDetails?.invoiceDetails);

    const navigate = useNavigate();

    useEffect(() => {
        if (!invoiceDetails) {
            navigate("/");
        }
    }, [])

    useEffect(() => {
        var _totalBeforeDiscount = 0, _total = 0;
        if (invoiceDetails && invoiceDetails.items) {
            _totalBeforeDiscount = invoiceDetails?.items.map(d => d.rate * d.quantity).reduce((c,n) => c + n, 0);
            _total = _totalBeforeDiscount;
        }

        if (invoiceDetails && invoiceDetails.shipping) {
            _total = _totalBeforeDiscount + invoiceDetails?.shipping
        }

        if (invoiceDetails && invoiceDetails.discount) {
            _total = _totalBeforeDiscount - invoiceDetails?.discount
        }

        setTotalBeforeDiscount(_totalBeforeDiscount);
        setTotal(_total)

    }, [invoiceDetails])

    const columns : GridColDef[] = [
        { 
            field: 'product_type',
            headerName: 'Product Type',
            flex : 5,
            sortable : false
        },
        { 
            field: 'rate',
            headerName: 'Rate(in Rs.)',
            flex : 1,
            sortable : false
        },
        { 
            field: 'quantity',
            headerName: 'Quantity',
            flex : 1,
            sortable : false
        },
        { 
            field: 'amount',
            headerName: 'Amount(in Rs.)',
            flex : 1,
            sortable : false,
            valueGetter : params => params.row?.rate * params.row?.quantity
        }
    ]

    const printInvoice = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <div className="flex-column spacer-m flex-gap-xl">
            <div className="flex-box spacer-hs align-items-center">
                <Button variant="contained" onClick={printInvoice}> Print Invoice </Button>
            </div>
            
            {
                invoiceDetails &&
                <div ref={componentRef} className="spacer-m" id="invoice">
                    <div className="flex-column spacer-l flex-gap-xl">
                        <div className="flex-box justify-content-space-between align-items-center">
                            <strong className="font-size-header"> DevPrakash Furniture </strong>
                            <div className="flex-column flex-gap-s align-items-flex-end">
                                <strong> {invoiceDetails?.invoice_number} </strong>
                                <div> 01/01/2023 </div>
                            </div>
                        </div>
    
                        <Divider />
    
                        <div className="flex-column flex-gap-l">
    
                            <div className="flex-box flex-gap-l justify-content-flex-end">
                                <div className="flex-column flex-gap-s align-items-flex-end">
                                    <strong className="font-size-sm-1"> GSTIN </strong>
                                    <em className="font-size-sm-2"> 33AAJPA0115D1ZR </em>
                                </div>
    
                                <div>
                                    <Divider orientation="vertical" />
                                </div>
    
                                <div className="flex-column flex-gap-s align-items-flex-end">
                                    <strong className="font-size-sm-1"> STATE </strong>
                                    <em className="font-size-sm-2 flex-4"> Tamil Nadu </em>
                                </div>
    
                                <div>
                                    <Divider orientation="vertical" />
                                </div>
                                
                                <div className="flex-column flex-gap-s align-items-flex-end">
                                    <strong className="font-size-sm-1"> CODE </strong>
                                    <em className="font-size-sm-2 flex-4"> 33 </em>
                                </div>
                            </div>
    
                            <div className="flex-column flex-gap-l">
                                <strong className="font-size-m-1"> Invoice To </strong>
                                <div className="flex-column flex-gap-m">
                                    <strong className="font-size-l-1">{invoiceDetails?.name}</strong>
                                    <div> {invoiceDetails?.phone_number} </div>
                                    <div className="font-size-m-1"> {invoiceDetails?.address} </div>
                                    <div className="font-size-m-1"> {invoiceDetails?.city} </div>
                                    <div className="font-size-m-1"> {invoiceDetails?.pincode} </div>
                                </div>
                            </div>
    
                        </div>
    
                        <Divider />
    
                        <div className="flex-column flex-gap-l">
                            <div className="flex-box justify-content-center"> Item Details </div>
                            {
                                invoiceDetails?.items &&
                                <DataGrid autoHeight={true} density={"comfortable"}
                                 scrollbarSize={100} showCellRightBorder={true}
                                 showColumnRightBorder={true} hideFooter={true} 
                                 rows={invoiceDetails?.items} columns={columns}
                                 disableColumnFilter={true} disableColumnMenu={true}
                                 disableDensitySelector={true} />
                            }
                        </div>
    
                        <div className="flex-column flex-gap-l">
                            <div className="flex-box justify-content-space-between align-items-center flex-gap-l">
                                <div className="flex-3 flex-box justify-content-flex-end"> Total Before Discount </div>
                                <div className="flex-1 flex-box justify-content-flex-end"> {formatCurrency(totalBeforeDiscount)} </div>
                            </div>
    
                            <div className="flex-box justify-content-space-between align-items-center flex-gap-l">
                                <div className="flex-3 flex-box justify-content-flex-end"> Discount </div>
                                <div className="flex-1 flex-box justify-content-flex-end"> {formatCurrency(Number(invoiceDetails?.discount))} </div>
                            </div>


                            <div className="flex-box justify-content-space-between align-items-center flex-gap-l">
                                <div className="flex-3 flex-box justify-content-flex-end"> Transport Charges </div>
                                <div className="flex-1 flex-box justify-content-flex-end"> {formatCurrency(Number(invoiceDetails?.shipping))} </div>
                            </div>
    
                            <div className="flex-box justify-content-space-between align-items-center flex-gap-l">
                                <strong className="flex-3 flex-box justify-content-flex-end"> Total </strong>
                                <div className="flex-1 flex-column justify-content-center align-items-flex-end flex-gap-s">
                                    <div className="font-size-l-2"> {formatCurrency(total)} </div>
                                    <em className="font-size-m-1">
                                        {inWords(total)} only
                                    </em> </div>
                            </div>
                        </div>
    
                        <Divider/>
    
                        <div className="flex-box justify-content-center"> COMPOSITION TAXABLE PERSON NOT ELIGIBLE TO COLLECT TAX ON SUPPLIES </div>
    
                        <div className="flex-box justify-content-space-between">
                            <div className="flex-1 flex-column flex-gap-l">
                                <div className="flex-box justify-content-space-between flex-gap-m align-items-center">
                                    <div className="flex-1 font-size-sm-2"> Bank </div>
                                    <div className="flex-1"> Indian Bank </div>
                                </div> 
    
                                <div className="flex-box justify-content-space-between flex-gap-m align-items-center">
                                    <div className="flex-1 font-size-sm-2"> Account No. </div>
                                    <div className="flex-1"> 6784219255 </div>
                                </div> 
    
                                <div className="flex-box justify-content-space-between flex-gap-m align-items-center">
                                    <div className="flex-1 font-size-sm-2"> Branch IFSC </div>
                                    <div className="flex-1"> IDIB000A132 </div>
                                </div> 
                            </div>
                            <div className="flex-3 flex-column justify-content-space-between flex-gap-m align-items-flex-end">
                                <div className="font-size-m-1"> For DEV PRAKASH FURNITURE </div>
                                <div className="font-size-m-1"> Authorized Signature </div>
                            </div>
                        </div>
                        
                        <Divider/>
    
                        <div className="flex-box justify-content-center font-size-sm-2 align-items-center flex-gap-m">
                            <div>16, Lakshmi Ammal Street, Ayyavoo Colony, Aminjikarai, Chennai - 600029. Mob. : +91 80561 82202.</div>
                            <strong><em> Certified that the  particulars above are true and correct. </em></strong>
                        </div>
    
                    </div>
                </div>
            }
        </div>
    )

}