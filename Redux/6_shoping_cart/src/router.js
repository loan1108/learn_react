import { createBrowserRouter } from "react-router-dom";
import Detail from "./Modules/Detail";
import Payment from "./Modules/Payment/Payment"
import Dashboard from "./Modules/Home/Dashboard";
import YourCart from "./Modules/YourCart";
import routes from "./routes";
const router = createBrowserRouter([
  { path: routes.web.cart, element: <YourCart/> },
  { path: routes.web.home, element: <Dashboard/> },
  { path: `${routes.web.detail}/:productId`, element: <Detail/> },
  { path: routes.web.payment, element: <Payment/> },
]);
export default router;