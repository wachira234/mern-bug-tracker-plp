const isValidBug = (bug) => {
  return !!(bug.title && bug.description); // Convert to boolean
};


module.exports = { isValidBug };
