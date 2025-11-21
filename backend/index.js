// index.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');   // MongoDB connection
const { doctorController, nurseController, technicianController } = require('./controllers/useController');

dotenv.config();   // Load environment variables
connectDB();       // Connect to MongoDB

const app = express();
app.use(express.json()); // Middleware to parse JSON

// Doctor routes
app.get('/api/doctors', doctorController.getDoctors);
app.post('/api/doctors', doctorController.createDoctor);
app.get('/api/doctors/:id', doctorController.getDoctorById);
app.put('/api/doctors/:id', doctorController.updateDoctor);
app.delete('/api/doctors/:id', doctorController.deleteDoctor);

// Nurse routes
app.get('/api/nurses', nurseController.getNurses);
app.post('/api/nurses', nurseController.createNurse);
app.get('/api/nurses/:id', nurseController.getNurseById);
app.put('/api/nurses/:id', nurseController.updateNurse);
app.delete('/api/nurses/:id', nurseController.deleteNurse);

// Technician routes
app.get('/api/technicians', technicianController.getTechnicians);
app.post('/api/technicians', technicianController.createTechnician);
app.get('/api/technicians/:id', technicianController.getTechnicianById);
app.put('/api/technicians/:id', technicianController.updateTechnician);
app.delete('/api/technicians/:id', technicianController.deleteTechnician);

// Root route
app.get('/', (req, res) => {
  res.send('Healthcare API running...');
});

// Server listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));