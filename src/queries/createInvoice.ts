export interface InvoicePostObject {
    date  : string,
    total : number,
    discount : number,
    buyersID? : string,
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