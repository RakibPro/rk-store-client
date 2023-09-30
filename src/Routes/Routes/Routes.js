import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../../Layout/MainLayout';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import SignUp from '../../Pages/SignUp/SignUp';
import Inventory from '../../Pages/Inventory/Inventory';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import NotFound from '../../Pages/Shared/NotFound/NotFound';
import InventoryDetails from '../../Pages/Inventory/InventoryDetails';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },

            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/signup',
                element: <SignUp />,
            },
            {
                path: '/inventory',
                element: <Inventory />,
            },
            {
                path: '/inventory/:id',
                element: (
                    <PrivateRoute>
                        <InventoryDetails />
                    </PrivateRoute>
                ),
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/inventory/${params.id}`),
            },
        ],
    },
    {
        path: '*',
        element: <NotFound />,
    },
]);
