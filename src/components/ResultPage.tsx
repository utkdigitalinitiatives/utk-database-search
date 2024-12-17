import { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router';
import { searchSolr } from '../utils/utils';

export default function ResultPage({ resultPageInfo }: any) {
    let navigate = useNavigate();
    const [result, setResults] = useState<any>(null);
    const params = useParams();
    const { symphonyId, songId, sermonId, newsId } = params;
    const id = symphonyId || songId || sermonId || newsId

    useEffect(() => {
        const url = `${resultPageInfo.endpoint}q=${resultPageInfo.queryField}:${id}`;
        console.log(url);


        const getData = async () => {
            try {
                const data = await searchSolr(url)
                setResults(data.response.docs[0]);
            } catch (error) {
                console.error('Error fetching existing data:', error);
            }

        };

        getData();
    }, []);

    const handleClick = (e: any, queryVal: any, to: string) => {
        e.preventDefault();
        queryVal = String(queryVal).replace(/[.,!?;:(){}[\]"'"\-<>@#$%^&*_+=|\\/~`]/g, '');
        sessionStorage.setItem('searchURL', `${resultPageInfo.endpoint}q=full_text:*${queryVal}*`);
        sessionStorage.setItem('startVal', "0");
        navigate(to);
    };

    console.log(resultPageInfo)

    return (
        <div className="bg-utk-smokey">
            <div className="border-t flex justify-center">
                <div className="container rounded-md my-2 mx-2 max-w-screen-lg text-utk-smokey border border-utk-orange shadow-md">
                    <div className="bg-[rgba(75,75,75,0.90)] text-utk-white flex justify-center text-2xl font-semibold py-4 rounded-t-md drop-shadow-md">
                        {result?.title}
                    </div>
                    <div className="flex flex-row flex-wrap justify-evenly py-4 md:py-6 lg:py-8 shadow-inner text-utk-smokey utk-link">
                        {resultPageInfo.resultFields.map(field => (
                            result?.[field] ? (
                                <div key={field} className="flex flex-col flex-wrap">
                                    <div className="flex flex-row flex-wrap text-wrap">
                                        <span className="font-semibold px-2">{field.charAt(0).toUpperCase() + field.slice(1)}:</span>
                                        {Array.isArray(result[field]) ? (
                                            result[field].map((item: string, index: number) => (
                                                <Link key={`${result.id}${item}${index}`} to={resultPageInfo.navigateBackTo} onClick={(e) => handleClick(e, item, resultPageInfo.navigateBackTo)} className="text-wrap">
                                                    {item}
                                                </Link>
                                            ))
                                        ) : (
                                            <div className="text-wrap">{result[field]}</div>
                                        )}
                                    </div>
                                </div>
                            ) : null
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

