import { HomePage, LoginPage } from "./pages";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element:<HomePage/>,
  },
  {
    path: "/login",
    element:<LoginPage/>,
  },
]);
function App() {
  return (
    <RouterProvider router={router} />);
}

export default App;
