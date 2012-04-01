trueskill
=========

[TrueSkill](http://research.microsoft.com/en-us/projects/trueskill/) is a
skill-based ranking system developed by Microsoft Research. It is used by Xbox
LIVE to rank and match players. This package implements TrueSkill in
JavaScript as an [npm](http://npmjs.org/) package.

API
---

Import the module.

    var trueskill = require('trueskill');

`TrueSkill` encodes parameters about the game.

    var env = new trueskill.TrueSkill({
      mu: 25,
      sigma: 25 / 3,
      beta: 25 / 6,
      tau: 25 / 300,
      draw: 0.1
    });

where

- mu: the initial mean
- sigma: the initial standard deviation
- beta: the number of skill points to guarantee an 80% chance of winning
- tau: the dynamics factor
- draw: the probability of a draw in [0, 1]


`Rating` encodes a player's rating.

    var rating = new trueskill.Rating(mu, sigma);

where

- mu: the mean value of the rating
- sigma: the standard deviation of the rating


`transformRatings` calculates updated ratings based prior ratings and the
outcome of a game.

    var newRatings = env.transformRatings(
      [
        { 'p1': r1, 'p2': r2 },
        { 'p3': r3, 'p4': r4 }
      ],
      [ 2, 1 ]);

where

- teams: an array of teams, where each team is a map of player id to prior rating
- ranks: the ranks of the teams, where 1 indicates the winner


`matchQuality` calculates the quality of a match as a function of the probability
of all teams drawing.

    var quality = env.matchQuality(
      [
        { 'p1': r1, 'p2': r2 },
        { 'p3': r3, 'p4': r4 }
      ]);

where the `teams` parameter is the same as `transformRatings`.

References
----------

- [TrueSkill](http://research.microsoft.com/en-us/projects/trueskill/)
- [TrueSkill Calculator](http://atom.research.microsoft.com/trueskill/rankcalculator.aspx)
- [Computing Your Skill](http://www.moserware.com/2010/03/computing-your-skill.html)
