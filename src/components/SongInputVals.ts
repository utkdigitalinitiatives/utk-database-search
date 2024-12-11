const songInputVals = {
  songTitle: {
    type: "input",
    label: "Search by Title",
    placeholder: "Song Title",
    name: "songTitle"
  },
  composer: {
    type: "input",
    label: "Search by Composers",
    placeholder: "Composer's Name",
    name: "composer"
  },
  author: {
    type: "input",
    label: "Search by Authors",
    placeholder: "Author's Name",
    name: "author"
  },
  anthology: {
    type: 'input',
    label: 'Search by Anthology Title',
    placeholder: "Anthology Title",
    name: "anthology",
  },
  firstLine: {
    type: 'input',
    label: 'Search by the First Line',
    placeholder: "Enter the first line",
    name: "firstLine",
  },
  callNumber: {
    type: 'input',
    label: 'Search by Call Number',
    placeholder: "Enter Call Number",
    name: "callNumber",
  },
  songType: {
    type: "select",
    label: "Select Song Type",
    name: "songType",
    optionVals: [
      { value: "aria", optionTitle: "Aria" },
      { value: "art song", optionTitle: "Art Song" },
      { value: "carol", optionTitle: "Carol" },
      { value: "children's", optionTitle: "Children's" },
      { value: "folk", optionTitle: "Folk" },
      {
        value: "national anthem",
        optionTitle: "National Anthem"
      },
      {
        value: "patriotic",
        optionTitle: "Patriotic"
      },
      {
        value: "popular",
        optionTitle: "Popular"
      },
      {
        value: "sacred",
        optionTitle: "Sacred"
      },
      {
        value: "spiritual",
        optionTitle: "Spiritual"
      },
    ]
  },
  accompVal: {
    type: "select",
    label: "Select Accompaniment",
    name: "accompVal",
    optionVals: [
      { value: "instrumental", optionTitle: "Instrumental" },
      { value: "keyboard", optionTitle: "Keyboard" },
      { value: "orchestra", optionTitle: "Orchestra" },
      { value: "unaccompanied", optionTitle: "Unaccompanied" }
    ]
  },
  language: {
    type: "select",
    label: "Choose a Language",
    name: "language",
    optionVals: [
      { value: "english", optionTitle: "English" },
      { value: "french", optionTitle: "French" },
      { value: "german", optionTitle: "German" },
      { value: "italian", optionTitle: "Italian" },
      {
        value: 'portuguese',
        optionTitle: 'Portuguese'
      },
      {
        value: 'spanish',
        optionTitle: 'Spanish'
      },

      {
        value: 'hebrew',
        optionTitle: 'Hebrew'
      },

      {
        value: 'russian',
        optionTitle: 'Russian'
      },
      {
        value: 'gullah',
        optionTitle: 'Gullah',
      },
      {
        value: 'none',
        optionTitle: 'None',
      },
      {
        value: 'hungarian',
        optionTitle: 'Hungarian',
      },
      {
        value: 'yiddish',
        optionTitle: 'Yiddish',
      },
      {
        value: 'greek',
        optionTitle: 'Greek',
      },
      {
        value: 'maori',
        optionTitle: 'Maori',
      },
      {
        value: 'hawaiian',
        optionTitle: 'Hawaiian',
      },
      {
        value: 'tahitian',
        optionTitle: 'Tahitian',
      },
      {
        value: 'swedish',
        optionTitle: 'Swedish',
      },
      {
        value: 'chinese',
        optionTitle: 'Chinese',
      },
      {
        value: 'catalan',
        optionTitle: 'Catalan',
      },
      {
        value: 'romanian',
        optionTitle: 'Romanian',
      },
      {
        value: 'czech',
        optionTitle: 'Czech',
      },
      {
        value: 'polish',
        optionTitle: 'Polish'
      },
      {
        value: 'latvian',
        optionTitle: 'Latvian',
      },
      {
        value: 'lithuanian',
        optionTitle: 'Lithuanian',
      },
      {
        value: 'dutch',
        optionTitle: 'Dutch',
      },
      {
        value: 'gaelic',
        optionTitle: 'Gaelic (Scots)'
      },
      {
        value: 'norwegian',
        optionTitle: 'Norwegian'
      },
      {
        value: 'english,middle',
        optionTitle: 'English, Middle'
      },
      {
        value: 'malayo-polynesian',
        optionTitle: 'Malayo-Polynesian',
      },
      {
        value: 'vietnamese',
        optionTitle: 'Vietnamese',
      },
      {
        value: 'sub-saharan african',
        optionTitle: 'Sub-Saharan African'
      },
      {
        value: 'slavic',
        optionTitle: 'Slavic'
      },
      {
        value: 'irish',
        optionTitle: 'Irish',
      },
      {
        value: 'japanese',
        optionTitle: 'Japanese'
      },
      {
        value: 'icelandic',
        optionTitle: 'Icelandic'
      },
      {
        value: 'north american indian',
        optionTitle: 'North American Indian'
      },
      {
        value: 'indonesian',
        optionTitle: 'Indonesian'
      },
      {
        value: 'iranian',
        optionTitle: 'Iranian',
      },
      {
        value: 'celtic group',
        optionTitle: 'Celtic Group'
      },
      {
        value: 'arabic',
        optionTitle: 'Arabic'
      },
      {
        value: 'nepali',
        optionTitle: 'Nepali'
      },
      {
        value: 'papiamento',
        optionTitle: 'Papiamento'
      },
      {
        value: 'tagalog',
        optionTitle: 'Tagalog',
      },
      {
        value: 'syriac',
        optionTitle: 'Syriac'
      },
      {
        value: 'swahili',
        optionTitle: 'Swahili'
      },
      {
        value: 'albanian',
        optionTitle: 'Albanian'
      },
      {
        value: 'burmese',
        optionTitle: 'Burmese'
      },
      {
        value: 'cambodian',
        optionTitle: 'Cambodian',
      },
      {
        value: 'slovak',
        optionTitle: 'Slovak',
      },
      {
        value: 'finnish',
        optionTitle: 'Finnish'
      },
      {
        value: 'turkish',
        optionTitle: 'Turkish'
      },
      {
        value: 'estonian',
        optionTitle: 'Estonian',
      },
      {
        value: 'breton',
        optionTitle: 'Breton',
      },
      {
        value: 'macedonian',
        optionTitle: 'Macedonian'
      },
      {
        value: 'iroquois',
        optionTitle: 'Iroquois'
      },
      {
        value: 'korean',
        optionTitle: 'Korean'
      },
      {
        value: 'sinhala',
        optionTitle: 'Sinhala'
      },
      {
        value: 'malagasy',
        optionTitle: 'Malagasy'
      },
      {
        value: 'thai',
        optionTitle: 'Thai'
      },
      {
        value: 'ewe',
        optionTitle: 'Ewe'
      },
      {
        value: 'tongan',
        optionTitle: 'Tongan',
      },
      {
        value: 'welsh',
        optionTitle: 'Welsh'
      },
      {
        value: 'bulgarian',
        optionTitle: 'Bulgarian'
      },
      {
        value: 'ukrainian',
        optionTitle: 'Ukrainian'
      },
      {
        value: 'alaskan native',
        optionTitle: 'Alaskan Native'
      },
      {
        value: 'zuni',
        optionTitle: 'Zuni'
      },
      {
        value: 'creole',
        optionTitle: 'Creole'
      },
      {
        value: 'javanese',
        optionTitle: 'Javanese'
      },
      {
        value: 'malay',
        optionTitle: 'Malay'
      },
      {
        value: 'urdu',
        optionTitle: 'Urdu'
      },
      {
        value: 'afrikaans',
        optionTitle: 'Afrikaans'
      },
      {
        value: 'samoan',
        optionTitle: 'Samoan'
      },
      {
        value: 'serbo-croation',
        optionTitle: 'Serbo-Croation (Roman)'
      },
      {
        value: 'faroese',
        optionTitle: 'Faroese'
      },
      {
        value: 'laotion',
        optionTitle: 'Laotion'
      },
      {
        value: 'ethiopic',
        optionTitle: 'Ethiopic'
      },
      {
        value: 'hindi',
        optionTitle: 'Hindi'
      },
      {
        value: 'anglo-saxon',
        optionTitle: 'Anglo-Saxon'
      },
      {
        value: 'xhosa',
        optionTitle: 'Xhosa'
      },
      {
        value: 'armenian',
        optionTitle: 'Armenian'
      },
      {
        value: 'azerbaijani',
        optionTitle: 'Azerbaijani'
      },
      {
        value: 'aramaic',
        optionTitle: 'Aramaic'
      }
    ]
  }
};

export default songInputVals;

