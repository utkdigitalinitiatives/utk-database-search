
import PageLayout from "./PageLayout";
// import { searchSolr } from "../utils/utils";

export default function Sermon() {
   
    // TODO: add logic to check for localhost vs production here for endpoint
    const endpoint = `/sermon_db_new_dev/select?`;
    const placeholder = "Search the sermon index database...";
    const title = 'UT Sermon Index'
    

    return (
        <PageLayout endpoint={endpoint} placeholder={placeholder} title={title}/>
    )
}
