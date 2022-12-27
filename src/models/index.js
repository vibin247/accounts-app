// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ItemDetails, Buyer, Invoice } = initSchema(schema);

export {
  ItemDetails,
  Buyer,
  Invoice
};