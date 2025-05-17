import { Show, SimpleShowLayout, TextField } from "react-admin";

export const UserShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField label="Email" source="username" />
      <TextField source="attribute" />
      <TextField source="op" />
      <TextField source="value" />
    </SimpleShowLayout>
  </Show>
);
