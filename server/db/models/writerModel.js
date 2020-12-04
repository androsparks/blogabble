const mongoose = require('mongoose'),
 validator = require('validator'),
 bcrypt = require('bcryptjs'),
 jwt = require('jsonwebtoken')
 
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

WriterSchema.methods.toJSON = function () {
    const writer = this;
    const writerObject = writer.toObject();
    delete writerObject.password;
    delete writerObject.tokens;
    return writerObject;
  };
  
WriterSchema.methods.generateAuthToken = async function () {
    const writer = this;
    const token = jwt.sign(
        {
        _id: writer._id.toString(),
        name: writer.name
        },
        process.env.JWT_SECRET,
        { expiresIn: '24h' }
    );
    writer.tokens = writer.tokens.concat({ token });
    await writer.save();
    return token;
};

WriterSchema.pre('save', async function (next) {
    const writer = this;
    if (writer.isModified('password')) {
        writer.password = await bcrypt.hash(writer.password, 8);
    }
    next()
  }
)
module.exports = mongoose.model('Writer', WriterSchema)