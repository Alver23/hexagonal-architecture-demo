import { AxiosInstance } from 'axios';
export declare class Axios {
    private readonly http;
    constructor(configuration?: {});
    instance(): AxiosInstance;
}
export declare const axiosInstance: AxiosInstance;
