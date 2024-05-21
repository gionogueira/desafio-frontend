import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";

function RouterApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RouterApp;
