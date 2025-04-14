// Import the input values for the advanced search items
import symphonyInputVals from './configFiles/AdvancedSearchInputVals/InputValsSymphony';
import songInputVals from './configFiles/AdvancedSearchInputVals/InputValsSong';
import sermonInputVals from './configFiles/AdvancedSearchInputVals/InputValsSermon';
import analysisInputVals from './configFiles/AdvancedSearchInputVals/InputValsAnalysis';

interface routeInfo {
    routeName: string;
    fieldConfigName: string;
    endpoint: string;
    placeholder: string;
    siteTitle: string;
    inputVals: any;
}

const symphonyRouteInfo: routeInfo = {
    routeName: 'symphony',
    fieldConfigName: 'symphony',
    endpoint: `/knoxville_symphony_dev/select?`,
    placeholder: 'Search the Knoxville Symphony Orchestra Programs....',
    siteTitle: 'Knoxville Symphony Orchestra Program Index',
    inputVals: symphonyInputVals,
}

const songRouteInfo: routeInfo = {
    routeName: 'song',
    fieldConfigName: 'song',
    endpoint: `/unified_song_db_dev/select?`,
    placeholder: 'Search the song index database...',
    siteTitle: 'Song Index Search',
    inputVals: songInputVals,
}

const sermonRouteInfo: routeInfo = {
    routeName: 'sermon',
    fieldConfigName: 'sermon',
    endpoint: `/sermon_db_new_dev/select?`,
    placeholder: "Search the sermon index database...",
    siteTitle: 'Sermon Index',
    inputVals: sermonInputVals,
}

const analysisRouteInfo: routeInfo = {
    routeName: 'song-analysis',
    fieldConfigName: 'songAnalysis',
    endpoint: `/unified_song_db_dev/select?`,
    placeholder: 'Search the Anaylsis index database...',
    siteTitle: 'Analysis Index',
    inputVals: analysisInputVals,
}


export { sermonRouteInfo, songRouteInfo, symphonyRouteInfo, analysisRouteInfo };
