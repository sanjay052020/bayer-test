// /routes/technicianRoutes.js
const express = require('express');
const router = express.Router();
const { technicianController } = require('../controllers/useController');

// Technician CRUD routes
router.get('/', technicianController.getTechnicians);
router.post('/', technicianController.createTechnician);
router.get('/:id', technicianController.getTechnicianById);
router.put('/:id', technicianController.updateTechnician);
router.delete('/:id', technicianController.deleteTechnician);

module.exports = router;