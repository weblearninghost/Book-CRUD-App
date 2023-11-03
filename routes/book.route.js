const express = require('express');
const {
  createBook,
  getAllBooks,
  updateBook,
  deleteBook,
} = require('../services/book.service');
const router = express.Router();

// router.route('/').post(createBlog).get(getAllBlogs);
// router.route('/:id').delete(deleteBlogById);
// router.route('/:id').patch(updateBlogById);
router
  .route('/book')
  .post(async (req, res) => {
    try {
      const data = req.body;
      const result = await createBook(data);
      res.send(result);
    } catch (error) {
      console.log('Error:', error);
      res.send({
        Message: 'Error Occurred',
      });
    }
  })
  .get(async (req, res) => {
    try {
      const books = await getAllBooks();
      res.send(books);
    } catch (error) {
      console.log('Error:', error);
      res.send({
        Message: 'Error Occurred',
      });
    }
  });
router.route('/book/:id').delete(async (req, res) => {
  try {
    const { id } = req.params;

    const result = await deleteBook(id);

    if (!result?.deletedCount) {
      res.statusCode = 404;
      res.send({ message: 'Book not found.' });
    }
    res.send(result);
  } catch (error) {
    console.log('Error:', error);
    res.send({
      Message: 'Error Occurred',
    });
  }
});

router.route('/book/:id').patch(async (req, res) => {
  try {
    const { id } = req.params;

    const data = req.body;
    const result = await updateBook({ _id: id }, data);
    // if (!result) {
    //   res.statusCode = 404;
    //   res.send({ message: 'Book not found.' });
    // }
    res.send(result);
  } catch (error) {
    console.log('Error:', error);
    res.send({
      Message: 'Error Occurred',
    });
  }
});
module.exports = router;
