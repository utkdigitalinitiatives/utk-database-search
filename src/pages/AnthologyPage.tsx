import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { searchSolr } from '../utils/utils';
import SubPageResults from "./SubPageResults";


export default function AnthologyPage({ routeInfo }: any) {
    const params = useParams();
    const [results, setResults] = useState<any>(null);
    const [resultTitle, setResultTitle] = useState<any>(null);
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        const url = `${routeInfo.endpoint}q=anthology_title:"${params.title}"`;


        const getRecordCount = async () => {
            try {
                const data = await searchSolr(url + "&rows=0");
                setCount(data.response.numFound);
            } catch (error) {
                console.error('Error fetching record count:', error);
            }
        };

        getRecordCount();
    }, [params.title]);


    useEffect(() => {
        const url = `${routeInfo.endpoint}q=anthology_title:"${params.title}"`;
        if (count > 0) {
            const getData = async () => {
                try {
                    const data = await searchSolr(`${url}&rows=${count}`);
                    const titles = data.response.docs.map((doc: any) => doc.title);
                    setResultTitle(data.response.docs[0].anthology_title)
                    setResults(titles);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            };
            getData();
        }
    }, [count]);

    return (
        <SubPageResults title={resultTitle} results={results} />
    )
}
