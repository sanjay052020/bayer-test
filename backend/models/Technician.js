const mongoose = require('mongoose');

const technicianSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  department: { type: String, required: true },
  specialization: { type: String },
  email: { type: String, unique: true, required: true, lowercase: true },
  phone: { type: String },
  shift: { type: String, enum: ['Morning', 'Evening', 'Night'], required: true },
  experience: { type: Number, default: 0 },
  assignedDoctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' },
  assignedEquipment: [{ type: String }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Technician', technicianSchema);