import routes from "./routes";
import {createBrowserRouter} from "react-router-dom"; 
import Home from "./Modules/Home";
import Buyer from "./Modules/Buyer";
import Details from "./Modules/Details";
import Payment from "./Modules/Payment";
const router = createBrowserRouter([
    {path:routes.web.dashboard, element:<Home/>},
    {path:`${routes.web.books.book}/:bookId`, element:<Details/>},
    {path:routes.web.user, element:<Buyer/>},
    {path:routes.web.payment, element:<Payment/>}
])
export default router;