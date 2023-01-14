/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type InvoicesCreateFormInputValues = {
    invoice_number?: string;
    date?: string;
    buyer_phone?: string;
    total?: number;
    transport_charges?: number;
    discount?: number;
};
export declare type InvoicesCreateFormValidationValues = {
    invoice_number?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
    buyer_phone?: ValidationFunction<string>;
    total?: ValidationFunction<number>;
    transport_charges?: ValidationFunction<number>;
    discount?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InvoicesCreateFormOverridesProps = {
    InvoicesCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    invoice_number?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    buyer_phone?: PrimitiveOverrideProps<TextFieldProps>;
    total?: PrimitiveOverrideProps<TextFieldProps>;
    transport_charges?: PrimitiveOverrideProps<TextFieldProps>;
    discount?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type InvoicesCreateFormProps = React.PropsWithChildren<{
    overrides?: InvoicesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: InvoicesCreateFormInputValues) => InvoicesCreateFormInputValues;
    onSuccess?: (fields: InvoicesCreateFormInputValues) => void;
    onError?: (fields: InvoicesCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: InvoicesCreateFormInputValues) => InvoicesCreateFormInputValues;
    onValidate?: InvoicesCreateFormValidationValues;
} & React.CSSProperties>;
export default function InvoicesCreateForm(props: InvoicesCreateFormProps): React.ReactElement;
