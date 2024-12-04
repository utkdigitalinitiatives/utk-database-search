import { searchSolr } from "../utils/utils";
import { useState } from "react";
import AdvancedSearchInput from "./AdvancedSearchInput";



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
        console.log(query)
        const params = new URLSearchParams({
            q: `${query}`,
            indent: "true",
            wt: 'json',
        })

        const data = await searchSolr(`${props.endpoint}${params}`)
        props.onSearch(data.response);

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
    ]

    return (
        <form method="post" id="search-form" className="w-full mx-auto p-2" onSubmit={handleSubmit}>
            {songInputVals.map(inputVal =>
                <div className="flex flex-row mt-2">
                    {inputVal.type == 'input' ?
                        <AdvancedSearchInput
                            label={inputVal.label}
                            placeholder={inputVal.placeholder}
                            name={inputVal.name}
                            onChange={inputVal.onChange}
                        />
                        :
                        <div>something</div>
                    }
                </div>
            )}

            <div className="flex flex-row mt-2">
                <label className="text-utk-white mx-2">Select Song Type
                    <select id="songType" name="songType" className="mx-2 text-utk-smokey" onChange={e => setSongType(e.target.value)}>
                        <option value="select">Click Here</option>
                        <option value="aria">Aria</option>
                        <option value="art song">Art Song</option>
                        <option value="carol">Carol</option>
                        <option value="children's">Children's</option>
                        <option value="folk">Folk</option>
                        <option value="national anthem">National Anthem</option>
                        <option value="patriotic">Patriotic</option>
                        <option value="popular">Popular</option>
                        <option value="sacred">Sacred</option>
                        <option value="spiritual">Spiritual</option>
                    </select>
                </label>
            </div>

            <div className="flex flex-row mt-2">
                <label className="text-utk-white mx-2">Accompaniment
                    <select id="accompVal" name="accompVal" className="mx-2 text-utk-smokey" onChange={e => setAccompVal(e.target.value)}>
                        <option value="select">Any Accompaniment</option>
                        <option value="instrumental">Instrumental</option>
                        <option value="keyboard">Keyboard</option>
                        <option value="orchestra">Orchestra</option>
                        <option value="unaccompanied">Unaccompanied</option>
                    </select>
                </label>
            </div>

            <div className="flex flex-row mt-2">
                <label className="text-utk-white mx-2">Choose a language
                    <select id="language" name="language" className="mx-2 text-utk-smokey" onChange={e => setLanguage(e.target.value)}>
                        <option value="select">Any Language</option>
                        <option value="english">English</option>
                        <option value="french">French</option>
                        <option value="german">German</option>
                        <option value="italian">Italian</option>
                        <option value="portuguese">Portuguese</option>
                        <option value="spanish">Spanish</option>
                    </select>
                </label>
            </div>
            <div className="flex flex-row justify-end">
                <button type="submit" className=" bg-[#dbdcde] border-2 mt-2 rounded-md text-utk-smokey hover:bg-utk-orange hover:text-utk-white hover:border-utk-orange text-center p-1 w-24">Search</button>
            </div>
        </form>

    )
}
