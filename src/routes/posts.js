const express = require('express');
const router = express.Router();

const postController = require('../app/controllers/PostController');

router.get('/create', postController.create);
router.post('/store', postController.store);
router.get('/:id/edit', postController.edit);
router.get('/:slug', postController.show);
router.patch('/:id', postController.update);
router.delete('/:id', postController.destroy);

module.exports = router;