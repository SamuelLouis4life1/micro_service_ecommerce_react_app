import { Routes, Route } from 'react-router-dom';
import Home from '../src/pages/public/home/';
import RequiredAuth from './utils/requiredAuth';
import NotFound from '../src/pages/public/errors/notFound';
import Login from '../src/pages/public/home';
import AdminArea from '../src/pages/admin/area/';
import { USER_ROLES, requireAll } from '../src/utils/userRoles';
import AccessDenied from '../src/pages/public/errors/accessDenied';


export default function EcommerceRoutes() {
    return (
        <Routes>

            <Route path="" element={<Home />} />

            <Route path="auth">
                <Route path="login" element={<Login />} />
                <Route path="recoverPassword" element={<Login />} />
                <Route path="*" element={<NotFound />} />
            </Route>

            <Route path="account" element={<RequiredAuth requiredRoles={[USER_ROLES.CUSTOMER]} />}>
                <Route path="" element={<Home />} />
            </Route>
            
            <Route path="admin" element={<RequiredAuth requiredRoles={[USER_ROLES.ADMIN]} />}>
                <Route path="" element={<AdminArea />}/>
            </Route>

            <Route path="MultipleRoles" element={<RequiredAuth requiredRoles={[requireAll(USER_ROLES.ADMIN, USER_ROLES.SELLER)]} />}>
                <Route path="" element={<Home />}/>
            </Route>

            <Route path="AccessDenied" element={<AccessDenied />} />
            <Route path="*" element={<NotFound />} />

        </Routes>
    )
}