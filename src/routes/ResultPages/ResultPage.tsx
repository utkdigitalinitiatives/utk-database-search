import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router';
import { searchSolr } from "../../utils/utils";

interface ResultPageProps {
    endpoint: string;
    queryField: string;
    resultFields: string[];
    navigateBackTo: string;
}

const ResultPage: React.FC<ResultPageProps> = ({ endpoint, queryField, resultFields, navigateBackTo }) => {
    let navigate = useNavigate();
    const [result, setResults] = useState<any>(null);
    const params = useParams();
    const { symphonyId, songId, sermonId, newsId } = params;
    const id = symphonyId || songId || sermonId || newsId

    useEffect(() => {
        const url = `${endpoint}q=${queryField}:${id}`;
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
    }, [endpoint, queryField]);

    const handleClick = (e: any, queryVal: any, to: string) => {
        e.preventDefault();
        queryVal = String(queryVal).replace(/[.,!?;:(){}[\]"'"\-<>@#$%^&*_+=|\\/~`]/g, '');
        sessionStorage.setItem('searchURL', `${endpoint}q=full_text:*${queryVal}*`);
        sessionStorage.setItem('startVal', "0");
        navigate(to);
    };

    return (
        <div className="bg-utk-smokey">
            <div className="border-t flex justify-center">
                <div className="container rounded-md my-2 mx-2 max-w-screen-lg text-utk-smokey border border-utk-orange shadow-md">
                    <div className="bg-[rgba(75,75,75,0.90)] text-utk-white flex justify-center text-2xl font-semibold py-4 rounded-t-md drop-shadow-md">
                        {result?.title}
                    </div>
                    <div className="flex flex-row flex-wrap justify-evenly py-4 md:py-6 lg:py-8 shadow-inner text-utk-smokey utk-link">
                        {resultFields.map(field => (
                            result?.[field] ? (
                                <div key={field} className="flex flex-col flex-wrap">
                                    <div className="flex flex-row flex-wrap text-wrap">
                                        <span className="font-semibold px-2">{field.charAt(0).toUpperCase() + field.slice(1)}:</span>
                                        {Array.isArray(result[field]) ? (
                                            result[field].map((item: string, index: number) => (
                                                <Link key={`${result.id}${item}${index}`} to={navigateBackTo} onClick={(e) => handleClick(e, item, navigateBackTo)} className="text-wrap">
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

export default ResultPage;
