import routes from "./routes";
import {createBrowserRouter} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Details from "./components/Details";
import NewBook from "./components/NewBook";
const router = createBrowserRouter([
    {path:routes.web.dashboard, element:<Dashboard/>},
    {path:`${routes.web.books.index}/:bookId`, element:<Details/>},
    {path:routes.web.books.creation, element:<NewBook/>}
])
export default router;