import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import doctorsData from '../data/doctors.json';
import './pages.css'

interface Doctor {
  id: number;
  name: string;
  specialization: string;
  image: string;
  availability: string;
}

function LandingPage() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setDoctors(doctorsData);
  }, []);

  const filteredDoctors = doctors.filter((doctor) =>
    `${doctor.name} ${doctor.specialization}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className='centering'>
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h1 className="fw-bold" style={{ color: '#007b8a' }}>Find Your Doctor</h1>
        <p className="text-muted">Search and book appointments with top specialists</p>
      </div>

      <div className="mb-4">
        <input
          type="text"
          className="form-control form-control-lg border-primary"
          placeholder="🔍 Search by name or specialization"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="row">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor) => (
            <div className="col-md-4 d-flex mb-4" key={doctor.id}>
              <div className="card h-100 shadow-sm border-0 w-100" style={{ minWidth: '280px' }}>
                <img
                  src={doctor.image}
                  className="card-img-top"
                  alt={doctor.name}
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <div className="card-body bg-light">
                  <h5 className="card-title" style={{ color: '#007b8a' }}>{doctor.name}</h5>
                  <p className="card-text text-secondary">{doctor.specialization}</p>
                  <p className="mb-3">
                    <strong>Status:</strong>{' '}
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
                    to={`/doctor/${doctor.id}`}
                    className="btn btn-outline-primary w-100"
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center text-muted mt-4">
            <p>No doctors match your search.</p>
          </div>
        )}
      </div>
    </div>
    </div>
  );
}

export default LandingPage;
