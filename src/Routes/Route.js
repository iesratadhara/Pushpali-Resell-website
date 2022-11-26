import { createBrowserRouter } from "react-router-dom"
import Main from "../Layout/Main"
import AddCategory from "../Pages/AddCategory/AddCategory"
import AddProduct from "../Pages/AddProduct/AddProduct"
import Home from "../Pages/Home/Home"
import Login from "../Pages/Login/Login"
import Resister from "../Pages/Resister/Resister"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/resister',
                element: <Resister></Resister>,


            },
            {
               path:'/login',
               element:<Login></Login> 
            },
            {
                path:'/add-product',
                element:<AddProduct></AddProduct>
            },
            {
               path: '/add-category',
               element:<AddCategory></AddCategory>

            }
        ]

    }
])