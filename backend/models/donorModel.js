const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const validator = require("validator");

const signupSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// static signup method
signupSchema.statics.signup = async function (name, password) {
  const exists_email = await this.findOne({ name });

  if (!name || !password) {
    throw Error("All fields must be filled");
  }

  if (!validator.isStrongPassword(password)) {
    throw Error(
      "Password must have atleat 1 capital, 1 small and 1 unique character"
    );
  }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const donor = await this.create({name,password: hash });

  return donor;
};

signupSchema.statics.login = async function (name, password) {
  const donor = await this.findOne({ name });

  if (!password || !name) {
    throw Error("All fields must be filled");
  }
  if (!donor) {
    throw Error("School does not exist");
  }

  const match = await bcrypt.compare(password, donor.password);
  if (!match) {
    throw Error("Incorrect password");
  }
  return donor;
};

const School= new mongoose.model("School", signupSchema);
module.exports = School;
