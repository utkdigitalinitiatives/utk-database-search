import { useParams, Link, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { searchSolr } from "../utils/utils";
import Breadcrumbs from "../components/Breadcrumbs";


const SongPage = () => {
    let navigate = useNavigate();
    let params = useParams();
    let id = null;
    const navigateBackToSong = '/song';

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
    const handleClick = (e:any, queryVal:any, to:string) => {
        e.preventDefault();
        queryVal = String(queryVal);
        queryVal = queryVal.replace(/[.,!?;:(){}[\]"'"\-<>@#$%^&*_+=|\\/~`]/g, '');
        sessionStorage.setItem('searchURL', `${endpoint}q=full_text:*${queryVal}*`);
        sessionStorage.setItem('startVal', "0");

        navigate(to);
    };

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
                    <div className="flex flex-row flex-wrap justify-evenly py-4 md:py-6 lg:py-8 shadow-inner text-utk-smokey utk-link">
                        <div className="flex flex-col flex-wrap">
                            <div className="flex flex-row flex-wrap text-wrap">
                                <span className="font-semibold px-2">Composers:</span>
                                {result?.composers?.map(composer =>
                                    <Link to={navigateBackToSong} key={`${result.id}${composer}`} className="text-wrap" onClick={(e) => handleClick(e, composer, navigateBackToSong)}>{composer}</Link>
                                )}
                            </div>
                            <div className="flex flex-row flex-wrap pt-2 text-wrap">
                                <span className="font-semibold px-2">Authors:</span>
                                {result?.authors?.map(author =>
                                    <Link to={navigateBackToSong} key={`${result?.id}${author}`} className="text-wrap" onClick={(e) => handleClick(e, author, navigateBackToSong)}>{author}</Link>
                                )}
                            </div>
                            <div className="flex flex-row flex-wrap pt-2 text-wrap">
                                <span className="font-semibold px-2">Call Number:</span>
                                <div className="text-wrap">{result?.call_number}</div>
                            </div>
                            <div className="flex flex-row flex-wrap pt-2 text-wrap">
                                <span className="font-semibold px-2">Geographic Region:</span>
                                {result?.geographic_areas?.map(geo =>
                                    <Link to={navigateBackToSong} key={`${result?.id}${geo}`} className="text-wrap" onClick={(e) => handleClick(e, geo, navigateBackToSong)}>{geo}</Link>
                                )}
                            </div>
                        </div>
                        <div className="flex flex-col px-2">
                            <div className="flex flex-wrap text-wrap">
                                <span className="font-semibold px-2">Song Type:</span> 
                                <Link to={navigateBackToSong} onClick={(e) => handleClick(e, result?.song_types, navigateBackToSong)}>
                                {result?.song_types}
                                </Link>
                            </div>
                            <div className="flex flex-row flex-wrap pt-2 text-wrap">
                                <span className="font-semibold px-2">Languages:</span>
                                {result?.languages?.map(language =>
                                    <Link key={`${result?.id}${language}`} className="pe-1" to={navigateBackToSong} onClick={(e) => handleClick(e, language, navigateBackToSong)}>{language}</Link>
                                )}
                            </div>
                            <div className="flex flex-row flex-wrap pt-2 text-wrap">
                                <span className="font-semibold px-2">Accompaniment:</span>
                                {result?.accomp_values?.map(accomp =>
                                    <div key={`${result?.id}${accomp}`} className="text-wrap">{accomp}</div>
                                )}
                            </div>
                            <div className="flex flex-wrap pt-2 text-wrap">
                                <span className="font-semibold px-2">Anthology:</span>
                                <Link to={navigateBackToSong}  onClick={(e) => handleClick(e, result?.anthology_title, navigateBackToSong)}>
                                {result?.anthology_title}
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-row flex-wrap pt-2 text-wrap">
                            <span className="font-semibold px-2">First Line:</span> {result?.first_line}
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default SongPage;
