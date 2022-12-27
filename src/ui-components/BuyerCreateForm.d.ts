/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BuyerCreateFormInputValues = {
    phone_numbe?: string;
    name?: string;
    address?: string;
    city?: string;
    pincode?: string;
    Invoice?: string;
    buyerInvoiceId?: string;
};
export declare type BuyerCreateFormValidationValues = {
    phone_numbe?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    city?: ValidationFunction<string>;
    pincode?: ValidationFunction<string>;
    Invoice?: ValidationFunction<string>;
    buyerInvoiceId?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BuyerCreateFormOverridesProps = {
    BuyerCreateFormGrid?: FormProps<GridProps>;
    phone_numbe?: FormProps<TextFieldProps>;
    name?: FormProps<TextFieldProps>;
    address?: FormProps<TextFieldProps>;
    city?: FormProps<TextFieldProps>;
    pincode?: FormProps<TextFieldProps>;
    Invoice?: FormProps<SelectFieldProps>;
    buyerInvoiceId?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BuyerCreateFormProps = React.PropsWithChildren<{
    overrides?: BuyerCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BuyerCreateFormInputValues) => BuyerCreateFormInputValues;
    onSuccess?: (fields: BuyerCreateFormInputValues) => void;
    onError?: (fields: BuyerCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: BuyerCreateFormInputValues) => BuyerCreateFormInputValues;
    onValidate?: BuyerCreateFormValidationValues;
} & React.CSSProperties>;
export default function BuyerCreateForm(props: BuyerCreateFormProps): React.ReactElement;
