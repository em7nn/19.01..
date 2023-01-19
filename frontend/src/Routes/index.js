import { createBrowserRouter } from "react-router-dom";
import AddPage from "../Components/AddPage";
import DetailPage from "../Components/DetailPage";
import Products from "../Components/Products";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Products/>,
    },
    {
        path: "/detailpage/:id",
        element: <DetailPage/>,
    },
    {
        path: "/addpage",
        element: <AddPage/>,
      },
  ]);

  export { router }