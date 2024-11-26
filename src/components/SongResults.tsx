

export default function SongResults(props: any) {
    const resultList: any = props.resultList;
    console.log(resultList)
    return (
        <>
            {resultList.map(result =>
                // Build out a result component
                <div key={result.new_id}>
                    <div>
                        Composers:{result.composers}
                    </div>
                    <div>
                        call number:{result.call_number}
                    </div>
                </div>
            )}
        </>
    )

}