import SingleSearchBar from "../components/SingleSearchBar";
import SongAdvancedSearch from '../components/SongAdvancedSearchBarLayout';
import ResultHeader from "../components/ResultHeader";
import { useEffect, useRef, useState } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import SongResults from "../components/SongResults";
import Pager from "../components/Pager";
import { searchSolr } from "../utils/utils";
// import { useLocation } from "react-router";

const Song = () => {
    const searchRef = useRef<HTMLDivElement | null>(null);
    const [results, setResults] = useState([]);
    const [totalFound, setTotalFound] = useState(0);
    const [searchURL, setSearchURL] = useState('');
    const [searchStartVal, setSearchStartVal] = useState(0);

    const endpoint = `/unified_song_db_dev/select?`;
    const placeholder = "Search the song database...";
    const [singleSearchVisible, setSingleSearchVisible] = useState(true);
    const [advancedSearchVisible, setAdvancedSearchVisible] = useState(false);

    useEffect(() => {
        const getData = async () => {

            const previousSearchURL = sessionStorage.getItem('searchURL');
            const start = sessionStorage.getItem('startVal');
            if (previousSearchURL) {
                try {
                    const data = await searchSolr(`${previousSearchURL}&start=${start}`);
                    setTotalFound(data.response.numFound)
                    setResults(data.response.docs);
                    setSearchURL(previousSearchURL);
                    if (start) {
                        setSearchStartVal(parseInt(start));
                    }
                } catch (error) {
                    console.error('Error fetching existing data:', error);
                }

            }
        };
        getData();

    }, [])
    const handleSearchResults = (response: any, searchURL: string, startVal: number) => {
        setResults(response.docs);
        setTotalFound(response.numFound);
        setSearchURL(searchURL);
        setSearchStartVal(startVal);
        sessionStorage.setItem('searchURL', `${searchURL}`);
        sessionStorage.setItem('startVal', `${startVal}`);
    }

    const setSingleInvisible = () => {
        setSingleSearchVisible(false);
        setAdvancedSearchVisible(true);
    }

    const setAdvancedInvisible = () => {
        setAdvancedSearchVisible(false);
        setSingleSearchVisible(true);
    }


    return (
        <>
            <main className=''>
                <div className="bg-utk-smokey">
                    <Breadcrumbs />
                </div>
                <div className="bg-[url('/src/assets/images/UT-bridge-campus.png')] bg-cover bg-center bg-slate-600 bg-blend-soft-light shadow-md">
                    <div className='h-full grid justify-center my-auto py-3'>
                        <h1 className='text-center flex justify-center items-center text-2xl md:text-4xl text-utk-white py-2 font-medium'>UT Song Index</h1>
                        {singleSearchVisible &&
                            <div className="bg-[rgba(75,75,75,0.90)] rounded-md">
                                <div className="flex flex-row-reverse">
                                    <button className=" text-utk-white text-sm my-1 px-2" onClick={setSingleInvisible} >Advanced</button>
                                </div>
                                <SingleSearchBar
                                    placeholder={placeholder}
                                    endpoint={endpoint}
                                    onSearch={handleSearchResults}
                                    searchStart={searchStartVal}
                                />
                            </div>
                        }
                        {advancedSearchVisible &&
                            <div className="bg-[rgba(75,75,75,0.90)] rounded-md">
                                <div className="flex flex-row-reverse">
                                    <button className=" text-utk-white text-sm my-1 px-2" onClick={setAdvancedInvisible} >General</button>
                                </div>
                                <SongAdvancedSearch
                                    endpoint={endpoint}
                                    onSearch={handleSearchResults}
                                    searchStart={searchStartVal}
                                />
                            </div>
                        }
                    </div>
                </div>
                <div className="container mx-auto max-w-screen-lg" ref={searchRef}>
                    {
                        results.length > 0 ?
                            <>
                                <ResultHeader totalRecords={totalFound} searchStart={searchStartVal} />
                                <SongResults resultList={results} searchURL={searchURL} />
                                <Pager onSearch={handleSearchResults} searchURL={searchURL} searchStart={searchStartVal} refVal={searchRef} />
                            </>
                            :
                            <>
                                <div className="max-w-screen-md px-2 text-sm text-utk-smokey mt-4 mx-auto">
                                    This database provides access to about 50,000 songs in more than 1,500 published song anthologies owned by the George F. DeVine Music Library at the University of Tennessee, located in Knoxville. Use this citation index to determine which anthologies contain the song(s) you need. You will not find the music or the words here, just the call number and book title. If you are not in Knoxville, ask your librarian about interlibrary loan options to obtain the songs you need be.
                                </div>
                                <div className="text-sm text-utk-smokey px-2 max-w-screen-md mx-auto">
                                    <p className="font-semibold my-2">INSTRUCTIONS</p>
                                    <ol className="list-disc px-4 mt-2">
                                        <li>
                                            Start your search as simply as possible. For example, enter the last name of the composer and one key word from the song title. However, more than one keyword and any number of fields can be used.
                                        </li>
                                        <li className="pt-1">
                                            To narrow down search results by a specific piece of information, click advanced and fill out various fields to narrow down your search.
                                        </li>
                                        <li className="pt-1">
                                            DO NOT use initial articles such as: the/of/a/an  (use 'Sound of Music' rather than 'The Sound of Music').
                                        </li>
                                        <li className="pt-1">
                                            DO NOT use dashes or punctuation, besides apostrophes.
                                        </li>
                                        <li className="pt-1">
                                            Truncation is automatic ('Tchai' will yield 'Tchaikovsky').
                                        </li>
                                    </ol>
                                </div>
                            </>
                    }
                </div>
            </main>
        </>
    );
}

export default Song;
