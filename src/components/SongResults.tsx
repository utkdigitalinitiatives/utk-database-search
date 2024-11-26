

export default function SongResults(props: any) {
    const resultList: any = props.resultList;
    console.log(resultList)
    return (
        <div className="mx-4 py-3 px-4 my-3">
            {resultList.map(result =>
                // Build out a result component
                <div key={result.new_id} className="border-t border-utk-orange my-3 odd:bg-utk-light-gray even:bg-utk-white shadow-md">
                    <div className="flex justify-center text-utk-link font-medium text-xl">
                        {result.title}
                    </div>
                    <div className="flex flex-row flex-wrap justify-evenly">
                        <div className="flex flex-col">
                            Authors:
                            {result.authors.map(author =>
                                <div>{author}</div>
                            )}
                        </div>
                        <div className="flex flex-col">
                            <div>
                                Song Type: {result.song_types}
                            </div>
                            <div>
                                Languages:
                            {result.languages.map(language =>
                                <div>{language}</div>
                            )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )

}