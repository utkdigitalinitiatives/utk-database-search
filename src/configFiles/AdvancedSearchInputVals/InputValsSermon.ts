const sermonInputVals = {
    sermonFullTitle: {
        type: "input",
        label: "Search by Full Title",
        placeholder: "Full Title",
        name: 'sermon_title'
    },
    keyword: {
        type: 'input',
        label: 'Search by some key words',
        placeholder: 'Prayer, communion, exhortation, etc..',
        name: 'keywords'
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
            { value: "Bapt", optionTitle: 'Baptist'},
            { value: "Cath", optionTitle: 'Catholic'},
            { value: "Cong", optionTitle: 'Congregationalist'},
            { value: "Epis", optionTitle: 'Episcopaian'},
            { value: "Luth", optionTitle: 'Lutheran'},
            { value: "Meth", optionTitle: 'Methodist'},
            { value: "Pres", optionTitle: 'Presbyterian'},
            { value: "QUAKER", optionTitle: 'Quaker'},
            { value: "Tory Epis", optionTitle: 'Tory Episcopaian'},
            { value: "*", optionTitle: 'Unknown'},
        ]

    }
}

export default sermonInputVals;