
import { configureStore } from '@reduxjs/toolkit'
import fetchDatareducer from "./fetchproductslice"

export const store = configureStore({
  reducer: {
fetchData:fetchDatareducer
  },
})