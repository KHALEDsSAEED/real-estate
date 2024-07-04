
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./pages/layout/layout";
import ListPage from "./pages/listPage/listPage";
import HomePage from "./pages/homePage/homePage";
import singlePage from "./pages/singlePage/singlePage";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout />
      ),
      children: [
        {
          path: "/",
          element: <HomePage />
        },
        {
          path: "/list",
          element: <ListPage />
        },
        {
          path: "/:id",
          element: <singlePage />
        },
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App