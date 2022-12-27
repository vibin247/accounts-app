import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";





type EagerItemDetails = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ItemDetails, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly invoice_id?: string | null;
  readonly product_type?: string | null;
  readonly rate?: string | null;
  readonly quantity?: string | null;
  readonly invoiceID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyItemDetails = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ItemDetails, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly invoice_id?: string | null;
  readonly product_type?: string | null;
  readonly rate?: string | null;
  readonly quantity?: string | null;
  readonly invoiceID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ItemDetails = LazyLoading extends LazyLoadingDisabled ? EagerItemDetails : LazyItemDetails

export declare const ItemDetails: (new (init: ModelInit<ItemDetails>) => ItemDetails) & {
  copyOf(source: ItemDetails, mutator: (draft: MutableModel<ItemDetails>) => MutableModel<ItemDetails> | void): ItemDetails;
}

type EagerBuyer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Buyer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly phone_numbe?: string | null;
  readonly name?: string | null;
  readonly address?: string | null;
  readonly city?: string | null;
  readonly pincode?: string | null;
  readonly Invoice?: Invoice | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly buyerInvoiceId?: string | null;
}

type LazyBuyer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Buyer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly phone_numbe?: string | null;
  readonly name?: string | null;
  readonly address?: string | null;
  readonly city?: string | null;
  readonly pincode?: string | null;
  readonly Invoice: AsyncItem<Invoice | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly buyerInvoiceId?: string | null;
}

export declare type Buyer = LazyLoading extends LazyLoadingDisabled ? EagerBuyer : LazyBuyer

export declare const Buyer: (new (init: ModelInit<Buyer>) => Buyer) & {
  copyOf(source: Buyer, mutator: (draft: MutableModel<Buyer>) => MutableModel<Buyer> | void): Buyer;
}

type EagerInvoice = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Invoice, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly invoice_number?: string | null;
  readonly buyer_phone?: string | null;
  readonly date?: string | null;
  readonly transport_charges?: string | null;
  readonly discount?: string | null;
  readonly ItemDetails?: (ItemDetails | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyInvoice = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Invoice, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly invoice_number?: string | null;
  readonly buyer_phone?: string | null;
  readonly date?: string | null;
  readonly transport_charges?: string | null;
  readonly discount?: string | null;
  readonly ItemDetails: AsyncCollection<ItemDetails>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Invoice = LazyLoading extends LazyLoadingDisabled ? EagerInvoice : LazyInvoice

export declare const Invoice: (new (init: ModelInit<Invoice>) => Invoice) & {
  copyOf(source: Invoice, mutator: (draft: MutableModel<Invoice>) => MutableModel<Invoice> | void): Invoice;
}