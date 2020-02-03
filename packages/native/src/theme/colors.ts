type Color = {
  primary: string
  secondary: string
}

interface TeamColor {
  [index: number]: Color
}

const teamColors: TeamColor = {
  // ARI
  [1]: {
    primary: '#97233F',
    secondary: '#FFB612'
  },
  // ATL
  [2]: {
    primary: '#A71930',
    secondary: '#000000'
  },
  // BAL
  [3]: {
    primary: '#241773',
    secondary: '#000000'
  },
  // BUF
  [4]: {
    primary: '#00338D',
    secondary: '#C60C30'
  },
  // CAR
  [5]: {
    primary: '#0085CA',
    secondary: '#101820'
  },
  // CHI
  [6]: {
    primary: '#0B162A',
    secondary: '#C83803'
  },
  // CIN
  [7]: {
    primary: '#FB4F14',
    secondary: '#000000'
  },
  // CLE
  [8]: {
    primary: '#311D00',
    secondary: '#FF3C00'
  },
  // DAL
  [9]: {
    primary: '#041E42',
    secondary: '#869397'
  },
  // DEN
  [10]: {
    primary: '#002244',
    secondary: '#FB4F14'
  },
  // DET
  [11]: {
    primary: '#0076B6',
    secondary: '#B0B7BC'
  },
  // GB
  [12]: {
    primary: '#203731',
    secondary: '#FFB612'
  },
  // HOU
  [13]: {
    primary: '#03202F',
    secondary: '#A71930'
  },
  // IND
  [14]: {
    primary: '#002C5F',
    secondary: '#A2AAAD'
  },
  // JAC
  [15]: {
    primary: '#006778',
    secondary: '#D7A22A'
  },
  // KC
  [16]: {
    primary: '#E31837',
    secondary: '#FFB81C'
  },
  // LAC
  [29]: {
    primary: '#0080C6',
    secondary: '#FFC20E'
  },
  // LAR
  [32]: {
    primary: '#002244',
    secondary: '#866D4B'
  },
  // MIA
  [19]: {
    primary: '#008E97',
    secondary: '#FC4C02'
  },
  // MIN
  [20]: {
    primary: '#4F2683',
    secondary: '#FFC62F'
  },
  // NE
  [21]: {
    primary: '#002244',
    secondary: '#C60C30'
  },
  // NO
  [22]: {
    primary: '#D3BC8D',
    secondary: '#101820'
  },
  // NYG
  [23]: {
    primary: '#0B2265',
    secondary: '#A71930'
  },
  // NYJ
  [24]: {
    primary: '#125740',
    secondary: '#000000'
  },
  // OAK
  [25]: {
    primary: '#000000',
    secondary: '#A5ACAF'
  },
  // PHI
  [26]: {
    primary: '#004C54',
    secondary: '#A5ACAF'
  },
  // PIT
  [28]: {
    primary: '#101820',
    secondary: '#FFB612'
  },
  // SF
  [31]: {
    primary: '#AA0000',
    secondary: '#B3995D'
  },
  // SEA
  [30]: {
    primary: '#002244',
    secondary: '#69BE28'
  },
  // TB
  [33]: {
    primary: '#D50A0A',
    secondary: '#FF7900'
  },
  // TEN
  [34]: {
    primary: '#0C2340',
    secondary: '#418FDE'
  },
  // WAS
  [35]: {
    primary: '#773141',
    secondary: '#FFB612'
  }
}

export default {
  white: '#FFF',
  black: '#000000',
  teamColors,
  nfl: {
    primary: '#013369',
    secondary: '#D50A0A'
  }
}
