import { API } from "aws-amplify";
import fetchBuyerViaId from "../queries/fetchBuyerViaId";
import fetchInvoiceDetails from "../queries/fetchInvoiceDetails";

export default function fetchInvoice(invoiceId) {
    return new Promise(async (resolve, reject) => {
        try {
            const invoiceDetailsResponse = await API.graphql({ query : fetchInvoiceDetails, variables : { invoiceId : invoiceId } }) as { data };
    
            const invoiceDetails = invoiceDetailsResponse.data.getInvoices;
    
            const buyersID = invoiceDetailsResponse.data.getInvoices.buyersID;
    
            const buyerDetailsResponse = await API.graphql({ query : fetchBuyerViaId, variables : { buyersID : buyersID } }) as { data };
    
            const buyerDetails = buyerDetailsResponse.data.getBuyers;
            
            const response = {
                ...buyerDetails,
                ...invoiceDetails,
                items    : invoiceDetails?.ItemDetails.items,
                shipping : invoiceDetails?.transport_charges
            }
    
            resolve(response);
        } catch (error) {
            reject(error);
        }
    })
}