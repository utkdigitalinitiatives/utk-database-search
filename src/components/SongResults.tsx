

export default function SongResults(props: any) {
    console.log(props.resultList)
    return (
        <div className="mx-4 py-3 px-4 my-3">
            {props.resultList.map(result =>
                // Build out a result component
                <div key={result.new_id} className="border-t border-utk-orange my-3 odd:bg-utk-light-gray even:bg-utk-white shadow-md py-3 px-2">
                    <div className="flex justify-center text-utk-link font-medium text-xl">
                        {result.title}
                    </div>
                    <div className="flex flex-row flex-wrap justify-evenly text-utk-smokey py-2">
                        <div className="flex flex-col flex-wrap">
                            <div className="flex flex-row flex-wrap">
                                <span className="font-semibold px-2">Composers:</span>
                                {result.composers.map(composer =>
                                    <div className="text-wrap">{composer}</div>
                                )}
                            </div>
                            <div className="flex flex-row flex-wrap">
                                <span className="font-semibold px-2">Authors:</span>
                                {result.authors.map(author =>
                                    <div className="text-wrap">{author}</div>
                                )}
                            </div>
                        </div>
                        <div className="flex flex-col px-2">
                            <div className="flex flex-wrap">
                                <span className="font-semibold px-2">Song Type:</span> {result.song_types}
                            </div>
                            <div className="flex flex-row flex-wrap">
                                <span className="font-semibold px-2">Languages:</span>
                                {result.languages.map(language =>
                                    <div className="pe-1">{language}</div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )

}