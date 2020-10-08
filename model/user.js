const mongoose = require('../utils/db_connection');

const Schema = mongoose.Schema;
const userSchema = new Schema({
    username: { type: String, required: true },
    emailId: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    about: { type: String }
});
userSchema.index({ emailId: 1 });

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;