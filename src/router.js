import { Routes, Route } from "react-router-dom";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Home from "./pages/Home";
import Dashboard from "./pages/admin/Dashboard";
import Appointment from "./pages/admin/Appointment";
import Billing from "./pages/admin/Billing";
import Patient from "./pages/admin/Patient";

const Routers = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/admin" element={<AdminDashboard/>}>
                <Route index element={<Dashboard />}/>
                <Route path="appoinntment" element={<Appointment />}/>
                <Route path="billing" element={<Billing />}/>
                <Route path="patient" element={<Patient />}/>
            </Route>
        </Routes>
    )
}

export default Routers;