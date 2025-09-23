require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // ✅ 1. Import cors

const app = express();

// ✅ 2. Use cors BEFORE your routes
app.use(cors());

// ✅ 3. Middleware to parse JSON bodies
app.use(express.json());

// ✅ 4. Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// ✅ 5. Load and mount routes
const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);

const taskRoutes = require('./routes/tasks');
app.use('/tasks', taskRoutes);

// ✅ 6. Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
