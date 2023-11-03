const Book = require('../db-models/book');

exports.createBook = async function (data) {
  const result = await Book.create(data);

  return result;
};

exports.getAllBooks = async function () {
  const books = await Book.find();
  return books;
};

exports.updateBook = async function (id, data) {
  const result = await Book.findOneAndUpdate({ id }, data);
  return result;
};

exports.deleteBook = async function (id) {
  const result = await Book.deleteOne({ _id: id });
  return result;
};
