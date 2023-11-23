export interface InvoiceState {
  id: string;
  loading: boolean;
  error: boolean;
  invoiceUrl: string;
  verifyInvoiceStatus: string;
  invoice: any;
}

export interface CreateInvoiceDto {
  intensityId: string;
  description: string;
}

export interface verifyInvoiceDto {
  tranRef: null | string;
  order_reference_id: null | string;
  order_id: null | string;
  ref: null | string;
  toggleModalSuccess: any;
  toggleModalFailed: any;
  navigate: any;
}
