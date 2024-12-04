import SingleSearchBar from "../components/SingleSearchBar";
import SongAdvancedSearch from '../components/SongAdvancedSearch';
import ResultHeader from "../components/ResultHeader";
import { useState } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import SongResults from "../components/SongResults";

const Song = () => {
    const [results, setResults] = useState([]);
    const [totalFound, setTotalFound] = useState(0);
    const endpoint = `/unified_song_db_dev/select?`;
    const placeholder = "Search the song database...";
    const [singleSearchVisible, setSingleSearchVisible] = useState(true);
    const [advancedSearchVisible, setAdvancedSearchVisible] = useState(false);


    const handleSearchResults = (response: any) => {
        setResults(response.docs);
        setTotalFound(response.numFound);
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
                                />

                            </div>
                        }
                    </div>
                </div>
                <div className="container mx-auto max-w-screen-lg">
                    {
                        totalFound > 0 ?
                            <ResultHeader totalRecords={totalFound} />
                            :
                            <div className="hidden"></div>
                    }
                    {
                        results.length > 0 ?
                            <SongResults resultList={results} />
                            :
                            <div className="flex justify-center items-center min-h-96">
                                Enter a term to search for above to begin
                            </div>
                    }
                </div>
            </main>
        </>
    );
}

export default Song;
