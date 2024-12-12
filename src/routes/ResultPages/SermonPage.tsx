import { useParams, Link, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { searchSolr } from "../../utils/utils";
import Breadcrumbs from "../../components/Breadcrumbs";


const SermonPage = () => {
    let navigate = useNavigate();
    let params = useParams();
    let id = null;

    const navigateBack = '/sermon';
    const endpoint = `/sermon_db_new_dev/select?`;
    const [result, setResults] = useState([])
    if (params) {
        id = params.sermonId;
    }

    useEffect(() => {

        let url = `${endpoint}q=id:${id}`;
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

    const handleClick = (e: any, queryVal: any, to: string) => {
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
                        {result?.sermon_title}
                    </div>
                    <div className="flex flex-row flex-wrap justify-evenly py-4 md:py-6 lg:py-8 shadow-inner text-utk-smokey utk-link">
                        <div className="flex flex-col flex-wrap">
                            <div className="flex flex-row flex-wrap text-wrap">
                                <span className="font-semibold px-2">Short Title:</span>
                                <Link to={navigateBack} key={`${result.id}${result?.short_title}`} className="text-wrap">{result?.short_title}</Link>

                            </div>
                            <div className="flex flex-row flex-wrap text-wrap">
                                <span className="font-semibold px-2">Denomination:</span>
                                <Link to={navigateBack} key={`${result.id}${result?.denomination}`} className="text-wrap">{result?.denomination}</Link>

                            </div>
                            <div className="flex flex-row flex-wrap pt-2 text-wrap">
                                <span className="font-semibold px-2">Author:</span>
                                <Link to={navigateBack} key={`${result?.id}${result.author}`} className="text-wrap" onClick={(e) => handleClick(e, result.author, navigateBack)}>{result.author}</Link>
                            </div>
                            <div className="flex flex-row flex-wrap pt-2 text-wrap">
                                <span className="font-semibold px-2">State:</span>
                                <div className="text-wrap">{result?.state}</div>
                            </div>
                            <div className="flex flex-row flex-wrap pt-2 text-wrap">
                                <span className="font-semibold px-2">Dates:</span>
                                <div key={`${result?.id}${result?.dates}`} className="text-wrap">
                                    {result?.dates}
                                </div>
                            </div>
                            <div className="flex flex-row flex-wrap pt-2 text-wrap">
                                <span className="font-semibold px-2">Pulication Location:</span>
                                <div key={`${result?.id}${result?.publication_place}`} className="text-wrap">
                                    {result?.publication_place}
                                </div>
                            </div>
                            <div className="flex flex-row flex-wrap pt-2 text-wrap">
                                <span className="font-semibold px-2">Print Face:</span>
                                <div key={`${result?.id}${result?.print_face}`} className="text-wrap">
                                    {result?.print_face}
                                </div>
                            </div>
                            <div className="flex flex-row flex-wrap pt-2 text-wrap">
                                <span className="font-semibold px-2">Place Date:</span>
                                <div key={`${result?.id}${result?.place_date}`} className="text-wrap">
                                    {result?.place_date}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col px-2">
                            <div className="flex flex-row flex-wrap pt-2 text-wrap">
                                <span className="font-semibold px-2">Number of Pages:</span>
                                <div key={`${result?.id}${result?.number_of_pages}`} className="text-wrap">
                                    {result?.number_of_pages}
                                </div>
                            </div>
                            <div className="flex flex-row flex-wrap pt-2 text-wrap">
                                <span className="font-semibold px-2">Total Pages:</span>
                                <div key={`${result?.id}${result?.total_pages}`} className="text-wrap">
                                    {result?.total_pages}
                                </div>
                            </div>
                            <div className="flex flex-row flex-wrap pt-2 text-wrap">
                                <span className="font-semibold px-2">Sermon Page Number:</span>
                                <div key={`${result?.id}${result?.sermon_page_no}`} className="text-wrap">
                                    {result?.sermon_page_no}
                                </div>
                            </div>
                            <div className="flex flex-wrap text-wrap">
                                <span className="font-semibold px-2">Library Location:</span>
                                <Link to={navigateBack} onClick={(e) => handleClick(e, result?.library_location, navigateBack)}>
                                    {result?.library_location}
                                </Link>
                            </div>
                            <div className="flex flex-wrap text-wrap">
                                <span className="font-semibold px-2">Library Location Code:</span>
                                <Link to={navigateBack} onClick={(e) => handleClick(e, result?.library_location_code, navigateBack)}>
                                    {result?.library_location_code}
                                </Link>
                            </div>
                            <div className="flex flex-row flex-wrap pt-2 text-wrap">
                                <span className="font-semibold px-2">Index Date:</span>
                                <Link to={navigateBack} onClick={(e) => handleClick(e, result?.index_date, navigateBack)}>
                                    {result?.index_date}
                                </Link>
                            </div>
                            <div className="flex flex-row flex-wrap pt-2 text-wrap">
                                <span className="font-semibold px-2">Index Bible Ref:</span>
                                <Link to={navigateBack} onClick={(e) => handleClick(e, result?.index_bibref, navigateBack)}>
                                    {result?.index_bibref}
                                </Link>
                            </div>
                            <div className="flex flex-wrap pt-2 text-wrap">
                                <span className="font-semibold px-2">Keywords:</span>
                                <div>
                                    {result?.keywords}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap pt-2 text-wrap">
                        <span className="font-semibold px-2">Comments:</span>
                        <div className="px-2 mx-auto">
                            {result?.comment}
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default SermonPage;