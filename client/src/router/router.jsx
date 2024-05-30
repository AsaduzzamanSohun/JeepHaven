import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/root/Root";
import Home from "../pages/home/Home";
import Vehicles from "../pages/vehicles/Vehicles";
import ShippingTools from "../pages/tools/ShippingTools";
import Electrification from "../pages/electrifications/Electrification";
import JeepLife from "../pages/jeeplife/JeepLife";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/vehicles',
                element: <Vehicles></Vehicles>,
                loader: () => fetch('jeep.json')
            },
            {
                path: '/shipping-tools',
                element: <ShippingTools></ShippingTools>
            },
            {
                path: '/electrification',
                element: <Electrification></Electrification>
            },
            {
                path: '/jeep-life',
                element: <JeepLife></JeepLife>
            }
        ]
    }
]);


export default router;