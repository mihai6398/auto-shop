import {Admin, Auth, Basket, DevicePage,Shop} from "./pages/PageMain";
import {ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "./utils/consts";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Element: <Admin/>
    },
    {
        path: BASKET_ROUTE,
        Element: <Basket/>
    },
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Element: <Shop/>
    },
    {
        path: LOGIN_ROUTE,
        Element: <Auth/>
    },
    {
        path: REGISTRATION_ROUTE,
        Element: <Auth/>
    },
    {
        path: DEVICE_ROUTE + '/:id',
        Element: <DevicePage/>
    },
]