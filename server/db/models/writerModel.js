const mongoose = require('mongoose'),
 validator = require('validator')
const Schema = mongoose.Schema

const WriterSchema = new Schema ({
    firstName: {
        type: String,
        required: true,
        trim: true
      },
      lastName: {
        type: String,
        required: true,
        trim: true
      },
      email: {
        type: String,
        require: true,
        trim: true,
        unique: true,
        validate(value) {
          if (!validator.isEmail(value)) {
            throw new Error('Email is invalid');
          }
        }
      },
      password: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
          if (value.toLowerCase().includes('password')) {
            throw new Error('Password cannot be password');
          }
          if (value.length < 8) {
            throw new Error('Password must be at least 8 characters');
          }
        }
      },
      posts: [
          {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Conversation',
            unique: true
          }
      ]
}, { timestamps: true })

module.exports = mongoose.model('Writer', WriterSchema)