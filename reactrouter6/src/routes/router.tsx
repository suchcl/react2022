import { RouteObject } from "react-router-dom";
import Home from '@/pages/Home';
import MessageOutletContainer from "@/pages/Message/MessageOutletContainer";
import MessageDetail from "@/pages/Message/MessageDetail";
import PageNotFound from "@/pages/Error/PageNotFound";

const router: RouteObject[] = [
    {
        path: '/home',
        element: <Home />
    },
    {
        path: "/messageOutlet",
        element: <MessageOutletContainer />,
        children: [
            {
                path: ':id',
                element: <MessageDetail />
            }
        ]
    },
    {
        path: "*",
        element: <PageNotFound />
    }
];


export default router;