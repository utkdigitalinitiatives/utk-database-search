import PageLayout from "./PageLayout";


const Song = () => {
    const routeInfo = {
        routeName: 'song',
        endpoint:  `/unified_song_db_dev/select?`,
        placeholder: 'Search the song index database...',
        siteTitle: 'UT Song Index Search',
    }
    return (
        <PageLayout routeInfo={routeInfo} />
    )
}

export default Song;
