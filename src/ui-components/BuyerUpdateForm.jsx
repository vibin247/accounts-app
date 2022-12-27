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
export default function BuyerUpdateForm(props) {
  const {
    id,
    buyer,
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
    const cleanValues = { ...initialValues, ...buyerRecord };
    setPhone_numbe(cleanValues.phone_numbe);
    setName(cleanValues.name);
    setAddress(cleanValues.address);
    setCity(cleanValues.city);
    setPincode(cleanValues.pincode);
    setInvoice(cleanValues.Invoice);
    setBuyerInvoiceId(cleanValues.buyerInvoiceId);
    setErrors({});
  };
  const [buyerRecord, setBuyerRecord] = React.useState(buyer);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(Buyer, id) : buyer;
      setBuyerRecord(record);
    };
    queryData();
  }, [id, buyer]);
  React.useEffect(resetStateValues, [buyerRecord]);
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
          await DataStore.save(
            Buyer.copyOf(buyerRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "BuyerUpdateForm")}
    >
      <TextField
        label="Phone numbe"
        isRequired={false}
        isReadOnly={false}
        defaultValue={phone_numbe}
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
        defaultValue={name}
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
        defaultValue={address}
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
        defaultValue={city}
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
        defaultValue={pincode}
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
        defaultValue={buyerInvoiceId}
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
          children="Reset"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ResetButton")}
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
