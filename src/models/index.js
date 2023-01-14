// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Invoices } = initSchema(schema);

export {
  Invoices
};