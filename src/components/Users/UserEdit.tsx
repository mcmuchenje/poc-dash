import { Edit, SimpleForm, TextInput } from "react-admin";

export const UserEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="username" />
      {/* <TextField source="attribute" /> */}
      <TextInput source="op" />
      <TextInput source="value" />
    </SimpleForm>
  </Edit>
);
