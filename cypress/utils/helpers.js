const getRandomCategory = (categories) => {
    return categories[Math.floor(Math.random() * categories.length)];
  };
  
  module.exports = {
    getRandomCategory
  };
  