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
export declare type BuyersCreateFormInputValues = {
    phone_number?: string;
    name?: string;
    address?: string;
    city?: string;
    pincode?: number;
};
export declare type BuyersCreateFormValidationValues = {
    phone_number?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    city?: ValidationFunction<string>;
    pincode?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BuyersCreateFormOverridesProps = {
    BuyersCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    phone_number?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    city?: PrimitiveOverrideProps<TextFieldProps>;
    pincode?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BuyersCreateFormProps = React.PropsWithChildren<{
    overrides?: BuyersCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BuyersCreateFormInputValues) => BuyersCreateFormInputValues;
    onSuccess?: (fields: BuyersCreateFormInputValues) => void;
    onError?: (fields: BuyersCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BuyersCreateFormInputValues) => BuyersCreateFormInputValues;
    onValidate?: BuyersCreateFormValidationValues;
} & React.CSSProperties>;
export default function BuyersCreateForm(props: BuyersCreateFormProps): React.ReactElement;
