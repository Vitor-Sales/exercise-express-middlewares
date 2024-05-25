module.exports = (req, res, next) => {
  const { rating } = req.body.description;

  if (!Number.isInteger(rating)) {
    return res.status(400).json({
      message: 'O campo rating deve ser um número inteiro entre 1 e 5',
    });
  }
  if (rating < 1 || rating > 5) {
    return res.status(400)
      .json({ message: 'O campo rating deve ser um número inteiro entre 1 e 5' });
  }
  next();
};
