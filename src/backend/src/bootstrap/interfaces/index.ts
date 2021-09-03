export interface IBootstrap {
  initialize(): Promise<void | string | number | unknown>;
}

export interface IDatabase {
  disconnect(): void;
  initialize(): Promise<any>;
}
