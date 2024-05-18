import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import Login from "../pages/login/Login";

function RouterApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/pagina-inicial" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Navigate to="/pagina-inicial" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RouterApp;
