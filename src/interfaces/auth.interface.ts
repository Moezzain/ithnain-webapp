export interface AuthState {
  patient: any;
  isAuth: boolean;
  id: string;
  token: string;
  loading: boolean;
  error: boolean;
  isCodeSent: boolean;
  isExisting: boolean;
  verificationCode: string;
  isInDatabase: boolean;
  isPatientExist: boolean;
  loadingPatientExist: boolean;
  errorPatientExist: string;
  userName: string;
}

export interface CreatePatientDto {
  name: string;
  email?: string;
  phone: string;
  referralCode: string | null;
  navigate: any;
}
