import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home-Page";
import LoginPage from "../pages/auth-service/Login-Page";
import SignUpPage from "../pages/auth-service/SignUp-Page";
// import DiseaseListingPage from "../pages/doctor-service/DiseaseListing-Page";
import DoctorProfileListingPage from "../pages/doctor-service/DoctorProfileListing-Page";
// import DoctorProfilePage from "../pages/doctor-service/DoctorProfile-Page";
import BookAppoinmentPage from "../pages/patient-service/BookAppoinmentPage";
import AppoinmentListingPage from "../pages/patient-service/AppoinmentList-Page";
import Blockpatientdisp from "../pages/patient-service/Blockpatientdisp";
import AppoinmentDetailPage from "../pages/patient-service/AppoinmentDetail-Page";
import PatientProfilePage from "../pages/patient-service/PatientProfile-Page";
import Addmedicalhistory from "../pages/patient-service/Addmedicalhistory";
import Progressupdate from "../pages/patient-service/Progressupdate";
import Labtestentry from "../pages/patient-service/Labtestentry";
import Dischargesummary from "../pages/patient-service/Dischargesummary";
import Blockpatient from "../pages/patient-service/Blockpatient";
import PageNotFound from "../pages/404-Page";
import Dischargesummarydisp from "../pages/patient-service/Dischargesummarydisp";
import Doctorappoinmentlist from "../pages/doctor-service/Doctorappoinmentlist";
import Doctorpatientauth from "../pages/doctor-service/Doctorpatientauth";
import PatientDocdetails from "../components/forms/PatientDocdetails";
import Uploaddoc from "../pages/patient-service/Uploaddoc";
const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} exact={true} />
            {/* Common portal */}
            <Route path="/login" element={<LoginPage />} />         
            <Route path="/signup" element={<SignUpPage />} />
            {/* patient portal */}
            <Route path="/appoinment/book" element={<BookAppoinmentPage />} />
            <Route path="/uploaddocs" element={<Uploaddoc />} />
            <Route path="/discharge" element={<Dischargesummary />} />
            <Route path="/addmedhis" element={<Addmedicalhistory />} /> 
            <Route path="/blockpat" element={<Blockpatient />} />
            <Route path="/dischargedisp" element={<Dischargesummarydisp />} />
            <Route path="/blockpatdisp" element={<Blockpatientdisp />} />
            <Route path="/labtestentry" element={<Labtestentry />} />
            <Route path="/progressupdate" element={<Progressupdate />} />
            <Route path="/doctor/list" element={<DoctorProfileListingPage />} />
            <Route path="/appoinment/list" element={<AppoinmentListingPage/>} />
            <Route path="/appoinment/:aid" element={<AppoinmentDetailPage />} />
            <Route path="/patient/profile" element={<PatientProfilePage />} />
            {/* 29-09-2023 edit by loga */}
            <Route path="/doctor/appoinment" element={<Doctorappoinmentlist/>}/>
            <Route path="/docpat/auth" element={<Doctorpatientauth/>}/>
            <Route path="/test" element={<PatientDocdetails/>}/>
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    </BrowserRouter>
);

export default Router;
