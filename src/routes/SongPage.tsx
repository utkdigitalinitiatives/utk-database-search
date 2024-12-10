import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { searchSolr } from "../utils/utils";
import Breadcrumbs from "../components/Breadcrumbs";


const SongPage = () => {

    let params = useParams();
    let id = null;
    const endpoint = `/unified_song_db_dev/select?`;
    const [result, setResults] = useState([])
    if (params) {
        id = parseInt(params.songId);
    }

    useEffect(() => {

        let url = `${endpoint}q=db_id:${id}`;
        const getData = async () => {
            try {
                const data = await searchSolr(url)
                setResults(data.response.docs[0]);
            } catch (error) {
                console.error('Error fetching existing data:', error);
            }

        };
        getData();
    }, [])

    console.log(result);

    return (
        <>
            <div className="bg-utk-smokey">
                <Breadcrumbs />
            </div>
            <div className="border-t flex justify-center">
                <div className="container rounded-md my-2 mx-2 max-w-screen-lg text-utk-smokey border border-utk-orange shadow-md">
                    <div className="bg-[rgba(75,75,75,0.90)] text-utk-white flex justify-center text-2xl font-semibold py-4 rounded-t-md drop-shadow-md">
                        {result?.title}
                    </div>
                    <div className="flex flex-row flex-wrap justify-evenly py-4 md:py-6 lg:py-8 shadow-inner text-utk-smokey">
                        <div className="flex flex-col flex-wrap">
                            <div className="flex flex-row flex-wrap">
                                <span className="font-semibold px-2">Composers:</span>
                                {result?.composers?.map(composer =>
                                    <div key={`${result.id}${composer}`} className="text-wrap">{composer}</div>
                                )}
                            </div>
                            <div className="flex flex-row flex-wrap pt-2">
                                <span className="font-semibold px-2">Authors:</span>
                                {result?.authors?.map(author =>
                                    <div key={`${result?.id}${author}`} className="text-wrap">{author}</div>
                                )}
                            </div>
                            <div className="flex flex-row flex-wrap pt-2">
                                <span className="font-semibold px-2">Call Number:</span>
                                <div className="text-wrap">{result?.call_number}</div>
                            </div>
                            <div className="flex flex-row flex-wrap pt-2">
                                <span className="font-semibold px-2">Geographic Region:</span>
                                {result?.geographic_areas?.map(geo =>
                                    <div key={`${result?.id}${geo}`} className="text-wrap">{geo}</div>
                                )}
                            </div>
                        </div>
                        <div className="flex flex-col px-2">
                            <div className="flex flex-wrap pt-2">
                                <span className="font-semibold px-2">Song Type:</span> {result?.song_types}
                            </div>
                            <div className="flex flex-row flex-wrap">
                                <span className="font-semibold px-2">Languages:</span>
                                {result?.languages?.map(language =>
                                    <div key={`${result?.id}${language}`} className="pe-1">{language}</div>
                                )}
                            </div>
                            <div className="flex flex-row flex-wrap pt-2">
                                <span className="font-semibold px-2">Accompaniment:</span>
                                {result?.accomp_values?.map(accomp =>
                                    <div key={`${result?.id}${accomp}`} className="text-wrap">{accomp}</div>
                                )}
                            </div>
                            <div className="flex flex-wrap pt-2">
                                <span className="font-semibold px-2">Anthology:</span> {result?.anthology_title}
                            </div>
                        </div>
                        <div className="flex flex-row flex-wrap pt-2">
                            <span className="font-semibold px-2">First Line:</span> {result?.first_line}
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default SongPage;
