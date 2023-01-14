export interface InvoiceItem {
    id    : string,
    date  : string,
    total : number,
    discount    : number,
    buyer_phone : string,
    invoice_number    : string,
    transport_charges : number
}

interface InvoicesList {
    nextToken : string,
    items     : InvoiceItem[]
}

export interface InvoiceDataResponse  {
    listInvoices : InvoicesList
}

export default /* GraphQL */`
    query MyQuery {
        listInvoices {
            nextToken
            items {
                id
                invoice_number
                date
                buyer_phone
                transport_charges
                discount
                total
            }
        }
    }
`