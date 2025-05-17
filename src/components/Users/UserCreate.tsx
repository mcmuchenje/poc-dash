import { Create, SimpleForm, email, TextInput } from "react-admin";

const validateEmail = email();

export const UserCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput
        label="Email"
        type="email"
        source="username"
        validate={validateEmail}
      />
      <TextInput disabled source="attribute" />
      <TextInput source="op" disabled defaultValue={":="} />
      <TextInput
        source="value"
        type="password"
        disabled
        defaultValue={"LrYx4s8QXDAnBwG9WC7emc"}
      />
    </SimpleForm>
  </Create>
);
