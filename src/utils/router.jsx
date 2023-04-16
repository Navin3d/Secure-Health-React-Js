import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar";

import HomePage from "../pages/Home-Page";
import LoginPage from "../pages/auth-service/Login-Page";
import SignUpPage from "../pages/auth-service/SignUp-Page";
import DiseaseListingPage from "../pages/doctor-service/DiseaseListing-Page";
import DoctorProfileListingPage from "../pages/doctor-service/DoctorProfileListing-Page";
import DoctorProfilePage from "../pages/doctor-service/DoctorProfile-Page";
import BookAppoinmentPage from "../pages/patient-service/BookAppoinmentPage";
import AppoinmentListingPage from "../pages/patient-service/AppoinmentList-Page";
import AppoinmentDetailPage from "../pages/patient-service/AppoinmentDetail-Page";
import PatientProfilePage from "../pages/patient-service/PatientProfile-Page";
import Addmedicalhistory from "../pages/patient-service/Addmedicalhistory";
import Progressupdate from "../pages/patient-service/Progressupdate";
import Labtestentry from "../pages/patient-service/Labtestentry";
import PageNotFound from "../pages/404-Page";


const Router = () => (
    <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
            <Route path="/" element={<HomePage />} exact={true} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/addmedhis" element={<Addmedicalhistory />} />
            <Route path="/labtestentry" element={<Labtestentry />} />
            <Route path="/progressupdate" element={<Progressupdate />} />
            <Route path="/disease/list" element={<DiseaseListingPage />} />
            <Route path="/doctor/list" element={<DoctorProfileListingPage />} />
            <Route path="/doctor/:did" element={<DoctorProfilePage />} />
            <Route path="/appoinment/book" element={<BookAppoinmentPage />} />
            <Route path="/appoinment/list" element={<AppoinmentListingPage />} />
            <Route path="/appoinment/:aid" element={<AppoinmentDetailPage />} />
            <Route path="/patient/profile" element={<PatientProfilePage />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    </BrowserRouter>
);

export default Router;
