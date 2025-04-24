import { searchSolr } from "../utils/utils";
import PagerButton from "./PagerButton/PagerButton";

interface PagerProps<T> {
    refVal: React.RefObject<HTMLElement>;
    searchStart: number;
    searchURL: string;
    totalFound: number;
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
                <PagerButton
                    text="Previous"
                    onClick={handlePrevious}
                    disabled={props.searchStart <= 0}
                />
                <PagerButton
                    text="Next"
                    onClick={handleNext}
                    disabled={props.totalFound <= (props.searchStart + 10)}
                />
            </div>
        </>
    )
}
