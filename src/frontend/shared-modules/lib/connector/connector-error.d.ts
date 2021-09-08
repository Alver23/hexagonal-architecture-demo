import { AxiosError } from 'axios';
import { IConnectorResponse } from './interfaces';
export declare class ConnectorError implements IConnectorResponse {
    readonly status: number;
    readonly message: string;
    constructor(status: number, message: string);
}
export declare const connectorError: (error: AxiosError) => IConnectorResponse;
