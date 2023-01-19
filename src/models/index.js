// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ItemDetails, Buyers, Invoices } = initSchema(schema);

export {
  ItemDetails,
  Buyers,
  Invoices
};