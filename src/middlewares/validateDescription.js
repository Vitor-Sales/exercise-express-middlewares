module.exports = (req, res, next) => {
  const { description } = req.body;

  if (!description) return res.status(400).json({ message: 'O campo description é obrigatório' });
  if (!description.createdAt) res.status(400).json({ message: 'O campo createdAt é obrigatório' });
  if (description.rating === undefined) {
    return res.status(400).json({ message: 'O campo rating é obrigatório' });
  }
  if (!description.difficulty) {
    return res.status(400).json({ message: 'O campo difficulty é obrigatório' });
  }
  next();
};