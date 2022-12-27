/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Buyer } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function BuyerCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    phone_numbe: undefined,
    name: undefined,
    address: undefined,
    city: undefined,
    pincode: undefined,
    Invoice: {},
    buyerInvoiceId: undefined,
  };
  const [phone_numbe, setPhone_numbe] = React.useState(
    initialValues.phone_numbe
  );
  const [name, setName] = React.useState(initialValues.name);
  const [address, setAddress] = React.useState(initialValues.address);
  const [city, setCity] = React.useState(initialValues.city);
  const [pincode, setPincode] = React.useState(initialValues.pincode);
  const [Invoice, setInvoice] = React.useState(initialValues.Invoice);
  const [buyerInvoiceId, setBuyerInvoiceId] = React.useState(
    initialValues.buyerInvoiceId
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setPhone_numbe(initialValues.phone_numbe);
    setName(initialValues.name);
    setAddress(initialValues.address);
    setCity(initialValues.city);
    setPincode(initialValues.pincode);
    setInvoice(initialValues.Invoice);
    setBuyerInvoiceId(initialValues.buyerInvoiceId);
    setErrors({});
  };
  const validations = {
    phone_numbe: [],
    name: [],
    address: [],
    city: [],
    pincode: [],
    Invoice: [],
    buyerInvoiceId: [],
  };
  const runValidationTasks = async (fieldName, value) => {
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          phone_numbe,
          name,
          address,
          city,
          pincode,
          Invoice,
          buyerInvoiceId,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          await DataStore.save(new Buyer(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "BuyerCreateForm")}
    >
      <TextField
        label="Phone numbe"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              phone_numbe: value,
              name,
              address,
              city,
              pincode,
              Invoice,
              buyerInvoiceId,
            };
            const result = onChange(modelFields);
            value = result?.phone_numbe ?? value;
          }
          if (errors.phone_numbe?.hasError) {
            runValidationTasks("phone_numbe", value);
          }
          setPhone_numbe(value);
        }}
        onBlur={() => runValidationTasks("phone_numbe", phone_numbe)}
        errorMessage={errors.phone_numbe?.errorMessage}
        hasError={errors.phone_numbe?.hasError}
        {...getOverrideProps(overrides, "phone_numbe")}
      ></TextField>
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              phone_numbe,
              name: value,
              address,
              city,
              pincode,
              Invoice,
              buyerInvoiceId,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Address"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              phone_numbe,
              name,
              address: value,
              city,
              pincode,
              Invoice,
              buyerInvoiceId,
            };
            const result = onChange(modelFields);
            value = result?.address ?? value;
          }
          if (errors.address?.hasError) {
            runValidationTasks("address", value);
          }
          setAddress(value);
        }}
        onBlur={() => runValidationTasks("address", address)}
        errorMessage={errors.address?.errorMessage}
        hasError={errors.address?.hasError}
        {...getOverrideProps(overrides, "address")}
      ></TextField>
      <TextField
        label="City"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              phone_numbe,
              name,
              address,
              city: value,
              pincode,
              Invoice,
              buyerInvoiceId,
            };
            const result = onChange(modelFields);
            value = result?.city ?? value;
          }
          if (errors.city?.hasError) {
            runValidationTasks("city", value);
          }
          setCity(value);
        }}
        onBlur={() => runValidationTasks("city", city)}
        errorMessage={errors.city?.errorMessage}
        hasError={errors.city?.hasError}
        {...getOverrideProps(overrides, "city")}
      ></TextField>
      <TextField
        label="Pincode"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              phone_numbe,
              name,
              address,
              city,
              pincode: value,
              Invoice,
              buyerInvoiceId,
            };
            const result = onChange(modelFields);
            value = result?.pincode ?? value;
          }
          if (errors.pincode?.hasError) {
            runValidationTasks("pincode", value);
          }
          setPincode(value);
        }}
        onBlur={() => runValidationTasks("pincode", pincode)}
        errorMessage={errors.pincode?.errorMessage}
        hasError={errors.pincode?.hasError}
        {...getOverrideProps(overrides, "pincode")}
      ></TextField>
      <SelectField
        label="Invoice"
        placeholder="Please select an option"
        isDisabled={false}
        value={Invoice}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              phone_numbe,
              name,
              address,
              city,
              pincode,
              Invoice: value,
              buyerInvoiceId,
            };
            const result = onChange(modelFields);
            value = result?.Invoice ?? value;
          }
          if (errors.Invoice?.hasError) {
            runValidationTasks("Invoice", value);
          }
          setInvoice(value);
        }}
        onBlur={() => runValidationTasks("Invoice", Invoice)}
        errorMessage={errors.Invoice?.errorMessage}
        hasError={errors.Invoice?.hasError}
        {...getOverrideProps(overrides, "Invoice")}
      ></SelectField>
      <TextField
        label="Buyer invoice id"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              phone_numbe,
              name,
              address,
              city,
              pincode,
              Invoice,
              buyerInvoiceId: value,
            };
            const result = onChange(modelFields);
            value = result?.buyerInvoiceId ?? value;
          }
          if (errors.buyerInvoiceId?.hasError) {
            runValidationTasks("buyerInvoiceId", value);
          }
          setBuyerInvoiceId(value);
        }}
        onBlur={() => runValidationTasks("buyerInvoiceId", buyerInvoiceId)}
        errorMessage={errors.buyerInvoiceId?.errorMessage}
        hasError={errors.buyerInvoiceId?.hasError}
        {...getOverrideProps(overrides, "buyerInvoiceId")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
