import { searchSolr } from "../utils/utils";

interface PagerProps<T> {
    refVal: React.RefObject<HTMLElement>;
    searchStart: number;
    searchURL: string;
    onSearch: (response: T, searchURL: string, newSearchStartVal: number, noResults: boolean) => void;
}

// TODO: more styling and add jump to deeper pages functionality
export default function Pager<T>(props: PagerProps<T>) {

    const handlePrevious = async () => {
        props.refVal.current?.scrollIntoView({
            behavior: 'smooth'
        })
        const newSearchStartVal = props.searchStart - 10;
        const data = await searchSolr(`${props.searchURL}&start=${newSearchStartVal}`);
        props.onSearch(data.response, props.searchURL, newSearchStartVal, false);

    }

    const handleNext = async () => {
        props.refVal.current?.scrollIntoView({
            behavior: 'smooth'
        })
        const newSearchStartVal = props.searchStart + 10;
        const data = await searchSolr(`${props.searchURL}&start=${newSearchStartVal}`);
        props.onSearch(data.response, props.searchURL, newSearchStartVal, false);

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
