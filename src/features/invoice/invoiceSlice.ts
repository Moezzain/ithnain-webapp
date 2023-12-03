import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IbApi } from "../../network";
import { RootState } from "../../app/store";
import {
  CreateInvoiceDto,
  InvoiceState,
  verifyInvoiceDto,
} from "../../interfaces/invoice.interface";
import { setSignUpStatusAction } from "../auth/authSlice";

const api = new IbApi();

const initialState: InvoiceState = {
  id: "",
  invoice: {},
  loading: false,
  error: false,
  invoiceUrl: "",
  verifyInvoiceStatus: "",
};

export const createInvoiceAction = createAsyncThunk(
  "plan/createInvoice",
  async (
    { intensityId, description, patientEmail }: CreateInvoiceDto,
    thunkApi,
  ) => {
    try {
      const { auth } = thunkApi.getState() as RootState;
      const IBconfig = import.meta.env;
      console.log("auth");
      console.log(auth.patient.id);

      const response = await api.post(`/invoices`, {
        patientId: auth.patient.id,
        topics: [{ id: "DEFAULT" }],
        description,
        intensityId,
        originFromPatient: true,
        returnUrl: IBconfig.VITE_returnUrl,
        patientEmail: patientEmail ? patientEmail : null,
      });
      if (!response) {
        return thunkApi.rejectWithValue("Server error");
      }
      if (response?.status === 201) {
        console.log("response createInvoiceAction \n");
        console.log(response);
        const invoice = JSON.parse(response.data.invoice);
        // send get URL by dispatching invoice details to getInvoiceUrlAction
        thunkApi.dispatch(setInvoiceIdAction(invoice.id));
        thunkApi.dispatch(setInvoiceUrlAction(response.data.invoiceUrl));
        setTimeout(() => {
          window.location.replace(response.data.invoiceUrl);
        }, 500);
        return invoice;
      }
      return thunkApi.rejectWithValue(response);
    } catch (error: any) {
      if (error.response) {
        return thunkApi.rejectWithValue(error.response);
      }
    }
  },
);

export const getInvoiceAction = createAsyncThunk(
  "invoice/getInvoiceUrl",
  async ({ id }: { id: string }, thunkApi) => {
    try {
      const { auth } = thunkApi.getState() as RootState;
      const response = await api.get(
        `/invoices?get=invoice&invoiceId=${id}&patientId=${auth.patient.id}`,
      );
      if (!response) {
        return thunkApi.rejectWithValue("Server error");
      }
      if (response.data?.error) {
        return thunkApi.rejectWithValue(response.data.error);
      } else if (response.data?.status === "successful") {
        //forward patient to url page response.data.invoiceUrl
        thunkApi.dispatch(setSignUpStatusAction("needCoach"));
        return response.data;
      }
    } catch (error: any) {
      if (error.response) {
        return thunkApi.rejectWithValue(error.response);
      }
    }
  },
);

// check payment
export const verifyPaymentAction = createAsyncThunk(
  "invoice/verifyPaymentAction",
  async (
    {
      tranRef,
      order_reference_id,
      order_id,
      ref,
      toggleModalSuccess,
      toggleModalFailed,
      navigate,
    }: verifyInvoiceDto,
    thunkApi,
  ) => {
    try {
      const response = await api.post(`/referral?ref=${ref}`, {
        tranRef,
        order_reference_id,
        order_id,
        fromWebapp: true,
      });
      if (!response) {
        return thunkApi.rejectWithValue("Server error");
      }
      if (response.data?.message !== "successful") {
        return thunkApi.rejectWithValue(response.data?.message);
      } else if (response.data) {
        if (response.data?.message === "successful") {
          // trigger successful animation
          toggleModalSuccess();
          setTimeout(() => {
            navigate("/invoice");
          }, 1500);
        } else toggleModalFailed();
        //add invoice again after to refresh
        return response.data;
      }
    } catch (error: any) {
      if (error?.response) {
        return thunkApi.rejectWithValue(error.response);
      }
    }
  },
);

export const invoiceSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {
    setInvoiceIdAction: (state, action) => {
      state.id = action.payload;
    },
    setInvoiceUrlAction: (state, action) => {
      state.invoiceUrl = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createInvoiceAction.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(createInvoiceAction.fulfilled, (state, action) => {
        state.loading = false;
        state.invoice = action.payload;
      })
      .addCase(createInvoiceAction.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(getInvoiceAction.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getInvoiceAction.fulfilled, (state, action) => {
        state.loading = false;
        state.invoice = action.payload;
      })
      .addCase(getInvoiceAction.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(verifyPaymentAction.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(verifyPaymentAction.fulfilled, (state) => {
        state.loading = false;
        state.verifyInvoiceStatus = "successful";
      })
      .addCase(verifyPaymentAction.rejected, (state) => {
        state.loading = false;
        state.error = true;
        state.verifyInvoiceStatus = "failed";
      });
  },
});

export const { setInvoiceIdAction, setInvoiceUrlAction } = invoiceSlice.actions;
export default invoiceSlice.reducer;
