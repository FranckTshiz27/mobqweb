import { createSlice } from "@reduxjs/toolkit";
import {
  addOrganizationAsync,
  getAllOrganizationsAsync,
  deleteOrganizationAsync
} from "./OrganizationAsyncQueries";

export const OrganizationSlice = createSlice({
  name: "organization",
  initialState: {
    isSaving: false,
    isSavingError: false,
    isSaved: false,
    isLoading:false,
    isLoadingError:false,
    isDeleting :false,
    isDeletingError :false,
    isDeleted :false,
    organizations: [],
  },

  reducers: {
    addOrganization: (state, action) => {
      state.organizations.push(...action.payload);
    },
  },
  extraReducers: {
    [addOrganizationAsync.pending]: (state, action) => {
      state.isSaving = true;
      state.isSaved = false;
      state.isSavingError = false;
    },

    [addOrganizationAsync.fulfilled]: (state, action) => {
      state.isSaving = false;
      state.isSaved = true;
      state.isSavingError = false;
      state.organizations.push(action.payload);
    },
    [addOrganizationAsync.rejected]: (state, action) => {
      state.isSaving = false;
      state.isSaved = false;
      state.isSavingError = true;
    },
    [getAllOrganizationsAsync.pending]: (state, action) => {
      state.isLoading = true;
      state.isLoadingError = false;
      
    },

    [getAllOrganizationsAsync.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isLoadingError = false;  
      state.allOrganizations =[]; 
      state.organizations=[];
      state.organizations.push(...action.payload);
    },
    [getAllOrganizationsAsync.rejected]: (state, action) => {
      state.isLoading = false;
      state.isLoadingError =true;
    },

    [deleteOrganizationAsync.fulfilled]: (state, action) => {
      state.isDeleting = false;
      state.isDeletingError = false;
      state.organizations=state.organizations.filter((organization)=>{
        return organization.id !== action.payload.id;
      })
    },
    [deleteOrganizationAsync.pending]: (state, action) => {
      state.isDeleting= true;
      state.isDeleted = false;
      state.isDeletingError =false;
    },
    [deleteOrganizationAsync.rejected]: (state, action) => {
      state.isDeleting = false;
      state.isDeletingError =true;
      state.isDeleting= false;
    }
  }
});

export const { addOrganization } = OrganizationSlice.actions;
export default OrganizationSlice.reducer;
