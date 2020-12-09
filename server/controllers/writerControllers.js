const Writer = require('../db/models/writerModel')

//***********************************************
// WRITER CRUD FUNCTIONS BELOW 
//***********************************************
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
    }
  )
}

exports.getSingleWriter = async (req, res) => {
    try {
        console.log(req.params.id);
        let user = await Writer.findById(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(500).json('Error: ' + err);
    }
}

exports.getCurrentWriter = async (req, res) => {
  console.log("got me")
  // console.log(req.user)
    res.json(req.user);
  };

exports.updateWriter = async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['firstName', 'lastName', 'email', 'password', 'avatar'];
    const isValidOperation = updates.every((update) =>
      allowedUpdates.includes(update)
    );
    if (!isValidOperation)
      return res.status(400).json({ message: 'Invalid updates' });
    try {
      updates.forEach((update) => (req.user[update] = req.body[update]));
      await req.user.save();
      res.json(req.user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
}

exports.uploadAvatar = async (req, res) => {
    try {
      const response = await cloudinary.uploader.upload(
        req.files.avatar.tempFilePath
      );
      req.user.avatar = response.secure_url;
      await req.user.save();
      res.json(response);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

exports.deleteWriter = async (req, res) => {
    try {
        await req.user.remove();
        // sendCancellationEmail(req.user.email, req.user.name);
        res.clearCookie('jwt');
        res.json({ message: 'user deleted' });
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
}

//***********************************************
// WRITER LOGIN AND LOGOUT
//***********************************************

exports.loginWriter = async (req, res) => {
  const {email, password} = req.body
  console.log("at login")
    try {
        const user = await Writer.findByCredentials(email, password);
        const token = await user.generateAuthToken();
        res.cookie('jwt', token, {
          httpOnly: true,
          sameSite: 'Strict',
          secure: process.env.NODE_ENV !== 'production' ? false : true
        });
        res.json(user);
      } catch (e) {
        console.log(e);
        res.status(400).json({ error: e.toString() });
      }
}

exports.logoutWriter = async (req,res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
          return token.token !== req.cookies.jwt;
        });
        await req.user.save();
        res.clearCookie('jwt');
        res.json({ message: 'logged out!' });
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
}

exports.logoutAllDevices = async (req, res) => {
    try {
      req.user.tokens = [];
      await req.user.save();
      res.clearCookie('jwt');
      res.json({ message: 'logged out from all devices!' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

//***********************************************
// PASSWORD RESETS AND UPDATES 
//***********************************************

exports.requestPasswordReset = async (req, res) => {
    try {
        const { email } = req.query;
        const user = await Writer.findOne({ email });
        if (!user) throw new Error('Writer not found');
        const token = jwt.sign(
        { _id: user._id.toString(), name: user.name },
        process.env.JWT_SECRET,
        { expiresIn: '10m' }
        );
        // forgotPasswordEmail(email, token);
        res.json({ message: 'reset password email sent!' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.passwordRedirect = async (req, res) => {
    const { token } = req.params;
    try {
        jwt.verify(token, process.env.JWT_SECRET, function (err) {
        if (err) throw new Error(err.message);
        });
        res.cookie('jwt', token, {
        httpOnly: true,
        maxAge: 600000,
        sameSite: 'Strict'
        });
        res.redirect(process.env.URL + '/update-password');
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updatePassword = async (req, res) => {
    try {
      req.user.password = req.body.password;
      await req.user.save();
      res.clearCookie('jwt');
      res.status(200).json({ message: 'password updated successfully!' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };