import {createBrowserRouter} from "react-router-dom";
import routes from "./routes";
import Dashboard from "./components/Dashboard";
import Creation from "./components/Creation";
import Details from "./components/Details";
const router = createBrowserRouter([
    {path:routes.web.dashboard, element:<Dashboard/>},
    {path:routes.web.creation,element:<Creation/>},
    {path:`${routes.web.detail}/:userId`,element:<Details/>}
])
export default router