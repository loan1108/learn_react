import routes from "./routes";
import Login from "./Modules/Login";
import UsersList from "./Modules/UsersList";
import {createBrowserRouter} from "react-router-dom";
const router = createBrowserRouter([
    {path:routes.web.login,element:<Login/>},
    {path:routes.web.dashboard,element:<UsersList/>}
])
export default router;