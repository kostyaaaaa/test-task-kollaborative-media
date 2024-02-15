export const PAGE_STATES = {
  INITIAL: 'initial',
  PAYMENT: 'payment',
};

export const INITIAL_FORM_INITIAL_VALUES = {
  email: '',
  'first-name': '',
  'last-name': '',
  address: '',
  apartment: '',
  city: '',
  zipCode: '',
  state: '',
  country: '',
  phone: '',
};

export const INITIAL_FORM_UNTOUCHED_VALUES = {
  email: false,
  'first-name': false,
  'last-name': false,
  address: false,
  apartment: false,
  city: false,
  zipCode: false,
  state: false,
  country: false,
  phone: false,
};

export const INITIAL_FORM_TOUCHED_VALUES = {
  email: true,
  'first-name': true,
  'last-name': true,
  address: true,
  apartment: true,
  city: true,
  zipCode: true,
  state: true,
  country: true,
  phone: true,
};

export const PAYMENT_FORM_INITIAL_VALUES = {
  'card-number': '',
  name: '',
  expiration: '',
  'Security-code': '',
  'address-change': '',
  country: '',
  'first-name': '',
  'last-name': '',
  address: '',
  apartment: '',
  city: '',
  zipCode: '',
  state: '',
  phone: '',
};

export const STATES = [
  {
    title: 'Alabama',
    alternateValues: '["Alabama"]',
    value: 'AL',
  },
  {
    title: 'Alaska',
    alternateValues: '["Alaska"]',
    value: 'AK',
  },
  {
    title: 'Arizona',
    alternateValues: '["Arizona"]',
    value: 'AZ',
  },
  {
    title: 'Arkansas',
    alternateValues: '["Arkansas"]',
    value: 'AR',
  },
  {
    title: 'California',
    alternateValues: '["California"]',
    value: 'CA',
  },
  {
    title: 'Colorado',
    alternateValues: '["Colorado"]',
    value: 'CO',
  },
  {
    title: 'Connecticut',
    alternateValues: '["Connecticut"]',
    value: 'CT',
  },
  {
    title: 'Delaware',
    alternateValues: '["Delaware"]',
    value: 'DE',
  },
  {
    title: 'Florida',
    alternateValues: '["Florida"]',
    value: 'FL',
  },
  {
    title: 'Georgia',
    alternateValues: '["Georgia"]',
    value: 'GA',
  },
  {
    title: 'Hawaii',
    alternateValues: '["Hawaii"]',
    value: 'HI',
  },
  {
    title: 'Idaho',
    alternateValues: '["Idaho"]',
    value: 'ID',
  },
  {
    title: 'Illinois',
    alternateValues: '["Illinois"]',
    value: 'IL',
  },
  {
    title: 'Indiana',
    alternateValues: '["Indiana"]',
    value: 'IN',
  },
  {
    title: 'Iowa',
    alternateValues: '["Iowa"]',
    value: 'IA',
  },
  {
    title: 'Kansas',
    alternateValues: '["Kansas"]',
    value: 'KS',
  },
  {
    title: 'Kentucky',
    alternateValues: '["Kentucky"]',
    value: 'KY',
  },
  {
    title: 'Louisiana',
    alternateValues: '["Louisiana"]',
    value: 'LA',
  },
  {
    title: 'Maine',
    alternateValues: '["Maine"]',
    value: 'ME',
  },
  {
    title: 'Maryland',
    alternateValues: '["Maryland"]',
    value: 'MD',
  },
  {
    title: 'Massachusetts',
    alternateValues: '["Massachusetts"]',
    value: 'MA',
  },
  {
    title: 'Michigan',
    alternateValues: '["Michigan"]',
    value: 'MI',
  },
  {
    title: 'Minnesota',
    alternateValues: '["Minnesota"]',
    value: 'MN',
  },
  {
    title: 'Mississippi',
    alternateValues: '["Mississippi"]',
    value: 'MS',
  },
  {
    title: 'Missouri',
    alternateValues: '["Missouri"]',
    value: 'MO',
  },
  {
    title: 'Montana',
    alternateValues: '["Montana"]',
    value: 'MT',
  },
  {
    title: 'Nebraska',
    alternateValues: '["Nebraska"]',
    value: 'NE',
  },
  {
    title: 'Nevada',
    alternateValues: '["Nevada"]',
    value: 'NV',
  },
  {
    title: 'New Hampshire',
    alternateValues: '["New Hampshire"]',
    value: 'NH',
  },
  {
    title: 'New Jersey',
    alternateValues: '["New Jersey"]',
    value: 'NJ',
  },
  {
    title: 'New Mexico',
    alternateValues: '["New Mexico"]',
    value: 'NM',
  },
  {
    title: 'New York',
    alternateValues: '["New York"]',
    value: 'NY',
  },
  {
    title: 'North Carolina',
    alternateValues: '["North Carolina"]',
    value: 'NC',
  },
  {
    title: 'North Dakota',
    alternateValues: '["North Dakota"]',
    value: 'ND',
  },
  {
    title: 'Ohio',
    alternateValues: '["Ohio"]',
    value: 'OH',
  },
  {
    title: 'Oklahoma',
    alternateValues: '["Oklahoma"]',
    value: 'OK',
  },
  {
    title: 'Oregon',
    alternateValues: '["Oregon"]',
    value: 'OR',
  },
  {
    title: 'Pennsylvania',
    alternateValues: '["Pennsylvania"]',
    value: 'PA',
  },
  {
    title: 'Puerto Rico',
    alternateValues: '["Puerto Rico"]',
    value: 'PR',
  },
  {
    title: 'Rhode Island',
    alternateValues: '["Rhode Island"]',
    value: 'RI',
  },
  {
    title: 'South Carolina',
    alternateValues: '["South Carolina"]',
    value: 'SC',
  },
  {
    title: 'South Dakota',
    alternateValues: '["South Dakota"]',
    value: 'SD',
  },
  {
    title: 'Tennessee',
    alternateValues: '["Tennessee"]',
    value: 'TN',
  },
  {
    title: 'Texas',
    alternateValues: '["Texas"]',
    value: 'TX',
  },
  {
    title: 'Utah',
    alternateValues: '["Utah"]',
    value: 'UT',
  },
  {
    title: 'Vermont',
    alternateValues: '["Vermont"]',
    value: 'VT',
  },
  {
    title: 'Virginia',
    alternateValues: '["Virginia"]',
    value: 'VA',
  },
  {
    title: 'Washington',
    alternateValues: '["Washington"]',
    value: 'WA',
  },
  {
    title: 'Washington DC',
    alternateValues: '["District of Columbia"]',
    value: 'DC',
  },
  {
    title: 'West Virginia',
    alternateValues: '["West Virginia"]',
    value: 'WV',
  },
  {
    title: 'Wisconsin',
    alternateValues: '["Wisconsin"]',
    value: 'WI',
  },
  {
    title: 'Wyoming',
    alternateValues: '["Wyoming"]',
    value: 'WY',
  },
  {
    title: 'Armed Forces Pacific',
    alternateValues: '["Armed Forces Pacific"]',
    value: 'AP',
  },
];
