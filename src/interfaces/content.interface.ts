/* eslint-disable prettier/prettier */
export interface Content {
    method: string;
    originalUrl: string;
    ip: string;
}

export interface Log {
  content: Content;
}