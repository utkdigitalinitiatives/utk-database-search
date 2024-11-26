import SearchBar from "../components/SearchBar";
import ResultTop from "../components/ResultTop";
import { useState } from "react";
import Breadcrumbs from "../components/Breadcrumbs";

const Song = () => {
    const [results, setResults] = useState([]);
    const [totalFound, setTotalFound] = useState(0);
    const endpoint = `/unified_song_db_dev/select?`;
    const placeholder = "Search the song database...";



    const handleSearchResults = (response: any) => {
        console.log(response);
        setResults(response.docs);
        setTotalFound(response.numFound);
    }

    console.log(results);
    console.log(totalFound);


    const resultList = results.map(result =>
        // Build out a result component
        <>
            <div>
                Composers: {result.composers}
            </div>
            <div>
                call number: {result.call_number}
            </div>
        </>
    )

    console.log(`total found: ${totalFound}`)

    return (
        <>
            <main className=''>
                <div className="bg-utk-smokey">
                    <Breadcrumbs />
                </div>
                <div className="bg-[url('/src/assets/images/UT-bridge-campus.png')] bg-cover bg-center bg-slate-700 bg-blend-soft-light shadow-md">
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
                <div className="container mx-auto">
                    {
                        totalFound > 0 ?

                            <ResultTop totalRecords={totalFound} />

                            :
                            <div className="hidden"></div>
                    }
                    {
                        resultList.length > 0 ?
                            resultList
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
