import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DoctorProfile from './pages/DoctorProfile';
import BookAppointment from './pages/BookAppointment';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/doctor/:id" element={<DoctorProfile />} />
      <Route path="/doctor/:id/book" element={<BookAppointment />} />
    </Routes>
  );
}

export default App;
