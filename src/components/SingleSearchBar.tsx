import { searchSolr } from "../utils/utils";
import { useState } from "react";

interface SearchBarProps {
    endpoint: string;
    placeholder: string;
    onSearch: (response: { docs: number, numFound: number[] }, searchURL: string, newSearchStartVal: number) => void;
    searchStart: number;
}

export default function SearchBar(props: SearchBarProps) {
    const [query, setQuery] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery((event.target.value));
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const params = new URLSearchParams({
            q: `full_text:*${query}*`,
            indent: "true",
            wt: 'json',
        })
        const fullURL = `${props.endpoint}${params}`;
        
        const data = await searchSolr(fullURL);

        props.onSearch(data.response, fullURL, 0);

    }

    const handleReset = () => {
        setQuery('');
        const response = {
            docs: 0,
            numFound: [],
        }
        props.onSearch(response, '', 0);
    }

    return (
        <form method="post" id="search-form" className="w-full mx-auto px-2 pb-2" onSubmit={handleSubmit} onReset={handleReset}>
            <div className="flex flex-row">
                <input
                    type="text"
                    placeholder={props.placeholder}
                    name="search"
                    className="form-control shadow-inner border-s-2 border-y-2 focus:border-utk-orange focus:outline-none p-1 rounded-l-md md:w-96 "
                    onChange={handleChange}
                />
                <button type="submit" className=" bg-[#dbdcde] border-e-2 border-y-2 rounded-r-md text-utk-smokey hover:bg-utk-orange hover:text-utk-white hover:border-utk-orange text-center p-1 w-24">
                    Search
                </button>
            </div>
            <div className="flex flex-row mt-1 ms-1 text-utk-white text-sm">
                <button type='reset'>Clear Search</button>
            </div>
        </form>

    )
}
