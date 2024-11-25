import SearchBar from "../components/SearchBar";
import { useState } from "react";

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
        // Build out a result componeont
        <>
            <div>
                Composers: {result.composers}
            </div>
            <div>
                call number: {result.call_number}
            </div>
        </>
    )
        

    return (
        <>
            <main className=''>
                <div className='h-36 bg-utk-blue--accent grid grid-rows-2 justify-center my-auto py-2'>
                    <h1 className='text-center flex justify-center items-center text-2xl md:text-4xl text-utk-white py-2'>Song Database</h1>
                    <div className="py-2 ">

                        <SearchBar
                            placeholder={placeholder}
                            endpoint={endpoint}
                            onSearch={handleSearchResults}
                        />
                        {/* <form method="post" id="search-form" className="w-full mx-auto" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Search the song database"
                                name="search"
                                className="form-control shadow-inner border-s-2 border-y-2 focus:border-utk-orange focus:outline-none p-1 rounded-l-md md:w-96 "
                                onChange={handleChange}
                            />
                            <button type="submit" className=" bg-[#dbdcde] border-e-2 border-y-2 rounded-r-md text-utk-smokey hover:bg-utk-orange hover:text-utk-white hover:border-utk-orange text-center p-1 w-24">Search</button>
                        </form> */}

                    </div>

                </div>
                <div>
                    <div>
                        {resultList.length > 0 ? <div>Number of records found: {totalFound} </div> : <div></div> }
                        {resultList.length > 0 ? resultList : <div>No results to display</div>}
                    </div>
                </div>
            </main>
        </>
    );
}

export default Song;
