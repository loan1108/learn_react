import routes from "./routes";
import {createBrowserRouter} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import NewBook from "./components/NewBook";
const router = createBrowserRouter([
    {path:routes.web.dashboard, element:<Dashboard/>},
    {path:routes.web.book.index,element:<NewBook/>}
])
export default router;