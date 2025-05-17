import { Datagrid, List, TextField } from "react-admin";

export const UserList = () => (
  <List>
    <Datagrid>
      {/* <TextField source="id" /> */}
      <TextField label="Email" source="username" />
      <TextField source="attribute" />
      <TextField source="op" />
      <TextField source="value" />
    </Datagrid>
  </List>
);
