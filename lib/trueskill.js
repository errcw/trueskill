var _ = require('underscore');

// The module to be exported
var trueskill = module.exports = {};

// A TrueSkill environment
trueskill.TrueSkill = function(config) {
  this.config = _.defaults(config, {
    mu: 25,
    sigma: 25 / 3,
    beta: 4.16,
    tau: 0.0833,
    draw: 0.5
  });
};

// Calculates updated ratings from the specified ratings and ranks
trueskill.TrueSkill.prototype.transformRatings = function(teams, ranks) {
  return ratingGroups;
};

// Calculates the quality of a match in [0, 1]
trueskill.TrueSkill.prototype.matchQuality = function(teams) {
  return 1;
};

// A player rating
trueskill.Rating = function(mu, sigma) {
  this.mu = mu;
  this.sigma = sigma;
};
