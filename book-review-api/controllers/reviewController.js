const Review = require('../models/Review');
const Book = require('../models/Book');

const addReview = async (req, res) => {
  const { id: bookId } = req.params;
  const { rating, comment } = req.body;

  const existing = await Review.findOne({ user: req.user, book: bookId });
  if (existing) return res.status(400).json({ message: 'Review already exists' });

  const review = new Review({ user: req.user, book: bookId, rating, comment });
  await review.save();

  await Book.findByIdAndUpdate(bookId, { $push: { reviews: review._id } });

  res.status(201).json(review);
};

const updateReview = async (req, res) => {
  const review = await Review.findById(req.params.id);
  if (!review || review.user.toString() !== req.user)
    return res.status(403).json({ message: 'Forbidden' });

  Object.assign(review, req.body);
  await review.save();
  res.json(review);
};

const deleteReview = async (req, res) => {
  const review = await Review.findById(req.params.id);
  if (!review || review.user.toString() !== req.user)
    return res.status(403).json({ message: 'Forbidden' });

  await review.remove();
  res.json({ message: 'Review deleted' });
};

module.exports = { addReview, updateReview, deleteReview };
