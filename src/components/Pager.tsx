import { searchSolr } from "../utils/utils";


// TODO: more styling and add jump to deeper pages functionality
export default function Pager(props: any) {

    const handlePrevious = async () => {
        props.refVal.current?.scrollIntoView({
            behavior: 'smooth'
        })
        let newSearchStartVal = props.searchStart - 10;
        const data = await searchSolr(`${props.searchURL}&start=${newSearchStartVal}`);
        props.onSearch(data.response, props.searchURL, newSearchStartVal);

    }

    const handleNext = async () => {
        props.refVal.current?.scrollIntoView({
            behavior: 'smooth'
        })
        let newSearchStartVal = props.searchStart + 10;
        const data = await searchSolr(`${props.searchURL}&start=${newSearchStartVal}`);
        props.onSearch(data.response, props.searchURL, newSearchStartVal);

    }


    return (
        <>
            <div className="flex flex-row justify-center my-2">
                {props.searchStart > 0 ?
                    <button className="mx-2 p-2 border rounded-md border-utk-orange shadow-lg ease-in-out duration-300 hover:scale-105" onClick={handlePrevious}>Previous</button>
                    :
                    <button disabled className="mx-2 p-2 border bg-neutral-300 text-neutral-50 rounded-md cursor-not-allowed" >Previous</button>
                }
                <button className="mx-2 p-2 border rounded-md border-utk-orange shadow-lg ease-in-out duration-300 hover:scale-105" onClick={handleNext}>Next</button>
            </div>
        </>
    )
}
