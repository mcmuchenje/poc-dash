import { Admin, Resource } from "react-admin";
import { dataProvider } from "./dataProvider";
import { UserList } from "./components/Users/UserList";
import { UserShow } from "./components/Users/UserShow";
import { UserEdit } from "./components/Users/UserEdit";
import { UserCreate } from "./components/Users/UserCreate";
import UserIcon from "@mui/icons-material/People";
// import { Route } from "react-router-dom";
import { Layout } from "./Layout";
import { Dashboard } from "./components/Dashboard/Dashboard";

export const App = () => (
  <Admin dashboard={Dashboard} layout={Layout} dataProvider={dataProvider}>
    <Resource
      icon={UserIcon}
      name="users"
      list={UserList}
      show={UserShow}
      edit={UserEdit}
      create={UserCreate}
    />
  </Admin>
);
