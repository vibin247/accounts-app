import { configureStore } from '@reduxjs/toolkit'
import InvoiceDetailsReducer from './InvoiceDetailsReducer'

export const store = configureStore({
  reducer: {
    invoiceReducer : InvoiceDetailsReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch