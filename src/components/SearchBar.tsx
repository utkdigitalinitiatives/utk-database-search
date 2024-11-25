// import { Form } from "react-router-dom";
import { searchSolr } from "../utils/utils";
import { useState } from "react";


export default function SearchBar(props: any) {
    const [query, setQuery] = useState('');

    const handleChange = (event: any) => {
        setQuery((event.target.value).toUpperCase());
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const params = new URLSearchParams({
            q: query,
            indent: "true",
            wt: 'json',
        })

        const data = await searchSolr(`${props.endpoint}${params}`)
        props.onSearch(data.response);
        
    }

    return (
        <form method="post" id="search-form" className="w-full mx-auto" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder={props.placeholder}
                name="search"
                className="form-control shadow-inner border-s-2 border-y-2 focus:border-utk-orange focus:outline-none p-1 rounded-l-md md:w-96 "
                onChange={handleChange}
            />
            <button type="submit" className=" bg-[#dbdcde] border-e-2 border-y-2 rounded-r-md text-utk-smokey hover:bg-utk-orange hover:text-utk-white hover:border-utk-orange text-center p-1 w-24">Search</button>
        </form>

    )
}
