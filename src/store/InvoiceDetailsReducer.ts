import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface InvoiceDetailsState {
  invoiceDetails?: any
}

const initialState: InvoiceDetailsState = {}

export const counterSlice = createSlice({
  name: 'invoiceDetails',
  initialState,
  reducers: {
    storeInvoiceDetails: (state, action : PayloadAction<InvoiceDetailsState>) => {
      state.invoiceDetails = action.payload
    }
  },
})

export const { storeInvoiceDetails } = counterSlice.actions;
export default counterSlice.reducer;