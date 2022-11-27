import { createBrowserRouter } from "react-router-dom"
import DashboardLayout from "../Layout/DashboardLayout"
import Main from "../Layout/Main"
import AddCategory from "../Pages/AddCategory/AddCategory"
import AddProduct from "../Pages/AddProduct/AddProduct"
import Dashboard from "../Pages/Dashboard/Dashboard"
import Home from "../Pages/Home/Home"
import Login from "../Pages/Login/Login"
import Myproduct from "../Pages/Myproduct/Myproduct"
import ProductCategory from "../Pages/ProductCategory/ProductCategory"
import Resister from "../Pages/Resister/Resister"
import PrivateRoute from "./PrivateRoute"

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
                path: '/resister',
                element: <Resister></Resister>,


            },
            {
                path: '/login',
                element: <Login></Login>
            },
            
            {
                path: '/category/:name',
                element: <PrivateRoute><ProductCategory></ProductCategory></PrivateRoute>,
                loader:({params})=> fetch(`http://localhost:5000/category/${params.name}`),
            
            },
            {
                path: '/add-category',
                element: <AddCategory></AddCategory>

            }
        ]

    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/add-product',
                element:  <AddProduct></AddProduct> 
            },
            {
                path:'/dashboard/my-product',
                element:<Myproduct></Myproduct>
            }

        ]
    }
])