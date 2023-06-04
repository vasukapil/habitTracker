const Habit = require('../Models/habit');

// Get all habits
exports.getAllHabits = async (req, res) => {
  try {
    const habits = await Habit.find();
    res.render('index', { habits });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get a specific habit by ID
exports.getHabitById = async (req, res) => {
    try {
        const habit = await Habit.findById(req.params.id);
        if (!habit) {
          return res.status(404).json({ error: 'Habit not found' });
        }
        res.render('habitDetails', { habit }); // Render the 'habitDetails.ejs' template with the habit data
      } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
      }
};

// Create a new habit
exports.createHabit = async (req, res) => {
  try {
    const { name } = req.body;
    const habit = new Habit({ name });
    const savedHabit = await habit.save();
    res.status(201).json(savedHabit);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update a habit's status for a day
exports.updateHabitStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const habit = await Habit.findById(req.params.id);
    if (!habit) {
      return res.status(404).json({ error: 'Habit not found' });
    }
    habit.status = status;
    const updatedHabit = await habit.save();
    res.json(updatedHabit);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete a habit
exports.deleteHabit = async (req, res) => {
  try {
    const habit = await Habit.findByIdAndDelete(req.params.id);
    if (!habit) {
      return res.status(404).json({ error: 'Habit not found' });
    }
    res.json({ message: 'Habit deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
