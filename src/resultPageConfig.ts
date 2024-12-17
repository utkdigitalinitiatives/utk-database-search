interface ResultField {
    name: string;
    isLink?: boolean;
    linkTo?: string;
}

interface ResultPageInfo {
    endpoint: string;
    queryField: string;
    resultFields: ResultField[];
    navigateBackTo: string;
}

const symphonyResultInfo: ResultPageInfo = {
    endpoint: `/knoxville_symphony_dev/select?`,
    queryField: 'id',
    resultFields: [
        { name: 'title', isLink: true, linkTo: '/symphony' },
        { name: 'composer_name', isLink: true, linkTo: '/composer' },
        { name: 'season' },  
        { name: 'date' },    
    ],
    navigateBackTo: '/symphony',
}

const songResultInfo: ResultPageInfo = {
    endpoint: '/unified_song_db_dev/select?',  // The endpoint for the data request
    queryField: 'id',  // The query field used for fetching data
    resultFields: [
        { name: 'composers', isLink: true, linkTo: '/song' },  // Composers are links
        { name: 'authors', isLink: true, linkTo: '/song' },    // Authors are links
        { name: 'call_number' },  // Call number is plain text
        { name: 'geographic_areas', isLink: true, linkTo: '/song' },  // Geographic areas are links
        { name: 'song_types', isLink: true, linkTo: '/song' },  // Song type is a link
        { name: 'languages', isLink: true, linkTo: '/song' },  // Languages are links
        { name: 'accomp_values' },  // Accompaniment is plain text (no link)
        { name: 'anthology_title', isLink: true, linkTo: '/song' },  // Anthology title is a link
        { name: 'first_line' },  // First line is plain text
    ],
    navigateBackTo: '/song',  // The default navigation URL when no specific link is provided
};
export { symphonyResultInfo, songResultInfo };
