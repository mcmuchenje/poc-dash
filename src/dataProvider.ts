import jsonServerProvider from "ra-data-json-server";

export const dataProvider = jsonServerProvider(
  "http://159.223.30.242:8080/api",
);
