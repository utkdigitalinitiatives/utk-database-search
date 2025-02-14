// Import the input values for the advanced search items
import paperInputVals from './configFiles/AdvancedSearchInputVals/InputValsNewspaper';
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

const newsRouteInfo: routeInfo = {
    routeName: 'tennessee-news',
    fieldConfigName: 'tennesseeNews',
    endpoint: `/tennessee_newspaper_db_dev/select?`,
    placeholder: 'Search the Tennessee newspaper index database...',
    siteTitle: 'Tennessee Newspaper Index Search',
    inputVals: paperInputVals,
}

const symphonyRouteInfo: routeInfo = {
    routeName: 'symphony',
    fieldConfigName: 'symphony',
    endpoint: `/knoxville_symphony_dev/select?`,
    placeholder: 'Search the Knoxville Symphony Orchestra Programs....',
    siteTitle: 'Knoxville Symphony Orchestra Program Index Search',
    inputVals: symphonyInputVals,
}

const songRouteInfo: routeInfo = {
    routeName: 'song',
    fieldConfigName: 'song',
    endpoint: `/unified_song_db_dev/select?`,
    placeholder: 'Search the song index database...',
    siteTitle: 'UT Song Index Search',
    inputVals: songInputVals,
}

const sermonRouteInfo: routeInfo = {
    routeName: 'sermon',
    fieldConfigName: 'sermon',
    endpoint: `/sermon_db_new_dev/select?`,
    placeholder: "Search the sermon index database...",
    siteTitle: 'UT Sermon Index',
    inputVals: sermonInputVals,
}

const analysisRouteInfo: routeInfo = {
    routeName: 'song-analysis',
    fieldConfigName: 'song-analysis',
    endpoint: `/unified_song_db_dev/select?`,
    placeholder: 'Search the Anaylsis index database...',
    siteTitle: 'UT Song Analysis Index',
    inputVals: analysisInputVals,
}


export { sermonRouteInfo, songRouteInfo, symphonyRouteInfo, newsRouteInfo, analysisRouteInfo };
