import { Admin, Resource, ListGuesser } from "react-admin";
import { Layout } from "./Layout";
import jsonServerProvider from "ra-data-json-server";


import { authProvider } from './authProvider';

export const App = () => <Admin authProvider={authProvider} dataProvider={jsonServerProvider("https://jsonplaceholder.typicode.com")} layout={Layout}>
    <Resource name="posts" list={ListGuesser} />
</Admin>;
