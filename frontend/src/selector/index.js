export default ({ bets: { data } }) => data
  && data.map(({ name, map, odds }) => ({
    name,
    map,
    maxOdds: odds.reduce(
      (prev, { oddsDecimal }) => (prev > oddsDecimal ? prev : oddsDecimal),
      0,
    ),
  }));
