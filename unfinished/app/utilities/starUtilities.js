var starUtils = {
  getStarNames: function(stars) {
    return stars.map(function(star) { return star.name });
  },

  findSystem: function(stars, name) {
    return stars.filter(function(star) { return star.name === name })[0];
  }
};

module.exports = starUtils;
