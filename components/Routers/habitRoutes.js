
const express = require('express');
const habitController = require('../controllers/habitController');

const router = express.Router();

router.get('/', habitController.getAllHabits);

router.get('/:id', habitController.getHabitById);

router.post('/', habitController.createHabit);

router.put('/:id/status', habitController.updateHabitStatus);

router.delete('/:id', habitController.deleteHabit);

module.exports = router;
