import { AxiosResponse } from 'axios';
declare const responseInterceptor: () => (response: AxiosResponse) => any;
export default responseInterceptor;
