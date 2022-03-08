// const Course = require('../models/Course');
const Post = require('../models/Post');
const {mongooseToObject} = require('../../util/mongoose');
const { response } = require('express');
class PostController {
    // render create view OK
    create(req, res, next) {
        res.render('posts/create');
    }

    //store post oke
    store(req, res, next) {
        const post = new Post({
            title: req.body.title,
            description: req.body.description,
            image: `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`,
            content: req.body.content,
            videoId: req.body.videoId,
        });
        
        post.save()
            .then(() => res.redirect('/'))
            .catch(next)
    }

    // GET data to edit page
    edit(req, res, next){
        Post.findOne({
            id: req.params.id,
        })
        .then((post) => {
            res.render('posts/edit', {post:mongooseToObject(post)});
            
        })
        .catch(next);     
    }

    // PATCH post/:id
    update(req, res, next){
        Post.findOneAndUpdate(
            {_id: req.params.id},
            {$set: 
                {
                    title: req.body.title,
                    description: req.body.description,
                    image: `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`,
                    content: req.body.content,
                    videoId: req.body.videoId,       
                }
            }
        )
            .then((post) => {
                res.redirect('/me/stored/posts')
                
            })
            .catch(next);
    }

     // DELETE post/:id
     destroy(req, res, next){
        Post.findOneAndDelete({_id: req.params.id})
            .then((post) => {
                res.redirect('back');
                
            })
            .catch(next);
    }

    // Show one post OK
    show(req, res, next) {
        Post.findOne({
            slug: req.params.slug,
        })
        .then((post) =>{
            res.render('posts/show', {data: mongooseToObject(post)});
        })
    }
}

module.exports = new PostController();
