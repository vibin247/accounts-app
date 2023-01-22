export default /* GraphQL */`
    query MyQuery($invoiceId: ID!) {
        getInvoices(id: $invoiceId) {
            date
            id
            discount
            invoice_number
            total
            transport_charges
            buyersID
            ItemDetails {
                items {
                    product_type
                    quantity
                    rate
                    id
                }
            }
        }
    }
`
