export interface ItemDetailsPostObject {
    rate?         : string,
    quantity?     : string,
    invoicesID?   : string,
    product_type? : string
}

export default /* GraphQL */`
    mutation MyMutation ($inputVar : CreateItemDetailsInput!) {
        createItemDetails(input: $inputVar) {
            id
        }
    }

`