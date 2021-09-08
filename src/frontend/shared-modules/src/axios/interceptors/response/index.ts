// Dependencies
import { AxiosResponse } from 'axios';

const responseInterceptor = () => (response: AxiosResponse): any => response.data;

export default responseInterceptor;