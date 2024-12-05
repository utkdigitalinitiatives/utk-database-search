import { searchSolr } from "../utils/utils";
import { useState } from "react";
import AdvancedSearchInput from "./AdvancedSearchInput";
import AdvancedSearchSelect from "./AdvancedSearchSelect";



export default function SongAdvanced(props: any) {

    // const [query, setQuery] = useState('');
    const [songTitle, setSongTitle] = useState('');
    const [composer, setComposer] = useState('');
    const [author, setAuthor] = useState('');
    const [accompVal, setAccompVal] = useState('select');
    const [songType, setSongType] = useState('select');
    const [firstLine, setFirstLine] = useState('');
    const [anthology, setAnthology] = useState('');
    const [callNumber, setCallNumber] = useState('');
    const [language, setLanguage] = useState('select')

    const createParams = () => {
        let queryString = "";
        let queryParts = [];
        if (songTitle) {
            queryParts.push(`title:*${songTitle}*`);
        }

        if (composer) {
            queryParts.push(`composers:*${composer}*`);
        }

        if (author) {
            queryParts.push(`authors:*${author}*`);
        }

        if (accompVal && accompVal != 'select') {
            queryParts.push(`accomp_values:*${accompVal}*`);
        }

        if (songType && songType != 'select') {
            queryParts.push(`song_types:*${songType}*`);
        }

        if (firstLine) {
            queryParts.push(`first_line:*${firstLine}*`);
        }

        if (anthology) {
            queryParts.push(`anthology_title:*${anthology}*`);
        }

        if (callNumber) {
            queryParts.push(`call_number:*${callNumber}*`);
        }

        if (language && language != 'select') {
            queryParts.push(`languages:*${language}*`);
        }

        if (queryParts.length > 0) {
            queryString = queryParts.join(" AND ")
        }
        return queryString
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const query = createParams()
        const params = new URLSearchParams({
            q: `${query}`,
            indent: "true",
            wt: 'json',
        })
        let fullUrl = `${props.endpoint}${params}`;
        const data = await searchSolr(fullUrl);
        props.onSearch(data.response);

    }

    const handleReset = () => {
        let response = {
            docs: 0,
            numFound: [],
        }
        props.onSearch(response);
    }

    const handleSongTitleChange = (value: string) => {
        setSongTitle(value);
    };

    const handleComposerChange = (value: string) => {
        setComposer(value);
    };

    const handleAuthorChange = (value: string) => {
        setAuthor(value);
    };

    const handleAnthologyChange = (value: string) => {
        setAnthology(value);
    };

    const handleFirstLineChange = (value: string) => {
        setFirstLine(value);
    };

    const handleCallNumberChange = (value: string) => {
        setCallNumber(value);
    };

    const handleSongTypeChange = (value: string) => {
        setSongType(value);
    };

    const handleAccompChange = (value: string) => {
        setAccompVal(value);
    };

    const handleLanguageChange = (value: string) => {
        setLanguage(value);
    };


    const songInputVals = [
        {
            type: 'input',
            label: 'Search by Title',
            placeholder: "Song Title",
            name: "songTitle",
            onChange: handleSongTitleChange
        },
        {
            type: 'input',
            label: 'Search by Composers',
            placeholder: "Composer's Name",
            name: "composer",
            onChange: handleComposerChange
        },
        {
            type: 'input',
            label: 'Search by Authors',
            placeholder: "Author's Name",
            name: "author",
            onChange: handleAuthorChange,
        },
        {
            type: 'input',
            label: 'Search by Anthology Title',
            placeholder: "Anthology Title",
            name: "anthology",
            onChange: handleAnthologyChange,
        },
        {
            type: 'input',
            label: 'Search by the First Line',
            placeholder: "Enter the first line",
            name: "firstLine",
            onChange: handleFirstLineChange,
        },
        {
            type: 'input',
            label: 'Search by Call Number',
            placeholder: "Enter Call Number",
            name: "callNumber",
            onChange: handleCallNumberChange,
        },
        {
            type: 'select',
            label: 'Select Song Type',
            onChange: handleSongTypeChange,
            optionVals: [
                {
                    value: 'select',
                    optionTitle: 'Select Song Type'
                },
                {
                    value: 'aria',
                    optionTitle: 'Aria'
                },
                {
                    value: 'art song',
                    optionTitle: 'Art Song'
                },
                {
                    value: 'carol',
                    optionTitle: 'Carol'
                },
                {
                    value: "children's",
                    optionTitle: "Children's"
                },
                {
                    value: "folk",
                    optionTitle: "Folk"
                },
                {
                    value: "national anthem",
                    optionTitle: "National Anthem"
                },
                {
                    value: "patriotic",
                    optionTitle: "Patriotic"
                },
                {
                    value: "popular",
                    optionTitle: "Popular"
                },
                {
                    value: "sacred",
                    optionTitle: "Sacred"
                },
                {
                    value: "spiritual",
                    optionTitle: "Spiritual"
                },
            ]
        },
        {
            type: 'select',
            label: 'Accompaniment',
            onChange: handleAccompChange,
            optionVals: [
                {
                    value: 'select',
                    optionTitle: 'Select Accompaniment'
                },
                {
                    value: 'instrumental',
                    optionTitle: 'Instrumental'
                },
                {
                    value: 'keyboard',
                    optionTitle: 'Keyboard'
                },
                {
                    value: 'orchestra',
                    optionTitle: 'Orchestra'
                },
                {
                    value: 'unaccompanied',
                    optionTitle: 'Unaccompanied'
                },
            ]
        },
        {
            type: 'select',
            label: 'Language',
            onChange: handleLanguageChange,
            optionVals: [
                {
                    value: 'select',
                    optionTitle: 'Choose a Language'
                },
                {
                    value: 'english',
                    optionTitle: 'English'
                },
                {
                    value: 'french',
                    optionTitle: 'French'
                },
                {
                    value: 'german',
                    optionTitle: 'German'
                },
                {
                    value: 'italian',
                    optionTitle: 'Italian'
                },
                {
                    value: 'portuguese',
                    optionTitle: 'Portuguese'
                },
                {
                    value: 'spanish',
                    optionTitle: 'Spanish'
                },
            ]
        }
    ]

    return (
        <form method="post" id="search-form" className="w-full mx-auto p-2" onSubmit={handleSubmit} onReset={handleReset}>
            {songInputVals.map((inputVal, index) =>
                <div className="flex flex-row mt-2" key={index}>
                    {inputVal.type == 'input' ? (
                        <AdvancedSearchInput
                            label={inputVal.label}
                            placeholder={inputVal.placeholder}
                            name={inputVal.name}
                            onChange={inputVal.onChange}
                        />
                    ) : inputVal.type == 'select' ? (
                        <AdvancedSearchSelect
                            label={inputVal.label}
                            optionVals={inputVal.optionVals}
                            onChange={inputVal.onChange}
                        />
                    ) :
                        <div className="text-red-600">An error occurred when loading the advanced form</div>
                    }
                </div>
            )}
            <div className="flex flex-row justify-end">
                <button type="submit" className=" bg-[#dbdcde] border-2 mt-2 rounded-md text-utk-smokey hover:bg-utk-orange hover:text-utk-white hover:border-utk-orange text-center p-1 w-24">Search</button>
                <button type="reset">Restart Search</button>
            </div>
        </form>

    )
}
