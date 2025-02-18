// module.exports = (req, res, next) => {
//   const { difficulty } = req.body.description;

//   if (difficulty !== 'Fácil' || difficulty !== 'Médio' || difficulty !== 'Difícil') {
//     return res.status(400).json({
//       message: 'O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'',
//     });
//   }
//   next();
// };

module.exports = (req, res, next) => {
  const { difficulty } = req.body.description;
  const classifications = ['Fácil', 'Médio', 'Difícil'];

  if (!classifications.includes(difficulty)) {
    return res.status(400).json(
      { message: 'O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'' },
    );
  }

  next();
};