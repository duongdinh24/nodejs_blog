const Post = require('../models/Post');
const {mutipleMongooseToObject} = require('../../util/mongoose');

class MeController {
    //[GET/home]
    storedPosts(req, res, next) {
        Post.find({})
            .then( posts => {
                res.render('me/stored-posts', { posts: mutipleMongooseToObject(posts)
                });
            })
            .catch(next);
    }
}

module.exports = new MeController();
