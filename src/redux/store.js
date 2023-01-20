import { configureStore } from "@reduxjs/toolkit";
import Organization from "./organization/OrganizationSlice";
export const store = configureStore({
  reducer: {
     Organization
  },
});
