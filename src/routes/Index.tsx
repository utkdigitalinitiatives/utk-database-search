import musicImg from "../assets/images/musiceresources.png"
import symphonyImg from '../assets/images/samuel-sianipar-unsplash-symphony.png';
import newsImg from '../assets/images/bank-phrom-unsplash-news.png';
import sermonImg from '../assets/images/emmanuel-phaeton-unsplash-sermon.png';
import trimString from "../utils/utils"
import Card from "../components/Card"
import { useEffect } from "react";




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
            dbName: "Sermon Database",
            endpoint: "/sermon",
            //TODO: Need better copy for the dbsummary on this page
            dbSummary: "A collection of sermons from various denominations throughout East Tennessee",
            image: sermonImg,
        },
        {
            dbName: "Tennessee News Database",
            endpoint: "/tennessee-news",
            //TODO: Need better copy for the dbsummary on this page
            dbSummary: "Information regarding Tennessee Newspapers that have been printed",
            image: newsImg,
        },

        {
            dbName: "Knoxville Symphony Orchestra Program Notes",
            endpoint: "/symphony",
            //TODO: Need better copy for the dbsummary on this page
            dbSummary: "Program notes for the Knoxville Symphony Orchestra",
            image: symphonyImg,
        },
    ]


    // clear any previous search data if the user navigates back to the central page
    useEffect(() => {

        sessionStorage.setItem('searchURL', '');
        sessionStorage.setItem('startVal', "0");
    }, [])

    return (
        <main className=''>
            <div className="bg-[url('/src/assets/images/hodges-exterior.png')] bg-cover bg-center bg-slate-600 bg-blend-soft-light shadow-md">
                <h1 className='font-medium text-center flex justify-center items-center text-2xl md:text-4xl text-utk-white h-44'>Select a Database to Search</h1>
            </div>
            <div className='container mx-auto py-2 mt-2 max-w-screen-xl'>
                <div className="text-utk-smokey text-lg max-w-screen-md mx-auto mb-3 mt-2 px-2">
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
