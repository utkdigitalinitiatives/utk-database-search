const symphony = {
    title: {
        type: 'input',
        label: 'Search by symphony title',
        placeholder: 'Title',
        name: 'title',
    },
    composer: {
        type: 'input',
        label: "Search by composer's name",
        placeholder: "Composer's Name",
        name: 'composer_name'
    },
    season: {
        type: 'input',
        label: 'Search by sesaon',
        placeholder: 'E.g.  1st Season 1935-36',
        name: 'season'
    },
    date: {
        type: 'input',
        label: 'Search by a date',
        placeholder: 'E.g. Nov.24 or Apr.23',
        name: 'date',
    }
}


export default symphony;
