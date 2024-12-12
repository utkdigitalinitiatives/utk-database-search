import PageLayout from "../components/PageLayout"
import symphonyInputVals from '../components/AdvancedSearchInputVals/InputValsSymphony.ts'

export default function Symphony() {
    const routeInfo = {
        routeName: 'symphony',
        endpoint: `/knoxville_symphony_dev/select?`,
        placeholder: 'Search the Knoxville Symphony Orchestra Programs....',
        siteTitle: 'Knoxville Symphony Orchestra Program Index Search',
        inputVals: symphonyInputVals,
    }
    return (
        <PageLayout routeInfo={routeInfo} />
    )
}
