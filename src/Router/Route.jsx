import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Products from "../Pages/Products";

import ViewOneProduct from "../Pages/ViewOneProduct";


    const myCreateRouter = createBrowserRouter([
        {
          path: "/",
          element: <MainLayout></MainLayout>,
          children: [
            {
              path: "/",
              element:<Home></Home>
            },
            {
              path: "/products",
              element: <Products></Products>,
              loader:()=>fetch(`https://dummyjson.com/products`)
            },
          
            {
              path:"/products/:id",
              element: <ViewOneProduct></ViewOneProduct>,
              loader:(object)=>fetch(`https://dummyjson.com/products/${object.params.id}`)
              
            }

          ],
        },
      ]);

export default myCreateRouter;