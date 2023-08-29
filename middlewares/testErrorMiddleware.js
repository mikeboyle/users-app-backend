const testErrorMiddleware = (req, res, next) => {
  try {
    const { error } = req.query;
    if (error) {
      throw new Error(error);
    }
    next();
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  testErrorMiddleware,
};
