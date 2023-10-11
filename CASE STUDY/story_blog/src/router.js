import {createBrowserRouter} from "react-router-dom";
import routes from "./routes";
import Login from "./Modules/Login";
import Home from "./Modules/Home";
import NewCreation from "./Modules/NewCreation";
import PostEdition from "./Modules/PostEdition";
const router = createBrowserRouter([
    {path:routes.web.login,element:<Login/> },
    {path:routes.web.home, element:<Home/>},
    {path:`${routes.web.post.edit}/:postId`, element:<PostEdition/>},
    {path:routes.web.post.newPost, element:<NewCreation/>}
])
export default router