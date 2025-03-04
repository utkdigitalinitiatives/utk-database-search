interface ResultField {
    name: string;
    isLink?: boolean;
    linkTo?: string;
}

interface ResultPageInfo {
    endpoint: string;
    idField: string;
    titleField: string;
    resultFields: ResultField[];
    navigateBackTo: string;
}

const symphonyResultInfo: ResultPageInfo = {
    endpoint: `/knoxville_symphony_dev/select?`,
    idField: 'id',
    titleField: 'title',
    resultFields: [
        { name: 'title', isLink: true, linkTo: '/symphony' },
        { name: 'composer_name', isLink: true, linkTo: '/symphony' },
        { name: 'season', isLink: false },
        { name: 'date', isLink: false },
    ],
    navigateBackTo: '/symphony',
}

const songResultInfo: ResultPageInfo = {
    endpoint: '/unified_song_db_dev/select?',
    idField: 'db_id',
    titleField: 'title',
    resultFields: [
        { name: 'composers', isLink: true, linkTo: '/song' },
        { name: 'authors', isLink: true, linkTo: '/song' },
        { name: 'call_number', isLink: false },
        { name: 'geographic_areas', isLink: true, linkTo: '/song' },
        { name: 'song_types', isLink: true, linkTo: '/song' },
        { name: 'languages', isLink: true, linkTo: '/song' },
        { name: 'accomp_values', isLink: false },
        { name: 'large_work', isLink: true, linkTo: '/song' },
        { name: 'anthology_title', isLink: true, linkTo: '/song' },
        { name: 'first_line', isLink: false },
    ],
    navigateBackTo: '/song',
};

const sermonResultInfo: ResultPageInfo = {
    endpoint: `/sermon_db_new_dev/select?`,
    idField: 'id',
    titleField: 'sermon_title',
    resultFields: [
        { name: 'short_title' },
        { name: 'denomination', isLink: true, linkTo: '/sermon' },
        { name: 'author', isLink: true, linkTo: '/sermon' },
        { name: 'book_title', isLink: true, linkTo: '/sermon' },
        { name: 'bibref', isLink: false },
        { name: 'state', isLink: true, linkTo: '/sermon' },
        { name: 'cross_reference', isLink: false },
        { name: 'library_location', isLink: true, linkTo: '/sermon' },
        { name: 'library_location_code', isLink: false },
        { name: 'number_of_pages', isLink: false },
        { name: 'total_pages', isLink: false },
        { name: 'sermon_page_no', isLink: false },
        { name: 'dates', isLink: false },
        { name: 'date2', isLink: false },
        { name: 'print_face', isLink: false },
        { name: 'publisher', isLink: false },
        { name: 'publication_place', isLink: false },
        { name: 'place_date', isLink: false },
        { name: 'comment', isLink: false },
        { name: 'index', isLink: false },
        { name: 'index_bibref', isLink: false },
        { name: 'keywords', isLink: false },
        { name: 'accession', isLink: false },
        { name: 'c_i', isLink: false },
        { name: 'pmb', isLink: false },
    ],
    navigateBackTo: '/sermon'

}


const analysisResultInfo: ResultPageInfo = {
    endpoint: '/unified_song_db_dev/select?',
    idField: 'db_id',
    titleField: 'title',
    resultFields: [
        { name: 'composers', isLink: true, linkTo: '/song-analysis' },
        { name: 'authors', isLink: true, linkTo: '/song-analysis' },
        { name: 'call_number', isLink: false },
        { name: 'geographic_areas', isLink: true, linkTo: '/song-analysis' },
        { name: 'song_types', isLink: true, linkTo: '/song-analysis' },
        { name: 'languages', isLink: true, linkTo: '/song-analysis' },
        { name: 'accomp_values', isLink: false },
        { name: 'anthology_title', isLink: true, linkTo: '/song-analysis' },
        { name: 'first_line', isLink: false },
        { name: 'db_type', isLink: false },
    ],
    navigateBackTo: '/song-analysis',
};


export { symphonyResultInfo, songResultInfo, sermonResultInfo, analysisResultInfo };
