import {Routes, Route } from 'react-router-dom';
import Home from '../pages/public/home';
import RequiredAuth from './requiredAuth';
import NotFound from '../pages/public/errors/notFound';
import Login from '../pages/public/auth/login';
import MyAccount from '../pages/customer/MyAccount';
import AdminArea from '../pages/admin/area';
import {USER_ROLES, requireAll} from './userRoles';
import AccessDenied from '../pages/public/errors/accessDenied';

export default function EcommerceRoutes() {
    return (
        <Routes>
            <Route path="" element={<Home />}/>

            <Route path="auth">
                <Route path="login" element={<Login />}/>
                <Route path="recoverPassword" element={<Login />}/>
                <Route path="*" element={<NotFound />}/> 
            </Route>

            <Route path="account" element={<RequiredAuth requiredRoles={[USER_ROLES.CUSTOMER]} />}>
                <Route path="" element={<MyAccount />}/>
            </Route>

            <Route path="admin" element={<RequiredAuth requiredRoles={[USER_ROLES.ADMIN]} />}>
                <Route path="" element={<AdminArea />}/>
            </Route>

            <Route path="admin" element={<RequiredAuth requiredRoles={[USER_ROLES.ADMIN]} />}>
                <Route path="" element={<AdminArea />}/>
            </Route>

            {/* TODO: Remover Exemplo */}
            <Route path="MultipleRoles" element={<RequiredAuth requiredRoles={[requireAll(USER_ROLES.ADMIN, USER_ROLES.SELLER)]} />}>
                <Route path="" element={<Home />}/>
            </Route>

            <Route path="AccessDenied" element={<AccessDenied />}/>
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}