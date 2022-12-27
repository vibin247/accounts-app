/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Invoice } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type InvoiceUpdateFormInputValues = {
    invoice_number?: string;
    buyer_phone?: string;
    date?: string;
    transport_charges?: string;
    discount?: string;
};
export declare type InvoiceUpdateFormValidationValues = {
    invoice_number?: ValidationFunction<string>;
    buyer_phone?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
    transport_charges?: ValidationFunction<string>;
    discount?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InvoiceUpdateFormOverridesProps = {
    InvoiceUpdateFormGrid?: FormProps<GridProps>;
    invoice_number?: FormProps<TextFieldProps>;
    buyer_phone?: FormProps<TextFieldProps>;
    date?: FormProps<TextFieldProps>;
    transport_charges?: FormProps<TextFieldProps>;
    discount?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type InvoiceUpdateFormProps = React.PropsWithChildren<{
    overrides?: InvoiceUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    invoice?: Invoice;
    onSubmit?: (fields: InvoiceUpdateFormInputValues) => InvoiceUpdateFormInputValues;
    onSuccess?: (fields: InvoiceUpdateFormInputValues) => void;
    onError?: (fields: InvoiceUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: InvoiceUpdateFormInputValues) => InvoiceUpdateFormInputValues;
    onValidate?: InvoiceUpdateFormValidationValues;
} & React.CSSProperties>;
export default function InvoiceUpdateForm(props: InvoiceUpdateFormProps): React.ReactElement;
