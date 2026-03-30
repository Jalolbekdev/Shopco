import BasketPage from "../Pages/BasketPage/BasketPage";
import NotFound from "../Pages/NotFound";
import ShopPage from "../Pages/ShopPage/ShopPage";
import Login from "../Pages/Login/Login";
import { HomePages } from "../Pages/HomePages";
import DetailsPage from "../Pages/DetailsPage/DetailsPage";


export const routes=[
    {
        id:1,
        path:"/",
        element:<HomePages/>
    },
    {
        id:2,
        path:"/shop",
        element:<ShopPage/>
    },
    {
        id:3,
        path:"/basket",
        element:<BasketPage/>
    },
    {
        id:4,
        path:"/login",
        element:<Login/>
    },
    {
        id:5,
        path:"*",
        element:<NotFound/>
    },
    {
        id:6,
        path:"/details",
        element:<DetailsPage/>
    },
]