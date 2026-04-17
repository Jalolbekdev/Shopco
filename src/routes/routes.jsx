import { BasketPage, DetailsPage, HomePages ,NotFoundPage,ShopPage} from "../Pages";

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
        id:5,
        path:"*",
        element:<NotFoundPage/>
    },
    {
        id:6,
        path:"/details",
        element:<DetailsPage/>
    },
]