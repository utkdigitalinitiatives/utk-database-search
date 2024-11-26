import musicImg from "../assets/images/musiceresources.jpg"
import trimString from "../utils/utils"
import Card from "../components/Card"




export default function Index() {

    type dbItem = {
        dbName: string,
        endpoint: string,
        dbSummary: string,
        image: string,
    }

    const dbInfo: Array<dbItem> = [
        {
            dbName: "Song Database",
            endpoint: "/song",
            dbSummary: "Containing the Song Index and Song Analysis Index from the George F. Devine Music Library. Includes the words and music for over 50,000 songs in 15,000 collections of songs in the Music Library.",
            image: musicImg
        },
        {
            dbName: "Song Database",
            endpoint: "/song",
            dbSummary: "Containing the Song Index and Song Analysis Index from the George F. Devine Music Library. Includes the words and music for over 50,000 songs in 15,000 collections of songs in the Music Library.",
            image: musicImg
        },

    ]
    return (
        <main className=''>
            <div className="bg-[url('/src/assets/images/UT-bridge-campus.png')] bg-cover bg-center bg-slate-700 bg-blend-soft-light">
                <h1 className='text-center flex justify-center items-center text-2xl md:text-4xl text-utk-white h-44'>Search Our Databases</h1>
            </div>
            <div className='container mx-auto py-2'>
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
