import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import handleAxiosResponseError from "./utils/handleAxiosResponseError";
import handleAxiosResponseSuccess from "./utils/handleAxiosResponseSuccess";

const Http = axios.create();

class Service {
  protected static Http = Http;
  protected static getData = getData;

  public static setBaseURL(baseURL: string) {
    this.Http.defaults.baseURL = baseURL;
  }

  public static setRequestInterceptors(
    onFulfilled: (
      request: AxiosRequestConfig
    ) => AxiosRequestConfig | Promise<AxiosRequestConfig>,
    onRejected?: (error: any) => any
  ) {
    Http.interceptors.request.use(onFulfilled, onRejected);
  }

  public static setResponseInterceptors(
    onFulfilled: (
      response: AxiosResponse
    ) => AxiosResponse | Promise<AxiosResponse>,
    onRejected?: (error: any) => any
  ) {
    Http.interceptors.response.use(onFulfilled, onRejected);
  }
}

function getData<T>(res: AxiosResponse<T>) {
  return res.data;
}

Http.defaults.baseURL = "http://localhost:8080";

Http.interceptors.response.use(
  handleAxiosResponseSuccess,
  handleAxiosResponseError
);

export default Service;
