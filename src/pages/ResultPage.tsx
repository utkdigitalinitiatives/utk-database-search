import { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router';
import { searchSolr } from '../utils/utils';
import TitleStringCleaner from '../helper/fieldTitleCleanup';

export default function ResultPage({ resultPageInfo }: any) {
    const navigate = useNavigate();
    const [result, setResults] = useState<any>(null);
    const params = useParams();
    const { symphonyId, songId, sermonId, newsId } = params;
    const id = symphonyId || songId || sermonId || newsId

    useEffect(() => {
        const url = `${resultPageInfo.endpoint}q=${resultPageInfo.idField}:${id}`;

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
            <div className="flex justify-center shadow-inner">
                <div className="container rounded-md my-3 mx-2 max-w-(--breakpoint-lg) text-utk-smokey border border-utk-orange shadow-md">
                    <div className="bg-[rgba(75,75,75,0.90)] text-utk-white flex justify-center text-2xl font-semibold py-4 px-2 rounded-t-md">
                        {result?.[resultPageInfo.titleField] ? result[resultPageInfo.titleField] : 'Title Not Available'}
                    </div>
                    <div className="text-utk-smokey utk-link shadow-inner">
                        {resultPageInfo.resultFields.map((field: any) => (
                            result?.[field.name] ? (
                                <div key={`field-${field.name}`} className="flex flex-row flex-wrap text-wrap py-3 odd:bg-utk-light-gray even:bg-utk-white rounded-b">
                                    <span className="font-semibold px-2">
                                        {TitleStringCleaner(field.name)}:
                                    </span>

                                    {Array.isArray(result[field.name]) ? (
                                        result[field.name].map((name: string, index: number) => (
                                            field.isLink ? (
                                                // If the field is a link, render as a Link component
                                                <Link
                                                    key={`link-${field.name}-${name}-${index}`} // Ensure uniqueness here
                                                    to={field.linkTo || resultPageInfo.navigateBackTo}
                                                    onClick={(e) => handleClick(e, name, field.linkTo || resultPageInfo.navigateBackTo)}
                                                    className="text-wrap px-2"
                                                >
                                                    {name}
                                                </Link>
                                            ) : (
                                                // If not a link, render as plain text
                                                <div key={`text-${field.name}-${name}-${index}`} className="text-wrap px-2">
                                                    {name}
                                                </div>
                                            )
                                        ))
                                    ) : (
                                        // If the field is not an array, check if it should be a link
                                        field.isLink ? (
                                            field.name === "anthology_title" ?
                                                <Link
                                                    key={`link-${field.name}`}
                                                    to={`anthology/${result[field.name]}`}
                                                    className='text-wrap px-2'
                                                >
                                                    {result[field.name]}
                                                </Link>
                                                : field.name === "large_work" ?

                                                    <Link
                                                        key={`link-${field.name}`}
                                                        to={`large-work/${result[field.name]}`}
                                                        className='text-wrap px-2'
                                                    >
                                                        {result[field.name]}
                                                    </Link>
                                                    :
                                                    <Link
                                                        key={`link-${field.name}`}
                                                        to={field.linkTo || resultPageInfo.navigateBackTo}
                                                        onClick={(e) => handleClick(e, result[field.name], field.linkTo || resultPageInfo.navigateBackTo)}
                                                        className='text-wrap px-2'
                                                    >
                                                        {result[field.name]}
                                                    </Link>

                                        ) : (
                                            <div key={`text-${field.name}`} className="text-wrap px-2">{result[field.name]}</div>
                                        )
                                    )}
                                </div>
                            ) : null
                        ))}
                    </div>
                </div>
            </div >
        </>
    );
};

