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

export const editOrganizationAsync = createAsyncThunk(
  "organization/editOrganizationAsync",
  async (payload) => {
    try {
      const data = await (await ApiBase.patch(`organization/${payload.id}`, payload)).data;
      if (data) {
        alert("Modification éffectuée avec succès !");
        return data;
      }
    } catch (error) {
      alert(`une erreur innatendu est survenue lors de la modification ${JSON.stringify(error)}`);
    }
  }
);

export const getAllOrganizationsAsync = createAsyncThunk(
  "organization/getAllOrganizationsAsync",
  async ({limit,page}) => {
    try {
      console.log(`organization/paginate/${page}/${limit} `.repeat(30));
      const organizations = await (await ApiBase.get(`organization/paginate/${page}/${limit}`)).data;
     
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


export const filterOrganizationAsync = createAsyncThunk(
  "organization/filterOrganizationAsync",
  async (payload) => {
    try {
      if (""===payload) payload="undefined"
      const data = await (await ApiBase.get(`organization/filter/${payload}`)).data;
      if (data) {
        return data;
      }
    } catch (error) {
      alert(`une erreur innatendu est survenue lors du filtrage des organisations ${JSON.stringify(error)}`);
    }
  }
);

