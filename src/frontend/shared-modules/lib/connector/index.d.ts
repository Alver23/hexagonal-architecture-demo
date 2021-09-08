import { AxiosInstance, AxiosRequestConfig } from 'axios';
export declare class Connector {
    private readonly http;
    constructor(http: AxiosInstance);
    get<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
    post<T>(url: string, body?: unknown, config?: AxiosRequestConfig): Promise<T>;
    put<T>(url: string, body: unknown, config?: AxiosRequestConfig): Promise<T>;
    delete<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
}
