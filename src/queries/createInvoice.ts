export interface InvoicePostObject {
    date  : string,
    total : number,
    discount    : number,
    buyer_phone : string,
    invoice_number    : string,
    transport_charges : number
}

export default /* GraphQL */`
    mutation MyMutation ($inputVar : CreateInvoicesInput!) {
        createInvoices(input: $inputVar) {
            id
        }
    }    
`