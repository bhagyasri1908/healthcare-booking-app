import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './pages.css';

function BookAppointment() {
  const { id } = useParams<{ id: string }>();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dateTime: '',
  });
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    dateTime: '',
  });

  const validate = () => {
    const newErrors = {
      name: formData.name ? '' : 'Name is required',
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ? '' : 'Valid email required',
      dateTime: formData.dateTime ? '' : 'Date and Time are required',
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some((e) => e !== '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const res = await axios.post(
        'http://localhost:5000/api/appointments',
        {
          ...formData,
          doctorId: id ?? '',
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setMessage(res.data.message);
      setFormData({ name: '', email: '', dateTime: '' });
    } catch (err: any) {
      setMessage(err.response?.data?.message || 'Error booking appointment');
    }
  };

  return (
      <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="container p-4 shadow bg-white rounded" style={{ maxWidth: '600px' }}>
        <h2 className="text-primary mb-4 text-center">Book an Appointment</h2>

        {message && <div className="alert alert-info">{message}</div>}

        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <label className="form-label fw-semibold">Patient Name</label>
            <input
              type="text"
              className={`form-control ${errors.name ? 'is-invalid' : ''}`}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <input
              type="email"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Date and Time</label>
            <input
              type="datetime-local"
              className={`form-control ${errors.dateTime ? 'is-invalid' : ''}`}
              value={formData.dateTime}
              onChange={(e) => setFormData({ ...formData, dateTime: e.target.value })}
            />
            {errors.dateTime && <div className="invalid-feedback">{errors.dateTime}</div>}
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookAppointment;
