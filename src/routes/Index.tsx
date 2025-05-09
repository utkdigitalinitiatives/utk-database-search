import musicImg from "../assets/images/musiceresources-thumbnail.webp"
import symphonyImg from '../assets/images/symphony.webp';
import analysisImg from '../assets/images/analysis-thumbnail.webp';
import sermonImg from '../assets/images/sermon-thumbnail.webp';
import trimString from "../utils/utils"
import Card from "../components/Card"
import { useEffect } from "react";
import hodgesExterior from "../assets/images/hodges-exterior.webp";
import hodgesExteriorSmall from "../assets/images/hodges-exterior-small.webp";
import hodgesExteriorMedium from "../assets/images/hodges-exterior-medium.webp";




export default function Index() {

    type dbItem = {
        dbName: string,
        endpoint: string,
        dbSummary: string,
        image: string,
    }

    const dbInfo: Array<dbItem> = [
        {
            dbName: "Song Index",
            endpoint: "/song",
            dbSummary: "Containing the Song Index and Song Analysis Index from the George F. Devine Music Library. Includes the words and music for over 50,000 songs in 15,000 collections of songs in the Music Library.",
            image: musicImg
        },
        {
            dbName: "Analysis Index",
            endpoint: '/song-analysis',
            dbSummary: 'The Analysis Index provides access to program notes and descriptions or analyses of musical compositions in books owned by the UT Music Library.',
            image: analysisImg
        },
        {
            dbName: "Knoxville Symphony Orchestra Program Notes",
            endpoint: "/symphony",
            //TODO: Need better copy for the dbsummary on this page
            dbSummary: "Program notes for the Knoxville Symphony Orchestra",
            image: symphonyImg,
        },
        {
            dbName: "Sermon Database",
            endpoint: "/sermon",
            //TODO: Need better copy for the dbsummary on this page
            dbSummary: "A collection of sermons from various denominations throughout East Tennessee",
            image: sermonImg,
        },
    ]


    // clear any previous search data if the user navigates back to the central page
    useEffect(() => {
        sessionStorage.setItem('routeName', '');
        sessionStorage.setItem('searchURL', '');
        sessionStorage.setItem('startVal', "0");
    }, [])

    return (
        <main className='pb-2'>
            <div className="relative shadow-md">
                <img
                    src={hodgesExterior}
                    srcSet={`${hodgesExteriorSmall} 480w, ${hodgesExteriorMedium} 768w, ${hodgesExterior} 1920w`}
                    sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, 1920px"
                    alt="Hodges Library Exterior"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="eager"
                    fetchPriority="high"
                    width="1920"
                    height="600"
                />
                <div className="absolute inset-0 bg-slate-600 opacity-50"></div>
                <div className="relative">
                    <h1 className='font-medium text-center flex justify-center items-center text-2xl md:text-4xl text-utk-white h-44'>Select a Database to Search</h1>
                </div>
            </div>
            <div className='container mx-auto py-2 mt-2 max-w-(--breakpoint-xl)'>
                <div className="text-utk-smokey text-lg max-w-(--breakpoint-md) mx-auto mb-3 mt-2 px-2">
                    Welcome to the University of Tennessee combined database index search tool.   Select from one of the cards below to begin search for index information about the various topics collected here.
                </div>
                <div className='grid grid-col-1 sm:grid-cols-2 gap-5 px-1'>
                    {dbInfo.map((item, index) =>
                        <Card
                            key={index}
                            dbName={item.dbName}
                            endpoint={item.endpoint}
                            summary={trimString(item.dbSummary)}
                            imgSrc={item.image}
                        />
                    )}
                </div>
            </div>
        </main>
    )
}
