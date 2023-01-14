import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerInvoices = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Invoices, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly invoice_number?: string | null;
  readonly date?: string | null;
  readonly buyer_phone?: string | null;
  readonly total?: number | null;
  readonly transport_charges?: number | null;
  readonly discount?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyInvoices = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Invoices, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly invoice_number?: string | null;
  readonly date?: string | null;
  readonly buyer_phone?: string | null;
  readonly total?: number | null;
  readonly transport_charges?: number | null;
  readonly discount?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Invoices = LazyLoading extends LazyLoadingDisabled ? EagerInvoices : LazyInvoices

export declare const Invoices: (new (init: ModelInit<Invoices>) => Invoices) & {
  copyOf(source: Invoices, mutator: (draft: MutableModel<Invoices>) => MutableModel<Invoices> | void): Invoices;
}