const Nurse = require('../models/Nurse');

exports.getNurses = async (req, res) => {
  try {
    const nurses = await Nurse.find();
    res.json(nurses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createNurse = async (req, res) => {
  try {
    const nurse = new Nurse(req.body);
    await nurse.save();
    res.status(201).json(nurse);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getNurseById = async (req, res) => {
  try {
    const nurse = await Nurse.findById(req.params.id);
    if (!nurse) return res.status(404).json({ error: 'Nurse not found' });
    res.json(nurse);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateNurse = async (req, res) => {
  try {
    const nurse = await Nurse.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!nurse) return res.status(404).json({ error: 'Nurse not found' });
    res.json(nurse);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteNurse = async (req, res) => {
  try {
    const nurse = await Nurse.findByIdAndDelete(req.params.id);
    if (!nurse) return res.status(404).json({ error: 'Nurse not found' });
    res.json({ message: 'Nurse deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};