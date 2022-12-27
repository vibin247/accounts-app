/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Invoice } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function InvoiceUpdateForm(props) {
  const {
    id,
    invoice,
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
    invoice_number: undefined,
    buyer_phone: undefined,
    date: undefined,
    transport_charges: undefined,
    discount: undefined,
  };
  const [invoice_number, setInvoice_number] = React.useState(
    initialValues.invoice_number
  );
  const [buyer_phone, setBuyer_phone] = React.useState(
    initialValues.buyer_phone
  );
  const [date, setDate] = React.useState(initialValues.date);
  const [transport_charges, setTransport_charges] = React.useState(
    initialValues.transport_charges
  );
  const [discount, setDiscount] = React.useState(initialValues.discount);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...invoiceRecord };
    setInvoice_number(cleanValues.invoice_number);
    setBuyer_phone(cleanValues.buyer_phone);
    setDate(cleanValues.date);
    setTransport_charges(cleanValues.transport_charges);
    setDiscount(cleanValues.discount);
    setErrors({});
  };
  const [invoiceRecord, setInvoiceRecord] = React.useState(invoice);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(Invoice, id) : invoice;
      setInvoiceRecord(record);
    };
    queryData();
  }, [id, invoice]);
  React.useEffect(resetStateValues, [invoiceRecord]);
  const validations = {
    invoice_number: [],
    buyer_phone: [],
    date: [],
    transport_charges: [],
    discount: [],
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
          invoice_number,
          buyer_phone,
          date,
          transport_charges,
          discount,
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
            Invoice.copyOf(invoiceRecord, (updated) => {
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
      {...getOverrideProps(overrides, "InvoiceUpdateForm")}
    >
      <TextField
        label="Invoice number"
        isRequired={false}
        isReadOnly={false}
        defaultValue={invoice_number}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              invoice_number: value,
              buyer_phone,
              date,
              transport_charges,
              discount,
            };
            const result = onChange(modelFields);
            value = result?.invoice_number ?? value;
          }
          if (errors.invoice_number?.hasError) {
            runValidationTasks("invoice_number", value);
          }
          setInvoice_number(value);
        }}
        onBlur={() => runValidationTasks("invoice_number", invoice_number)}
        errorMessage={errors.invoice_number?.errorMessage}
        hasError={errors.invoice_number?.hasError}
        {...getOverrideProps(overrides, "invoice_number")}
      ></TextField>
      <TextField
        label="Buyer phone"
        isRequired={false}
        isReadOnly={false}
        defaultValue={buyer_phone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              invoice_number,
              buyer_phone: value,
              date,
              transport_charges,
              discount,
            };
            const result = onChange(modelFields);
            value = result?.buyer_phone ?? value;
          }
          if (errors.buyer_phone?.hasError) {
            runValidationTasks("buyer_phone", value);
          }
          setBuyer_phone(value);
        }}
        onBlur={() => runValidationTasks("buyer_phone", buyer_phone)}
        errorMessage={errors.buyer_phone?.errorMessage}
        hasError={errors.buyer_phone?.hasError}
        {...getOverrideProps(overrides, "buyer_phone")}
      ></TextField>
      <TextField
        label="Date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        defaultValue={date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              invoice_number,
              buyer_phone,
              date: value,
              transport_charges,
              discount,
            };
            const result = onChange(modelFields);
            value = result?.date ?? value;
          }
          if (errors.date?.hasError) {
            runValidationTasks("date", value);
          }
          setDate(value);
        }}
        onBlur={() => runValidationTasks("date", date)}
        errorMessage={errors.date?.errorMessage}
        hasError={errors.date?.hasError}
        {...getOverrideProps(overrides, "date")}
      ></TextField>
      <TextField
        label="Transport charges"
        isRequired={false}
        isReadOnly={false}
        defaultValue={transport_charges}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              invoice_number,
              buyer_phone,
              date,
              transport_charges: value,
              discount,
            };
            const result = onChange(modelFields);
            value = result?.transport_charges ?? value;
          }
          if (errors.transport_charges?.hasError) {
            runValidationTasks("transport_charges", value);
          }
          setTransport_charges(value);
        }}
        onBlur={() =>
          runValidationTasks("transport_charges", transport_charges)
        }
        errorMessage={errors.transport_charges?.errorMessage}
        hasError={errors.transport_charges?.hasError}
        {...getOverrideProps(overrides, "transport_charges")}
      ></TextField>
      <TextField
        label="Discount"
        isRequired={false}
        isReadOnly={false}
        defaultValue={discount}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              invoice_number,
              buyer_phone,
              date,
              transport_charges,
              discount: value,
            };
            const result = onChange(modelFields);
            value = result?.discount ?? value;
          }
          if (errors.discount?.hasError) {
            runValidationTasks("discount", value);
          }
          setDiscount(value);
        }}
        onBlur={() => runValidationTasks("discount", discount)}
        errorMessage={errors.discount?.errorMessage}
        hasError={errors.discount?.hasError}
        {...getOverrideProps(overrides, "discount")}
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
