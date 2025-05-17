import { Edit, email, SimpleForm, TextInput } from "react-admin";

const validateEmail = email();

export const UserEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput
        label="Email"
        type="email"
        source="username"
        validate={validateEmail}
      />
      <TextInput disabled source="attribute" />
      <TextInput disabled source="op" />
      <TextInput disabled type="password" source="value" />
    </SimpleForm>
  </Edit>
);
