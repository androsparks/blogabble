Writer = require('../db/models/writerModel'),
Post = require('../db/models/postModel')

exports.searchSite = async (req,res)=>{
    const theQuerey = req.query.looking
    const {search} = req.query
    console.log(theQuerey, search)
    if (theQuerey === 'User') {
        let writer = await Writer.find({$or: [ {firstName: {$regex: search}}, {lastName: {$regex: search}}]})
        res.json(writer)
    } else if (theQuerey === 'Post' ) {
        let posts = await Post.find({body: {$regex: search}})
        res.json(posts)
    }
}