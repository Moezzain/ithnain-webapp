import axios, { AxiosInstance, AxiosResponse } from "axios";
// import { store } from "../app/store";

const IBconfig = import.meta.env;

export class IbApi {
  private readonly instance: AxiosInstance;
  constructor() {
    console.log("IBconfig");
    console.log(IBconfig);

    this.instance = axios.create({
      baseURL: IBconfig.VITE_url,
      timeout: 10000,
      headers: {
        Authorization: `Bearer ${`${IBconfig.VITE_token}`}`,
      },
      params: { thirdPartyId: IBconfig.VITE_thirdPartyId },
    });

    // Add a request interceptor (before any request)
    this.instance.interceptors.request.use((req) => {
      // const token = store.getState().auth?.token;
      // console.log('token');
      // console.log(token);
      
      // if (token) {
        req.headers.Authorization = `Bearer ${IBconfig.VITE_token}`;
      // }
      // if (userId && !req.params?.patientId) {
      //   req.params = {...req.params, patientId: userId};
      // }
      if (!req.headers['Content-Type']) {
        req.headers['Content-Type'] = 'application/json';
      }
      req.headers.Accept = 'application/json';

      return req;
    });

  }

  /** http methods */
  async get(url: string) {
    try {
      const response: AxiosResponse = await this.instance.get(url);
      return this.responseBody(response);
    } catch (error) {
      return this.catchError(error);
    }
  }
  async post(url: string, body: unknown) {
    try {
      const response: AxiosResponse = await this.instance.post(url, body);
      return this.responseBody(response);
    } catch (error) {
      return this.catchError(error);
    }
  }
  async patch(url: string, body: unknown) {
    try {
      const response: AxiosResponse = await this.instance.patch(url, body);
      return this.responseBody(response);
    } catch (error) {
      return this.catchError(error);
    }
  }
  private responseBody(response: AxiosResponse) {
    console.log(
      `Receive a response from ${response.config} and Data is: ${response.data}`,
    );

    return {
      data: response.data,
      status: response.status,
    };
  }
  private catchError(error: any) {
    if (error.response) {
      // Request made and server responded
      console.error(`catch an error ${JSON.stringify(error.response.data)}`);
      if (error.response.data.error === "patient does not exist") {
        console.log("patient doesn't exists");
        return error.response;
      }
      if (error.response.data.error === "user does not exist") {
        console.log("user doesn't exists");
        return error.response;
      }
      // throw console.error(error.response.data, error.response.status);
    } else if (error.request) {
      // The request was made but no response was received
      console.error(`catch an error ${error.request}`);
      // throw console.error(error.request, 500);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error(`catch an error ${error.message}`);
      // throw console.error(error.message, 500);
    }
  }
}
