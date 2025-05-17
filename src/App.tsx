import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { UserList } from "./components/Users/UserList";
import { UserShow } from "./components/Users/UserShow";
import { UserEdit } from "./components/Users/UserEdit";
import { UserCreate } from "./components/Users/UserCreate";

export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="users"
      list={UserList}
      show={UserShow}
      edit={UserEdit}
      create={UserCreate}
    />
  </Admin>
);
