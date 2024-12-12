import PageLayout from "../components/PageLayout";
import paperInputVals from "../components/AdvancedSearchInputVals/InputValsNewspaper";

export default function TennesseeNews() {
    const routeInfo = {
        routeName: 'tennessee-news',
        endpoint: `/tennessee_newspaper_db_dev/select/`,
        placeholder: 'Search the Tennessee newspaper index database...',
        siteTitle: 'Tennessee Newspaper Index Search',
        inputVals: paperInputVals,
    }
    return (
        <PageLayout routeInfo={routeInfo} />
    )
}
