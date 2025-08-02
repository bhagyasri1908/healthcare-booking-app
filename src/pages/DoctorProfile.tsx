import { useParams, Link } from 'react-router-dom';
import doctorsData from '../data/doctors.json';

function DoctorProfile() {
  const { id } = useParams<{ id: string }>();
  const doctor = doctorsData.find((doc) => doc.id === Number(id));

  if (!doctor) {
    return (
      <div className="container mt-5 text-center text-danger">
        <h4>Doctor not found</h4>
        <Link to="/" className="btn btn-outline-primary mt-3">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="card shadow border-0 p-4 bg-light">
        <div className="row align-items-center">
          <div className="col-md-4 text-center mb-3 mb-md-0">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="rounded-circle img-fluid border border-3 border-primary"
              style={{ width: '200px', height: '200px', objectFit: 'cover' }}
            />
          </div>
          <div className="col-md-8">
            <h2 className="text-primary">{doctor.name}</h2>
            <p className="text-secondary mb-1">
              <strong>Specialization:</strong> {doctor.specialization}
            </p>
            <p className="mb-2">
              <strong>Availability:</strong>{' '}
              <span className={`badge px-3 py-2 ${
                doctor.availability === 'Available Today'
                  ? 'bg-success'
                  : doctor.availability === 'Fully Booked'
                  ? 'bg-danger'
                  : 'bg-secondary'
              }`}>
                {doctor.availability}
              </span>
            </p>
            <Link
              to={`/doctor/${doctor.id}/book`}
              className="btn btn-outline-primary btn-lg mt-3"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorProfile;
