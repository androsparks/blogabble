if (process.env.NODE_ENV !== 'production') require('dotenv').config();
//Import the DB connection
require('../config/index');

const faker = require('faker'),
  mongoose = require('mongoose'),
  Writer = require('../models/writerModel'),
  Post = require('../models/postModel'),
  Comment = require('../models/commentModel')

const dbReset = async () => {
  const collections = Object.keys(mongoose.connection.collections);
  // Loop through each collection and delete all the documents.
  for (const collectionName of collections) {
    const collection = mongoose.connection.collections[collectionName];
    await collection.deleteMany();
  }

  //Count number of user documents ===> should be 0
  await Writer.countDocuments({}, function (err, count) {
    console.log('Number of users: ', count);
  });
  //Count number of message documents ===> should be 0
  await Post.countDocuments({}, function (err, count) {
    console.log('Number of messages: ', count);
  });
  //Count number of user documents ===> should be 0
  await Comment.countDocuments({}, function (err, count) {
    console.log('Number of preferences: ', count);
  });

  //Loop 100 times and create 100 new users
  const userIdArray = [];
  for (let i = 0; i < 10; i++) {
    const me = new Writer({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      password: '12345678',
      bio: faker.lorem.paragraph(),
      avatar: `https://i.pravatar.cc/300?u=${i}`
    });
    await me.generateAuthToken();
    userIdArray.push(me._id);
    console.log(typeof userIdArray[0])
  }

  // Loop 100 times and create 100 new messages
  const postArray = []
  for (let i = 0; i < 100; i++) {
    const post = new Post({
        owner: userIdArray[Math.floor(Math.random()*userIdArray.length-1)],
        title: faker.lorem.sentence(),
        subtitle: faker.company.catchPhrase(),
        date: faker.date.between('2020-01-01', '2020-12-01'),
        body: faker.lorem.paragraphs()
    });
    // console.log(typeof post.owner)
    await post.save()
    postArray.push(post._id);
  }

//   Loop 100 times and create 100 new preferences
  for (let i = 0; i < 250; i++) {
    const comment = new Comment({
      comment: faker.lorem.word(),
      date: faker.date.between('2020-01-01', '2020-12-01'),
      post_id: postArray[Math.floor(Math.random()*postArray.length)],
      owner: faker.name.firstName()+" " +faker.name.lastName()
    });
    await comment.save();
  }


  //Count number of users ===> should be 100
  await Writer.countDocuments({}, function (err, count) {
    console.log('Number of Writer: ', count);
  });

  //Count number of messages ===> should be 100
  await Post.countDocuments({}, function (err, count) {
    console.log('Number of posts: ', count);
  });

  //Count number of preferences ===> should be 100
  await Comment.countDocuments({}, function (err, count) {
    console.log('Number of Comment: ', count);
  });

};

dbReset();
