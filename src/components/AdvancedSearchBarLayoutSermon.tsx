import { searchSolr } from "../utils/utils.tsx";
import { useState } from "react";
import AdvancedSearchInput from "./AdvancedSearchInput.tsx";
import AdvancedSearchSelect from "./AdvancedSearchSelect.tsx";
import songInputVals from './InputValsSong.ts'



export default function SongAdvanced(props: any) {

    // Initialize state variables
    const [shortTitle, setShortTitle] = useState('');
    const [composer, setComposer] = useState('');
    const [author, setAuthor] = useState('');
    const [accompVal, setAccompVal] = useState('select');
    const [songType, setSongType] = useState('select');
    const [firstLine, setFirstLine] = useState('');
    const [anthology, setAnthology] = useState('');
    const [callNumber, setCallNumber] = useState('');
    const [language, setLanguage] = useState('select');

    // Helper function to create query parameters
    const createParams = () => {
        let queryString = '';
        let queryParts = [];

        if (shortTitle) queryParts.push(`short_title:*${shortTitle}*`);
        if (composer) queryParts.push(`composers:*${composer}*`);
        if (author) queryParts.push(`authors:*${author}*`);
        if (accompVal && accompVal !== 'select') queryParts.push(`accomp_values:*${accompVal}*`);
        if (songType && songType !== 'select') queryParts.push(`song_types:*${songType}*`);
        if (firstLine) queryParts.push(`first_line:*${firstLine}*`);
        if (anthology) queryParts.push(`anthology_title:*${anthology}*`);
        if (callNumber) queryParts.push(`call_number:*${callNumber}*`);
        if (language && language !== 'select') queryParts.push(`languages:*${language}*`);

        if (queryParts.length > 0) queryString = queryParts.join(' AND ');
        return queryString;
    };
    // Handle submit to query results
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const query = createParams()
        const params = new URLSearchParams({
            q: `${query}`,
            indent: "true",
            wt: 'json',
        })
        let fullUrl = `${props.endpoint}${params}`;
        console.log(fullUrl)
        const data = await searchSolr(fullUrl);
        props.onSearch(data.response, fullUrl, 0);

    }
    // Reset query
    const handleReset = () => {
        setSongTitle('');
        setComposer('');
        setAuthor('');
        setAccompVal('select');
        setSongType('select');
        setFirstLine('');
        setAnthology('');
        setCallNumber('');
        setLanguage('select');
        let response = {
            docs: 0,
            numFound: [],
        }
        props.onSearch(response, '', 0);
    }

    // Generalized handle change function
    const handleChange = (field: string, value: string) => {
        if (field === 'songTitle') setSongTitle(value);
        if (field === 'composer') setComposer(value);
        if (field === 'author') setAuthor(value);
        if (field === 'accompVal') setAccompVal(value);
        if (field === 'songType') setSongType(value);
        if (field === 'firstLine') setFirstLine(value);
        if (field === 'anthology') setAnthology(value);
        if (field === 'callNumber') setCallNumber(value);
        if (field === 'language') setLanguage(value);
    };


    return (
        <form method="post" id="search-form" className="mx-auto p-2" onSubmit={handleSubmit} onReset={handleReset}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {Object.entries(songInputVals).map(([key, inputVal], index) => (
                    <div className="" key={index}>
                        {inputVal.type === 'input' ? (
                            <AdvancedSearchInput
                                label={inputVal.label}
                                placeholder={inputVal.placeholder}
                                name={inputVal.name}
                                value={inputVal.name === 'songTitle' ? songTitle : inputVal.name === 'composer' ? composer : ''}
                                onChange={handleChange}
                            />
                        ) : inputVal.type === 'select' ? (
                            <AdvancedSearchSelect
                                label={inputVal.label}
                                optionVals={inputVal.optionVals}
                                name={inputVal.name}
                                value={inputVal.name === 'songType' ? songType : inputVal.name === 'accompVal' ? accompVal : language}
                                onChange={handleChange}
                            />
                        ) : (
                            <div className="text-red-600">An error occurred when loading the advanced form</div>
                        )}
                    </div>
                ))}
            </div>
            <div className="flex flex-row justify-end">
                <button type="submit" className="bg-[#dbdcde] border-2 mt-2 rounded-md text-utk-smokey hover:bg-utk-orange hover:text-utk-white hover:border-utk-orange text-center p-1 w-24">
                    Search
                </button>
            </div>
            <div className="flex flex-row mt-1 ms-1 text-utk-white text-sm">
                <button type="reset">Restart Search</button>
            </div>
        </form>
    )
}