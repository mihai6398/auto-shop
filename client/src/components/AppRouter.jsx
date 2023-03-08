import {useContext} from "react";
import {BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import {Context} from "../index";
import {NavBar} from "./ComponentsMain";

const AppRouter = () => {
    const {user} = useContext(Context)
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                {user.isAuth && authRoutes.map(({path, Element}) =>
                    <Route key={path} path={path} element={Element} exact/>
                )}
                {publicRoutes.map(({path, Element}) =>
                    <Route key={path} path={path} element={Element} exact/>

                )}
                <Route
                    path="*"
                    element={<Navigate to="/" replace />}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;