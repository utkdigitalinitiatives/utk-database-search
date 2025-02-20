import { useEffect, useRef, useState } from "react";
import SingleSearchBar from "./SingleSearchBar";
import ResultHeader from "./ResultHeader";
import Pager from "./Pager";
import { searchSolr } from "../utils/utils";

// Instructions - need to make these more repeatable
import SongInstructions from "./Instructions/SongInstructions";
import SermonInstructions from "./Instructions/SermonInstructions";
import TennesseeNewspaperInstructions from "./Instructions/TennesseeNewspaperInstructions";
import AnalysisInstructions from "./Instructions/AnalysisInstructions";
import SymphonyInstructions from "./Instructions/SymphonyInstructions";

// Advanced Search Bar Layout
import AdvancedSearch from "./AdvancedSearchBar/AdvancedSearchLayout";
import SearchResultsList from "./SearchResultsList";
import NoResult from "./NoResult";


export default function PageLayout({ routeInfo }: any) {
    const searchRef = useRef<HTMLDivElement | null>(null);
    const [results, setResults] = useState([]);
    const [totalFound, setTotalFound] = useState(0);
    const [searchURL, setSearchURL] = useState('');
    const [searchStartVal, setSearchStartVal] = useState(0);
    const [noResults, setNoResults] = useState(false);

    const endpoint = routeInfo.endpoint;
    const placeholder = routeInfo.placeholder;

    // Toggle between bars
    const [singleSearchVisible, setSingleSearchVisible] = useState(true);
    const [advancedSearchVisible, setAdvancedSearchVisible] = useState(false);

    const handleSearchResults = (response: any, searchURL: string, startVal: number, noResults: boolean) => {
        setResults(response.docs);
        setTotalFound(response.numFound);
        setSearchURL(searchURL);
        setSearchStartVal(startVal);
        setNoResults(noResults);
        console.log(noResults);
        sessionStorage.setItem('routeName', `${routeInfo.routeName}`)
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

    useEffect(() => {
        const getData = async () => {

            const routeName = sessionStorage.getItem('routeName');
            if (routeName !== routeInfo.routeName) {
                return;
            }
            const previousSearchURL = sessionStorage.getItem('searchURL');
            const start = sessionStorage.getItem('startVal');

            if (previousSearchURL !== null) {
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


    return (
        <main>
            <div className="bg-[url('/src/assets/images/hodges-exterior.webp')] bg-cover bg-center bg-slate-600 bg-blend-soft-light shadow-md py-2">
                <h1 className='text-center flex justify-center items-center text-2xl md:text-4xl text-utk-white py-2 font-medium'>{routeInfo.siteTitle}</h1>
                <div className='h-full grid justify-center my-auto py-3'>
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
                            {routeInfo.routeName ? (
                                <AdvancedSearch
                                    inputVals={routeInfo.inputVals}
                                    endpoint={endpoint}
                                    onSearch={handleSearchResults}
                                />
                            ) :
                                <div className="text-red-600">An error occurred when loading the advanced form</div>
                            }
                        </div>
                    }
                </div>
            </div>
            <div className="container mx-auto max-w-screen-lg" ref={searchRef}>
                {
                    results.length >= 1 ?
                        // Display results
                        <>
                            <ResultHeader totalRecords={totalFound} searchStart={searchStartVal} />
                            {routeInfo.routeName ?
                                <SearchResultsList resultList={results} resultType={routeInfo.fieldConfigName} />
                                :
                                <div className="text-red-600">An error occurred when loading the instructions information</div>
                            }
                            <Pager onSearch={handleSearchResults} searchURL={searchURL} searchStart={searchStartVal} refVal={searchRef} />
                        </>
                        :
                        noResults === true ?
                            // Display when no results are found
                                <NoResult />
                            :
                            // display instructions
                            <>
                                {routeInfo.routeName === 'song' ? (
                                    <SongInstructions />
                                ) : routeInfo.routeName === 'sermon' ? (
                                    <SermonInstructions />
                                ) : routeInfo.routeName === 'tennessee-news' ? (
                                    <TennesseeNewspaperInstructions />
                                ) : routeInfo.routeName === 'symphony' ? (
                                    <SymphonyInstructions />
                                ) : routeInfo.routeName === 'song-analysis' ? (
                                    <AnalysisInstructions />
                                ) :
                                    <div className="text-red-600">An error occurred when loading the instructions information</div>
                                }
                            </>
                }
            </div>
        </main>
    )
}
