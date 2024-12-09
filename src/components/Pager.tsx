import { searchSolr } from "../utils/utils";

export default function Pager(props: any) {
    console.log(props);

    const handlePrevious = async () => {
        let newSearchStartVal = props.searchStart - 10;
        const data = await searchSolr(`${props.searchURL}&start=${newSearchStartVal}`);
        props.onSearch(data.response, props.searchURL, newSearchStartVal);

    }

    const handleNext = async () => {
        let newSearchStartVal = props.searchStart + 10;
        const data = await searchSolr(`${props.searchURL}&start=${newSearchStartVal}`);
        props.onSearch(data.response, props.searchURL, newSearchStartVal);

    }


    return (
        <>
            <div className="flex flex-row justify-center my-1">
                {props.searchStart > 0 ?
                    <button className="mx-2 p-2 border rounded-sm border-utk-smokey" onClick={handlePrevious}>Previous</button>
                    :
                    <div className="mx-2 p-2 border rounded-sm border-utk-orange" >Previous</div>
                }
                <button className="mx-2 p-2 border rounded-sm border-utk-smokey" onClick={handleNext}>Next</button>
            </div>
        </>
    )
}
