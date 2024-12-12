// Import the input values for the advanced search items
import paperInputVals from './components/AdvancedSearchInputVals/InputValsNewspaper';
import symphonyInputVals from './components/AdvancedSearchInputVals/InputValsSymphony';
import songInputVals from './components/AdvancedSearchInputVals/InputValsSong';
import sermonInputVals from './components/AdvancedSearchInputVals/InputValsSermon';

const newsRouteInfo = {
    routeName: 'tennessee-news',
    endpoint: `/tennessee_newspaper_db_dev/select/`,
    placeholder: 'Search the Tennessee newspaper index database...',
    siteTitle: 'Tennessee Newspaper Index Search',
    inputVals: paperInputVals,
}

const symphonyRouteInfo = {
    routeName: 'symphony',
    endpoint: `/knoxville_symphony_dev/select?`,
    placeholder: 'Search the Knoxville Symphony Orchestra Programs....',
    siteTitle: 'Knoxville Symphony Orchestra Program Index Search',
    inputVals: symphonyInputVals,
}

const songRouteInfo = {
    routeName: 'song',
    endpoint: `/unified_song_db_dev/select?`,
    placeholder: 'Search the song index database...',
    siteTitle: 'UT Song Index Search',
    inputVals: songInputVals,
}

const sermonRouteInfo = {
    routeName: 'sermon',
    endpoint: `/sermon_db_new_dev/select?`,
    placeholder: "Search the sermon index database...",
    siteTitle: 'UT Sermon Index',
    inputVals: sermonInputVals,
}


export { sermonRouteInfo, songRouteInfo, symphonyRouteInfo, newsRouteInfo } ;