import { createBrowserRouter } from "react-router-dom";
import Detail from "./Components/Detail";
import Payment from "./Components/Payment";
import Dashboard from "./Components/Home/Dashboard";
import YourCart from "./Components/YourCart";
import routes from "./routes";
const router = createBrowserRouter([
  { path: routes.web.cart, element: <YourCart/> },
  { path: routes.web.home, element: <Dashboard/> },
  { path: `${routes.web.detail}/:productId`, element: <Detail/> },
  { path: routes.web.payment, element: <Payment/> },
]);
export default router;