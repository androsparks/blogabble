const Writer = require('../db/models/writerModel'),
cloudinary = require('cloudinary').v2

//***********************************************
// WRITER CRUD FUNCTIONS BELOW 
//***********************************************
exports.createWriter = async (req, res) => {
  console.log(req.body)
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
        let user = await Writer.findById(req.params.id);
        await user
          .populate({
            path: 'posts'
          })
          .execPopulate();
          let posts = user.posts
        res.json({user, posts});
    } catch (error) {
        res.status(500).json('Error: ' + err);
    }
}

exports.getCurrentWriter = async (req, res) => {
    res.json(req.user);
  };

exports.updateWriter = async (req, res) => {
    if (req.files) {uploadAvatar(req)}
    let obj = JSON.parse(req.body.body)
    if (obj){
    const updates = Object.keys(obj);
    const allowedUpdates = ['firstName', 'lastName', 'email', 'password', 'avatar'];
    const isValidOperation = updates.every((update) =>
      allowedUpdates.includes(update)
    );
    if (!isValidOperation)
      return res.status(400).json({ message: 'Invalid updates' });
    try {
      updates.forEach((update) => (req.user[update] = obj[update]));
      await req.user.save();
      res.json(req.user);
    } catch (error) {
      console.log(error)
      res.status(400).json({ error: error.message });
    }
  }
}

const uploadAvatar = async (req, res) => {
    try {
      const response = await cloudinary.uploader.upload(
        req.files.avatar.tempFilePath
      );
      req.user.avatar = response.secure_url;
      await req.user.save();
      return(req.user).avatar
    } catch (error) {
      console.log(error)
    }
  };

exports.deleteWriter = async (req, res) => {
    try {
        await req.user.remove();
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

