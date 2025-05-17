import { Datagrid, List, TextField } from "react-admin";

export const UserList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="username" />
      {/* <TextField source="attribute" /> */}
      <TextField source="op" />
      <TextField source="value" />
    </Datagrid>
  </List>
);
