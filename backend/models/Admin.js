const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const adminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// FIX: Use async function WITHOUT 'next'. Mongoose waits for the Promise to resolve automatically.
adminSchema.pre('save', async function () {
  // 1. If password is not modified, exit function
  if (!this.isModified('password')) return;

  // 2. Hash the password
  // bcryptjs returns a Promise if no callback is provided
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

adminSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('Admin', adminSchema);