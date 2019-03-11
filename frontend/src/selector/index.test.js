import getPlayer from './index';

describe('getPlayer', () => {
  it('should return correct values', () => {
    const state = {
      bets: {
        data: [
          {
            name: 'Sara Errani',
            genericName: 'HOME',
            bestOddsBookmakers: 'B3',
            betId: 18143945132,
            map: 'sara-errani',
            odds: [
              {
                bookmakerCode: 'B3',
                eachWayTerms: '',
                clickoutUrl: '',
                oddsFractional: '11/8',
                oddsDecimal: 2.37,
                oddsUS: 137,
                bookmakerBetId: '1067148559*499171576*Tennis',
                suspended: false,
              },
              {
                bookmakerCode: 'FS',
                eachWayTerms: '',
                clickoutUrl: '',
                oddsFractional: '13/10',
                oddsDecimal: 2.3,
                oddsUS: 130,
                bookmakerBetId: 'tenis*27882139*924.59585472*2309567',
                suspended: false,
              },
              {
                bookmakerCode: 'MC',
                eachWayTerms: '',
                clickoutUrl: '',
                oddsFractional: '13/10',
                oddsDecimal: 2.3,
                oddsUS: 130,
                bookmakerBetId: 'MTc1Njc3Mzg0OjEzLzEwOjow*175677384',
                suspended: false,
              },
              {
                bookmakerCode: 'TI',
                eachWayTerms: '',
                clickoutUrl: '',
                oddsFractional: '13/10',
                oddsDecimal: 2.3,
                oddsUS: 130,
                bookmakerBetId: 'MTc1Njc3Mzg0OjEzLzEwOjow',
                suspended: false,
              },
              {
                bookmakerCode: 'UM',
                eachWayTerms: '',
                clickoutUrl: '',
                oddsFractional: '5/4',
                oddsDecimal: 2.25,
                oddsUS: 125,
                bookmakerBetId: '*MTE3MDEzODQyOjUvNDo6MA',
                suspended: false,
              },
              {
                bookmakerCode: 'WS',
                eachWayTerms: '',
                clickoutUrl: '',
                oddsFractional: '13/10',
                oddsDecimal: 2.3,
                oddsUS: 130,
                bookmakerBetId: '479697730*148900383*2.3*10.0*4451228*1694713',
                suspended: false,
              },
              {
                bookmakerCode: 'XS',
                eachWayTerms: '',
                clickoutUrl: '',
                oddsFractional: '6/4',
                oddsDecimal: 2.54,
                oddsUS: 153,
                bookmakerBetId: 'tennis*2309567*1.126082348',
                suspended: false,
              },
            ],
          },
        ],
      },
    };

    expect(getPlayer(state)).toEqual([
      {
        name: 'Sara Errani',
        map: 'sara-errani',
        maxOdds: 2.54,
      },
    ]);
  });
});
