import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IbApi } from "../../network";
import { AuthState, CreatePatientDto } from "../../interfaces/auth.interface";
import { RootState } from "../../app/store";

const api = new IbApi();

const initialState: AuthState = {
  patient: {},
  isAuth: false,
  id: "",
  token: "",
  loading: false,
  error: false,
  isCodeSent: false,
  isExisting: false,
  verificationCode: "",
  isInDatabase: false,
  isPatientExist: false,
  loadingPatientExist: false,
  errorPatientExist: "",
  userName: "",
};

export const isPatientExistAction = createAsyncThunk(
  "auth/isExist",
  async (
    {
      name,
      email,
      phone,
      navigate,
    }: { name: string; email?: string; phone: string; navigate: any },
    { dispatch, rejectWithValue },
  ) => {
    try {
      const response = await api.post("/isExist", { phoneNumber: phone });
      if (!response) {
        return rejectWithValue("");
      }
      if (response?.status === 201 || response?.status === 404) {
        if (response?.data.patient) {
          // sendOtp and go to otp page
          dispatch(verifyPhoneAction({ name, phone }));
          navigate(`/otp`, { state: { signUp: false } });
          return { ...response?.data.patient, email };
        } else if (response?.data.error) {
          // send otp with paramter sign up
          dispatch(verifyPhoneAction({ name, phone }));
          navigate(`/otp`, { state: { signUp: true } });
          return {
            error: response?.data.error,
            signUp: true,
            patientName: name,
            email,
            patientPhone: "+966" + phone,
          };
        }
      } else {
        return rejectWithValue(response);
      }
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

export const verifyPhoneAction = createAsyncThunk(
  "auth/verifyPhone",
  async ({ phone }: { name: string; phone: string }, { rejectWithValue }) => {
    try {
      const response = await api.post("/verifyPhone", { phoneNumber: phone });
      if (!response) {
        return rejectWithValue("");
      }
      if (response?.status === 201) {
        return response?.data.patient;
      } else {
        return rejectWithValue(response);
      }
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

export const createPatientAction = createAsyncThunk(
  "patient/createPatientAction",
  async (
    { name, email, phone, referralCode, navigate }: CreatePatientDto,
    { rejectWithValue, dispatch },
  ) => {
    const response = await api.post("/patient", {
      name: name + " (جوهرجي)",
      phone,
      referralCode,
      referralMedium: "Web Portal",
    });
    if (!response) {
      return rejectWithValue("");
    }
    if (response?.data?.error) {
      return rejectWithValue(response.data.error);
    } else if (response.data) {
      const { patient: unparsedPatient, isExisting } = response.data;
      const patient = JSON.parse(unparsedPatient);
      dispatch(setUserIdAction(patient.id));
      dispatch(setTokenAction(patient.token));
      if (!email || email === "") navigate("/choosePlan");
      else navigate("/chooseDoctorPlan");
      return { patient: { ...patient, email }, isExisting };
    }
    return rejectWithValue(response?.data?.statusText);
  },
);

export const setSignUpStatusAction = createAsyncThunk(
  "auth/setSignUpStatus",
  async (signUpStatus: string, thunkApi) => {
    try {
      const { auth } = thunkApi.getState() as RootState;
      const response = await api.patch("/patient", {
        patientId: auth.patient.id,
        signUpStatus,
      });
      if (response?.status === 201) {
        return signUpStatus;
      } else {
        return thunkApi.rejectWithValue(signUpStatus);
      }
    } catch (error: any) {
      if (error.response) {
        return thunkApi.rejectWithValue(error.response);
      }
    }
  },
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserIdAction: (state, action) => {
      state.id = action.payload;
    },
    setTokenAction: (state, action) => {
      state.token = action.payload;
    },
    setSuccessAuthAction: (state) => {
      state.isAuth = true;
    },
    setLoadingAction: (state, action) => {
      state.loadingPatientExist = action.payload;
    },
    clearAuthAction: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(verifyPhoneAction.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(verifyPhoneAction.fulfilled, (state, action) => {
        state.loading = false;
        state.isCodeSent = true;
        state.verificationCode = action.payload.chatId;
        state.isInDatabase = action.payload.isExisting;
      })
      .addCase(verifyPhoneAction.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(isPatientExistAction.pending, (state) => {
        state.loadingPatientExist = true;
        state.errorPatientExist = "";
        state.isPatientExist = false;
      })
      .addCase(isPatientExistAction.fulfilled, (state, action) => {
        state.loadingPatientExist = false;
        state.isPatientExist = action.payload.isPatientExist;
        state.userName = action.payload.patientName;
        state.patient = action.payload;
      })
      .addCase(isPatientExistAction.rejected, (state, action: any) => {
        state.loadingPatientExist = false;
        if (
          action?.payload &&
          action?.payload?.data &&
          action.payload?.data?.error
        ) {
          state.errorPatientExist = action.payload?.data?.error;
        } else {
          state.errorPatientExist = "Server error";
        }
      })
      .addCase(createPatientAction.pending, (state) => {
        state.loadingPatientExist = true;
        state.error = false;
      })
      .addCase(createPatientAction.fulfilled, (state, action) => {
        const { isExisting, patient } = action.payload;
        if (isExisting) {
          state.isExisting = isExisting;
        }
        state.loadingPatientExist = false;
        state.patient = patient;
      })
      .addCase(createPatientAction.rejected, (state) => {
        state.loadingPatientExist = false;
        state.error = true;
      });
  },
});

export const {
  setUserIdAction,
  setTokenAction,
  setLoadingAction,
  setSuccessAuthAction,
  clearAuthAction,
} = authSlice.actions;
export default authSlice.reducer;
