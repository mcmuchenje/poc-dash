import { fetchUtils } from 'react-admin';
import jsonServerProvider from "ra-data-json-server";

const httpClient = (url: string, options: any = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }

    const token = localStorage.getItem('token');
    // add your own headers here
    options.headers.set('x-access-token', token);
    return fetchUtils.fetchJson(url, options);
};

export const dataProvider = jsonServerProvider(
  "http://159.223.30.242:8080/api",
  httpClient
);
