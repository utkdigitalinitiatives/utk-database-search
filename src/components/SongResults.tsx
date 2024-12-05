import { Link } from "react-router"


export default function SongResults(props: any) {
    console.log(props.resultList)
    console.log(props.searchURL);
    return (
        <div className="mx-4 py-3 px-4 my-3">
            {props?.resultList?.map(result =>
                // Build out a result component
                <div key={result?.id} className="border-t border-utk-orange my-3 odd:bg-utk-light-gray even:bg-utk-white shadow-md py-3 px-2">
                    <div className="flex justify-center text-utk-link font-medium text-xl">
                        {result?.title}
                    </div>
                    <div className="flex flex-row flex-wrap justify-evenly text-utk-smokey py-2">
                        <div className="flex flex-col flex-wrap">
                            <div className="flex flex-row flex-wrap">
                                <span className="font-semibold px-2">Composers:</span>
                                {result?.composers?.map(composer =>
                                    <div key={`${result.id}${composer}`} className="text-wrap">{composer}</div>
                                )}
                            </div>
                            <div className="flex flex-row flex-wrap">
                                <span className="font-semibold px-2">Authors:</span>
                                {result?.authors?.map(author =>
                                    <div key={`${result?.id}${author}`} className="text-wrap">{author}</div>
                                )}
                            </div>
                            <div className="flex flex-row flex-wrap">
                                <span className="font-semibold px-2">Call Number:</span>
                                <div className="text-wrap">{result?.call_number}</div>
                            </div>
                        </div>
                        <div className="flex flex-col px-2">
                            <div className="flex flex-wrap">
                                <span className="font-semibold px-2">Song Type:</span> {result.song_types}
                            </div>
                            <div className="flex flex-row flex-wrap">
                                <span className="font-semibold px-2">Languages:</span>
                                {result?.languages?.map(language =>
                                    <div key={`${result?.id}${language}`} className="pe-1">{language}</div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap justify-end text-utk-smokey max-w-108 mx-auto">
                        <Link to={`${result?.id}`} className="flex flex-row px-2">View All Details
                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.001c5.524 0 10 4.477 10 10s-4.476 10-10 10c-5.522 0-10-4.477-10-10s4.478-10 10-10Zm0 1.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17Zm-.352 4.053.072-.084a.75.75 0 0 1 .977-.073l.084.073 4 4a.75.75 0 0 1 .073.977l-.072.085-4.002 4a.75.75 0 0 1-1.133-.977l.073-.084 2.722-2.721H7.75a.75.75 0 0 1-.743-.648L7 12a.75.75 0 0 1 .648-.743l.102-.007h6.69l-2.72-2.72a.75.75 0 0 1-.072-.976l.072-.084-.072.084Z" fill="#ff8200" /></svg>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    )

}
