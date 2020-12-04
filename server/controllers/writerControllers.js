const Writer = require('../db/models/writerModel')

exports.createWriter = async (req, res) => {
  Writer.create(req.body, async (err, user) => {
    if (err) {
      console.log(err);
      res.status(400).json(err);
    } else {
      const token = await user.generateAuthToken();
      res.cookie('jwt', token, {
        httpOnly: true,
        sameSite: 'Strict',
        secure: process.env.NODE_ENV !== 'production' ? false : true
      });
      res.status(201).json(user);
    }
  });

  UserSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();
  delete userObject.password;
  delete userObject.tokens;
  return userObject;
};

UserSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign(
    {
      _id: user._id.toString(),
      name: user.name
    },
    process.env.JWT_SECRET,
    { expiresIn: '24h' }
  );
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};
}