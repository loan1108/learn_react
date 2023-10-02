import routes from "./routes";
import {createBrowserRouter} from "react-router-dom";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";

const router = createBrowserRouter([
    {path: routes.web.dashboard, element:<Users/>},
    {path:`${routes.web.users.index}/:userId`, element :<UserDetails/>}
])

export default router;