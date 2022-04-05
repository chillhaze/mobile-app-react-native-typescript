interface Theme {
  colors: {
    mainText: string;
    secondaryText: string;
    mainBg: string;
    secondaryBg: string;
    accentColor: string;
    primary: string;
    primaryLighter: string;
    black: string;
    grey: string;
    darkGrey: string;
    white: string;
  };
  spacing: {
    base: number;
    double: number;
    triple: number;
  };
  border: {
    width: {
      thin: number;
      base: number;
      wide: number;
    };
    borderColor: string;
    baseRadius: number;
  };

  shadow: {
    color: string;
    offset: {
      width: number;
      height: number;
    };
    opacity: number;
    radius: number;
    elevation: number;
  };

  font: {
    min: number;
    base: number;
    max: number;
  };
}

const THEME: Theme = {
  colors: {
    mainText: '#008080',
    secondaryText: '#000',
    mainBg: '#008080',
    secondaryBg: '#dde9e9',
    accentColor: 'tomato',
    primary: '#008080',
    primaryLighter: '#018b8b',
    black: '#000',
    grey: '#dadada',
    darkGrey: '#8e8e93',
    white: '#fff',
  },
  spacing: {
    base: 4,
    double: 8,
    triple: 16,
  },
  border: {
    width: {
      thin: 1,
      base: 2,
      wide: 3,
    },
    borderColor: '#008080',
    baseRadius: 3,
  },
  shadow: {
    color: '#000',
    offset: {
      width: 0,
      height: 2,
    },
    opacity: 0.25,
    radius: 3.84,
    elevation: 5,
  },
  font: {
    min: 8,
    base: 16,
    max: 32,
  },
};

export default THEME;
