export interface Buyer {
    id? : string,
    name? : string
}

interface BuyerList {
    nextToken : string,
    items     : Buyer[]
}

export interface BuyerResponse  {
    listBuyers : BuyerList
}

export default /* GraphQL */`
    query BuyerViaPhone ($phoneNumber : String!){
        listBuyers(filter: {phone_number: {eq: $phoneNumber}}) {
            items {
            id,
            name
            }
        }
    }
`