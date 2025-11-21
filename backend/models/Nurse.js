const mongoose = require('mongoose');

const nurseSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  department: { type: String, required: true },
  email: { type: String, unique: true, required: true, lowercase: true },
  phone: { type: String },
  shift: { type: String, enum: ['Morning', 'Evening', 'Night'], required: true },
  experience: { type: Number, default: 0 },
  assignedDoctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Nurse', nurseSchema);