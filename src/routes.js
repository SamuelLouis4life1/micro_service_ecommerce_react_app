import { Routes, Route } from 'react-router-dom';
import Home from '../src/pages/public/home/';
import RequiredAuth from './utils/requiredAuth';
import NotFound from '../src/pages/public/errors/notFound';
import Login from '../src/pages/public/home';
import MyAccount from '../src/pages/customer/account';

export default function EcommerceRoutes() {
    return (
        <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route element={<RequiredAuth roles={["Customer"]} />}>
                <Route path='/dashboard' element={<MyAccount />} />
            </Route>
            <Route element={<NotFound />} />

        </Routes>
    )
}