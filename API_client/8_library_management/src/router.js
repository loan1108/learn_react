import routes from "./routes";
import {createBrowserRouter} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import UpdateBook from "./components/UpdateBook";
const router = createBrowserRouter([
    {path:routes.web.dashboard, element:<Dashboard/>},
    {path:`${routes.web.books.index}/:bookId`, element:<UpdateBook/>}
])
export default router;