interface SubPageResultsProps {
    title: string
    results: string[]
}

export default function SubPageResults(props: SubPageResultsProps) {
    return (

        <div className="flex justify-center shadow-inner">
            <div className="container rounded-md my-3 mx-2 max-w-(--breakpoint-lg) text-utk-smokey border border-utk-orange shadow-md">
                <div className="bg-[rgba(75,75,75,0.90)] text-utk-white flex justify-center text-2xl font-semibold py-4 px-2 rounded-t-md">
                    {props.title}
                </div>
                <div className="text-utk-smokey utk-link shadow-inner">
                    {props.results?.map((title: string, idx: number) => (
                        <div key={idx} className="flex flex-row flex-wrap text-wrap py-3 odd:bg-utk-light-gray even:bg-utk-white rounded-b">
                            <p className="ps-4">{idx}: {title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
