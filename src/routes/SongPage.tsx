import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { searchSolr } from "../utils/utils";


const SongPage = () => {

    let params = useParams();
    const endpoint = `/unified_song_db_dev/select?`;
    const [result, setResults] = useState([])
    let id = parseInt(params.songId);

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
        <div>Song Page!</div>
    )
}

export default SongPage;
