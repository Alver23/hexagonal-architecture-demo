// Dependencies
import axios, { AxiosInstance } from 'axios';

// Interceptors
import responseInterceptor from './interceptors/response';

const DEFAULT_TIMEOUT = 5000

export class Axios {
  private readonly http: AxiosInstance;

  constructor(configuration = {}) {
    this.http = axios.create(configuration);
  }

  instance(): AxiosInstance {
    this.http.interceptors.response.use(responseInterceptor());
    return this.http;
  }
}

export const axiosInstance: AxiosInstance = new Axios({
  timeout: DEFAULT_TIMEOUT,
  headers: { 'content-type': 'application/json' },
}).instance();
