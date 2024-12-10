import { useParams } from "react-router";


const SongPage = () => {
    let params = useParams();

    console.log(params)
    return (
        <div>Song Page!</div>
    )
}

export default SongPage;
