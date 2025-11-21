const Technician = require('../models/Technician');

exports.getTechnicians = async (req, res) => {
  try {
    const technicians = await Technician.find();
    res.json(technicians);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createTechnician = async (req, res) => {
  try {
    const technician = new Technician(req.body);
    await technician.save();
    res.status(201).json(technician);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getTechnicianById = async (req, res) => {
  try {
    const technician = await Technician.findById(req.params.id);
    if (!technician) return res.status(404).json({ error: 'Technician not found' });
    res.json(technician);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateTechnician = async (req, res) => {
  try {
    const technician = await Technician.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!technician) return res.status(404).json({ error: 'Technician not found' });
    res.json(technician);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteTechnician = async (req, res) => {
  try {
    const technician = await Technician.findByIdAndDelete(req.params.id);
    if (!technician) return res.status(404).json({ error: 'Technician not found' });
    res.json({ message: 'Technician deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};