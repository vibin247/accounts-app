export default /* GraphQL */`
    query MyQuery($buyersID: ID!) {
        getBuyers(id: $buyersID) {
            city
            address
            name
            phone_number
            pincode
            id
        }
    }
`
