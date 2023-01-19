/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Buyers } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BuyersUpdateFormInputValues = {
    phone_number?: string;
    name?: string;
    address?: string;
    city?: string;
    pincode?: number;
};
export declare type BuyersUpdateFormValidationValues = {
    phone_number?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    city?: ValidationFunction<string>;
    pincode?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BuyersUpdateFormOverridesProps = {
    BuyersUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    phone_number?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    city?: PrimitiveOverrideProps<TextFieldProps>;
    pincode?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BuyersUpdateFormProps = React.PropsWithChildren<{
    overrides?: BuyersUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    buyers?: Buyers;
    onSubmit?: (fields: BuyersUpdateFormInputValues) => BuyersUpdateFormInputValues;
    onSuccess?: (fields: BuyersUpdateFormInputValues) => void;
    onError?: (fields: BuyersUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BuyersUpdateFormInputValues) => BuyersUpdateFormInputValues;
    onValidate?: BuyersUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BuyersUpdateForm(props: BuyersUpdateFormProps): React.ReactElement;
