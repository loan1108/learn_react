import{createBrowserRouter} from "react-router-dom"; 
import routes from "./routes";
import Dashboard from "./components/Dashboard";
import InforUpdation from "./components/InforUpdation";
import UserCreation from "./components/UserCreation";
const router = createBrowserRouter([
    {path:routes.web.dashboard, element:<Dashboard/>},
    {path:`${routes.web.users.index}/:userId`, element:<InforUpdation/>},
    {path:routes.web.users.creation, element:<UserCreation/>}
])
export default router