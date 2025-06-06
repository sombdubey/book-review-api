const Book = require('../models/Book');
const Review = require('../models/Review');

const addBook = async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getBooks = async (req, res) => {
  const { author, genre, page = 1, limit = 10 } = req.query;
  const query = {};
  if (author) query.author = new RegExp(author, 'i');
  if (genre) query.genre = new RegExp(genre, 'i');

  const books = await Book.find(query)
    .skip((page - 1) * limit)
    .limit(Number(limit));

  res.json(books);
};

const getBookById = async (req, res) => {
  const book = await Book.findById(req.params.id).populate('reviews');
  if (!book) return res.status(404).json({ message: 'Book not found' });

  const avgRating =
    book.reviews.reduce((sum, r) => sum + r.rating, 0) / book.reviews.length || 0;

  res.json({ ...book._doc, avgRating });
};

const searchBooks = async (req, res) => {
  const { q } = req.query;
  const books = await Book.find({
    $or: [
      { title: new RegExp(q, 'i') },
      { author: new RegExp(q, 'i') }
    ]
  });
  res.json(books);
};

module.exports = { addBook, getBooks, getBookById, searchBooks };
