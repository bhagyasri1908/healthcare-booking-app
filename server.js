import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'appointments.json');


const readAppointments = () => {
  if (!fs.existsSync(filePath)) return [];
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
};


const writeAppointments = (appointments) => {
  fs.writeFileSync(filePath, JSON.stringify(appointments, null, 2), 'utf-8');
};

app.post('/api/appointments', (req, res) => {
  console.log('Received headers:', req.headers);
  console.log('Received appointment data:', req.body);

  const { name, email, dateTime, doctorId } = req.body;

  if (!name || !email || !dateTime || !doctorId) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const newAppointment = {
    id: Date.now(),
    name,
    email,
    dateTime,
    doctorId,
  };

  const appointments = readAppointments();
  appointments.push(newAppointment);
  writeAppointments(appointments);

  return res.status(201).json({ message: 'Appointment booked successfully!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
