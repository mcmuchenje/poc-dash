import { Create, SimpleForm, TextInput } from "react-admin";

export const UserCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="username" />
      {/* <TextField source="attribute" /> */}
      <TextInput source="op" />
      <TextInput source="value" />
    </SimpleForm>
  </Create>
);
