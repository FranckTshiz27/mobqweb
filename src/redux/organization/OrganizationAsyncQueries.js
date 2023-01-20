import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiBase } from "../../apiBaseUrl";

export const addOrganizationAsync = createAsyncThunk(
  "organization/addOrganizationAsync",
  async (payload) => {
    const organization = {
      ...payload
    };
    try {
      const data = await (await ApiBase.post("organization", organization)).data;
      if (data) {
        return data;
      }
    } catch (error) {
      alert(`une erreur innatendu est survenue${JSON.stringify(error)}`);
    }
  }
);

export const getAllOrganizationsAsync = createAsyncThunk(
  "organization/getAllOrganizationsAsync",
  async () => {
    try {
      const organizations = await (await ApiBase.get(`organization`)).data;

      console.log(" getAllOrganizationsAsync  ",organizations);
      return organizations;
    } catch (error) {
      alert("une erreur innatendu est survenue lors du chargement des organisations");
    }
  }
);

export const deleteOrganizationAsync = createAsyncThunk(
  "organization/deleteOrganizationAsync",
  async (payload) => {
    const id = payload;
    try {
      const data = await (await ApiBase.delete(`organization/${id}`)).data;
      if (data) {
        return data;
      }
    } catch (error) {
      alert(`une erreur innatendu est survenue${JSON.stringify(error)}`);
    }
  }
);

