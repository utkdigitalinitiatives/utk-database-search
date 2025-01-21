import { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router';
import { searchSolr } from '../utils/utils';
import TitleStringCleaner from '../helper/fieldTitleCleanup';

interface Field {
    name: string;
    isLink: boolean;
    linkTo?: string;
}

interface ResultPageInfo {
    endpoint: string;
    idField: string;
    titleField: string;
    resultFields: Field[];
    navigateBackTo: string;
}

interface Result {
    [key: string]: string | string[];  // Fields can either be a string or an array of strings
}

interface ResultPageProps {
    resultPageInfo: ResultPageInfo;
}

export default function ResultPage({ resultPageInfo }: ResultPageProps) {
    const navigate = useNavigate();
    const [result, setResults] = useState<Result | null>(null);  // result is either an object or null initially
    const params = useParams();
    const { symphonyId, songId, sermonId, newsId } = params;
    const id = symphonyId || songId || sermonId || newsId;

    useEffect(() => {
        const url = `${resultPageInfo.endpoint}q=${resultPageInfo.idField}:${id}`;

        const getData = async () => {
            try {
                const data = await searchSolr(url);
                setResults(data.response.docs[0]);
            } catch (error) {
                console.error('Error fetching existing data:', error);
            }
        };

        getData();
    }, [id, resultPageInfo.endpoint, resultPageInfo.idField]);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, queryVal: string | string[], to: string) => {
        e.preventDefault();
        const sanitizedQuery = String(queryVal).replace(/[.,!?;:(){}[\]"'"\-<>@#$%^&*_+=|\\/~`]/g, '');
        sessionStorage.setItem('searchURL', `${resultPageInfo.endpoint}q=full_text:*${sanitizedQuery}*`);
        sessionStorage.setItem('startVal', "0");
        navigate(to);
    };

    return (
        <>
            <div className="flex justify-center shadow-inner">
                <div className="container rounded-md my-3 mx-2 max-w-screen-lg text-utk-smokey border border-utk-orange shadow-md">
                    <div className="bg-[rgba(75,75,75,0.90)] text-utk-white flex justify-center text-2xl font-semibold py-4 px-2 rounded-t-md">
                        {result?.[resultPageInfo.titleField] ? result[resultPageInfo.titleField] : 'Title Not Available'}
                    </div>
                    <div className="text-utk-smokey utk-link shadow-inner">
                        {resultPageInfo.resultFields.map((field) => (
                            result?.[field.name] ? (
                                <div key={`field-${field.name}`} className="flex flex-row flex-wrap text-wrap py-3 odd:bg-utk-light-gray even:bg-utk-white rounded-b">
                                    <span className="font-semibold px-2">
                                        {TitleStringCleaner(field.name)}:
                                    </span>

                                    {Array.isArray(result[field.name]) ? (
                                        result[field.name].map((name, index) => (
                                            field.isLink ? (
                                                <Link
                                                    key={`link-${field.name}-${name}-${index}`}
                                                    to={field.linkTo || resultPageInfo.navigateBackTo}
                                                    onClick={(e) => handleClick(e, name, field.linkTo || resultPageInfo.navigateBackTo)}
                                                    className="text-wrap px-2"
                                                >
                                                    {name}
                                                </Link>
                                            ) : (
                                                <div key={`text-${field.name}-${name}-${index}`} className="text-wrap px-2">
                                                    {name}
                                                </div>
                                            )
                                        ))
                                    ) : (
                                        field.isLink ? (
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
            </div>
        </>
    );
}
