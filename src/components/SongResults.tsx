

export default function SongResults(props: any) {
    const resultList: any = props.resultList;
    console.log(resultList)
    return (
        <div className="mx-4 py-3 px-4 my-3">
            {resultList.map(result =>
                // Build out a result component
                <div key={result.new_id} className="border-t border-utk-orange my-3 odd:bg-utk-light-gray even:bg-utk-white">
                    <div className="flex justify-center text-utk-link font-medium text-xl">
                        {result.title}
                    </div>
                    <div>
                        call number:&nbsp;{result.call_number}
                    </div>
                </div>
            )}
        </div>
    )

}