import PageLayout from "../components/PageLayout";
import songInputVals from "../components/AdvancedSearchInputVals/InputValsSong";

const Song = () => {
    const routeInfo = {
        routeName: 'song',
        endpoint: `/unified_song_db_dev/select?`,
        placeholder: 'Search the song index database...',
        siteTitle: 'UT Song Index Search',
        inputVals: songInputVals,
    }
    return (
        <PageLayout routeInfo={routeInfo} />
    )
}

export default Song;
