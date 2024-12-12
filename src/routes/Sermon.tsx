import PageLayout from "../components/PageLayout.tsx";
import sermonInputVals from '../components/InputValsSermon.ts'

export default function Sermon() {

    // TODO: add logic to check for localhost vs production here for endpoint
    const routeInfo = {
        routeName: 'sermon',
        endpoint: `/sermon_db_new_dev/select?`,
        placeholder: "Search the sermon index database...",
        siteTitle: 'UT Sermon Index',
        inputVals: sermonInputVals,
    }





    // Props type definition
    return (
        <PageLayout routeInfo={routeInfo} />
    )
}
