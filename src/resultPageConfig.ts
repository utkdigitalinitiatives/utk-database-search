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
        { name: 'composer_name', isLink: true, linkTo: '/composer' },
        { name: 'season' },  
        { name: 'date' },    
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
        { name: 'call_number' },  
        { name: 'geographic_areas', isLink: true, linkTo: '/song' }, 
        { name: 'song_types', isLink: true, linkTo: '/song' }, 
        { name: 'languages', isLink: true, linkTo: '/song' }, 
        { name: 'accomp_values' },  
        { name: 'anthology_title', isLink: true, linkTo: '/song' },
        { name: 'first_line' },  
    ],
    navigateBackTo: '/song', 
};


const newspaperResultInfo: ResultPageInfo = {
    endpoint: `/tennessee_newspaper_db_dev/select?`,
    idField:'id',
    titleField: 'mainentry_title',
    resultFields: []
}

const sermonResultInfo: ResultPageInfo = {
    endpoint:`/sermon_db_new_dev/select?`,
    idField: 'id',
    titleField: 'sermon_title',
    resultFields: [
        { name: 'short_title' },
        { name: 'denomination', isLink: true, linkTo:'/sermon' },
        { name: 'author', isLink: true, linkTo:'/sermon' },
        { name: 'book_title', isLink: true, linkTo:'/sermon' },
        { name: 'bibref' },
        { name: 'state', isLink: true, linkTo:'/sermon'},
        { name: 'cross_reference' },
        { name: 'library_location', isLink: true, linkTo:'/sermon'},
        { name: 'library_location_code' },
        { name: 'number_of_pages' },
        { name: 'total_pages' },
        { name: 'sermon_page_no' },
        { name: 'dates' },
        { name: 'date2' },
        { name: 'print_face' },
        { name: 'publisher' },
        { name: 'publication_place' },
        { name: 'place_date' },
        { name: 'comment' },
        { name: 'index' },
        { name: 'index_bibref' },
        { name: 'keywords'},
        { name: 'accession'},
        { name: 'c_i'},
        { name: 'pmb'},
    ],
    navigateBackTo: '/sermon'

}

export { symphonyResultInfo, songResultInfo, sermonResultInfo, newspaperResultInfo };
