const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/users-backend", { useNewUrlParser: true });
mongoose.set("debug", true);
mongoose.Promise = Promise;

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: Number,
    school: String,
    major: String
});

const User = mongoose.model("User", userSchema);

module.exports = User;


