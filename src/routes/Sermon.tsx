
import PageLayout from "./PageLayout";
// import { searchSolr } from "../utils/utils";

export default function Sermon() {
   
    // TODO: add logic to check for localhost vs production here for endpoint
    const routeInfo = {
        routeName: 'sermon',
        endpoint: `/sermon_db_new_dev/select?`,
        placeholder: "Search the sermon index database...",
        siteTitle: 'UT Sermon Index',
    }
       

    return (
        <PageLayout routeInfo={routeInfo} />
    )
}
