import SearchBar from "../components/SearchBar";
import ResultHeader from "../components/ResultHeader";
import { useState } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import SongResults from "../components/SongResults";

const Song = () => {
    const [results, setResults] = useState([]);
    const [totalFound, setTotalFound] = useState(0);
    const endpoint = `/unified_song_db_dev/select?`;
    const placeholder = "Search the song database...";



    const handleSearchResults = (response: any) => {
        setResults(response.docs);
        setTotalFound(response.numFound);
    }

    return (
        <>
            <main className=''>
                <div className="bg-utk-smokey">
                    <Breadcrumbs />
                </div>
                <div className="bg-[url('/src/assets/images/UT-bridge-campus.png')] bg-cover bg-center bg-slate-600 bg-blend-soft-light shadow-md">
                    <div className='h-36 grid grid-rows-2 justify-center my-auto py-2'>
                        <h1 className='text-center flex justify-center items-center text-2xl md:text-4xl text-utk-white py-2 font-medium'>Song Database</h1>
                        <div className="py-2 ">
                            <SearchBar
                                placeholder={placeholder}
                                endpoint={endpoint}
                                onSearch={handleSearchResults}
                            />
                        </div>
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
