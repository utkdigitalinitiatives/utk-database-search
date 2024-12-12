const sermonInputVals = {
    sermonFullTitle: {
        type: "input",
        label: "Search by Full Title",
        placeholder: "Full Title",
        name: 'sermon_title'
    },
    shortTitle: {
        type: "input",
        label: "Search Short Title",
        placeholder: 'Short Title',
        name: 'short_title'
    },
    author: {
        type: 'input',
        label: 'Search by Author',
        placeholder: 'Author Name',
        name: 'author'
    },    
    date: {
        type: 'input',
        label: 'Search by dates',
        placeholder: 'Enter a year',
        name: 'dates'
    },
    state: {
        type: 'select',
        label: 'Search by State',
        name: 'state',
        optionVals: [
            { value: 'select', optionTitle: 'Select' },
            { value: 'GA', optionTitle: 'GA' },
            { value: 'MD', optionTitle: 'MD' },
            { value: 'NC', optionTitle: 'NC' },
            { value: 'NcD', optionTitle: 'NcD' },
            { value: 'PA', optionTitle: 'PA' },
            { value: 'SC', optionTitle: 'SC' },
            { value: 'VA', optionTitle: 'VA' },
        ]
    },
    demonination: {
        type: 'select',
        label: 'Search by denomination',
        name: 'denomination',
        optionVals: [
            { value: 'select', optionTitle: 'Select' },
            { value: "Cath.;", optionTitle: 'Catholic'},
            { value: "Cath.;", optionTitle: 'Baptist'},
        ]

    }
}

export default sermonInputVals;