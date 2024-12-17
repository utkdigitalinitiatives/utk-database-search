import { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router';
import { searchSolr } from '../utils/utils';
import Breadcrumbs from './Breadcrumbs';

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
                        {resultPageInfo.resultFields.map((field) => {
                            const fieldValue = result?.[field.name];
                            if (!fieldValue) return null; // Skip rendering if the field value is not available

                            return (
                                <div key={field.name} className="flex flex-col flex-wrap">
                                    <div className="flex flex-row flex-wrap text-wrap">
                                        <span className="font-semibold px-2">
                                            {field.name.charAt(0).toUpperCase() + field.name.slice(1)}:
                                        </span>
                                        {field.isLink ? (
                                            <Link
                                                to={field.linkTo || resultPageInfo.navigateBackTo}
                                                onClick={(e) => handleClick(e, fieldValue, field.linkTo || resultPageInfo.navigateBackTo)}
                                                className="text-wrap"
                                            >
                                                {fieldValue}
                                            </Link>
                                        ) : (
                                            <div className="text-wrap">{fieldValue}</div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

