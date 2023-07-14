import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../pages/dashboard/page";
import Government from "../pages/government/page";
import CommitmentNote from "../pages/commitmentNote/page";
import Bulletins from "../pages/Bulletins/page";
import Biddings from "../pages/biddings/page";

const Router = new createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/biddings",
        element: <Biddings />,
      },
      {
        path: "/government",
        element: <Government />,
      },
      {
        path: "/commitment-note",
        element: <CommitmentNote />,
      },
      {
        path: "/bulletins",
        element: <Bulletins />,
      },
    ],
  },
]);
export default Router;
