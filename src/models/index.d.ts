import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerItemDetails = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ItemDetails, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly product_type?: string | null;
  readonly rate?: string | null;
  readonly quantity?: string | null;
  readonly invoicesID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyItemDetails = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ItemDetails, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly product_type?: string | null;
  readonly rate?: string | null;
  readonly quantity?: string | null;
  readonly invoicesID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ItemDetails = LazyLoading extends LazyLoadingDisabled ? EagerItemDetails : LazyItemDetails

export declare const ItemDetails: (new (init: ModelInit<ItemDetails>) => ItemDetails) & {
  copyOf(source: ItemDetails, mutator: (draft: MutableModel<ItemDetails>) => MutableModel<ItemDetails> | void): ItemDetails;
}

type EagerBuyers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Buyers, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly phone_number?: string | null;
  readonly name?: string | null;
  readonly address?: string | null;
  readonly city?: string | null;
  readonly pincode?: number | null;
  readonly Invoices?: (Invoices | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBuyers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Buyers, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly phone_number?: string | null;
  readonly name?: string | null;
  readonly address?: string | null;
  readonly city?: string | null;
  readonly pincode?: number | null;
  readonly Invoices: AsyncCollection<Invoices>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Buyers = LazyLoading extends LazyLoadingDisabled ? EagerBuyers : LazyBuyers

export declare const Buyers: (new (init: ModelInit<Buyers>) => Buyers) & {
  copyOf(source: Buyers, mutator: (draft: MutableModel<Buyers>) => MutableModel<Buyers> | void): Buyers;
}

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
  readonly buyersID: string;
  readonly ItemDetails?: (ItemDetails | null)[] | null;
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
  readonly buyersID: string;
  readonly ItemDetails: AsyncCollection<ItemDetails>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Invoices = LazyLoading extends LazyLoadingDisabled ? EagerInvoices : LazyInvoices

export declare const Invoices: (new (init: ModelInit<Invoices>) => Invoices) & {
  copyOf(source: Invoices, mutator: (draft: MutableModel<Invoices>) => MutableModel<Invoices> | void): Invoices;
}