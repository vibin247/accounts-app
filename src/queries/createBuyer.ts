export interface BuyerPostObject {
    address? : string,
    city?    : string, 
    name?    : string,
    pincode? : number,
    phone_number? : string
}

export default /* GraphQL */`
    mutation MyMutation ($inputVar : CreateBuyersInput!) {
        createBuyers(input: $inputVar) {
            id
        }
    }    
`