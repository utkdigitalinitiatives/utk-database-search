interface ResultTopProps {
    totalRecords: number;
    searchStart: number;
  }

export default function ResultTop(props: ResultTopProps) {
    return (
        <div className="mx-4 py-3 px-4 my-3 text-lg bg-utk-light-gray border-2 rounded-xs shadow-inner text-utk-smokey md:flex md:flex-row">
            <div>
                Records found:
                <span className="font-semibold">
                    &nbsp;{props.totalRecords}
                </span>
            </div>
            <div className="ms-auto">
                Currently Viewing Records: <span className="font-semibold">{props.searchStart} - {props.searchStart + 10}</span>
            </div>

        </div>
    )
}
