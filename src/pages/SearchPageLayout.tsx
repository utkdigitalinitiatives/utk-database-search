import { useEffect, useRef, useState } from "react";
import SingleSearchBar from "../components/SingleSearchBar";
import ResultHeader from "../components/ResultHeader";
import Pager from "../components/Pager";
import { searchSolr } from "../utils/utils";

// Instructions - need to make these more repeatable
import SongInstructions from "../components/Instructions/SongInstructions";
import SermonInstructions from "../components/Instructions/SermonInstructions";
import TennesseeNewspaperInstructions from "../components/Instructions/TennesseeNewspaperInstructions";
import AnalysisInstructions from "../components/Instructions/AnalysisInstructions";
import SymphonyInstructions from "../components/Instructions/SymphonyInstructions";

// Advanced Search Bar Layout
import AdvancedSearch from "../components/AdvancedSearchBar/AdvancedSearchLayout";
import SearchResultsList from "../components/SearchResultsList";
import NoResult from "../components/NoResult";

import hodgesExterior from "../assets/images/hodges-exterior.webp";


export default function SearchPageLayout({ routeInfo }: any) {
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
            <div className="relative shadow-md py-2">
                <img
                    src={hodgesExterior}
                    alt="Hodges Library Exterior"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="eager"
                    fetchPriority="high"
                />
                <div className="absolute inset-0 bg-slate-600 opacity-50"></div>
                <div className="relative">
                    <h1 className='text-center flex justify-center items-center text-2xl md:text-4xl text-utk-white py-2 font-medium'>{routeInfo.siteTitle}</h1>
                    <div className='h-full grid justify-center my-auto py-3'>
                        {singleSearchVisible &&
                            <div className="bg-[rgba(75,75,75,0.90)] rounded-md">
                                <div className="flex flex-row-reverse">
                                    <button className="text-utk-white underline-white text-sm my-1 px-2" onClick={setSingleInvisible}>Advanced</button>
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
                                    <button className="text-utk-white underline-white text-sm my-1 px-2" onClick={setAdvancedInvisible} >General</button>
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
            </div>
            <div className="container mx-auto max-w-(--breakpoint-lg)" ref={searchRef}>
                {
                    // TODO: this needs a bit of re-working
                    results.length >= 1 ?
                        // Display results
                        <>
                            <ResultHeader totalRecords={totalFound} searchStart={searchStartVal} />
                            {routeInfo.routeName ?
                                <SearchResultsList resultList={results} resultType={routeInfo.fieldConfigName} />
                                :
                                <div className="text-red-600">An error occurred when loading the instructions information</div>
                            }
                            <Pager 
                            onSearch={handleSearchResults} 
                            searchURL={searchURL} 
                            searchStart={searchStartVal} 
                            refVal={searchRef} 
                            totalFound={totalFound}
                            />
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
