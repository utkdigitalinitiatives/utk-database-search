

export default function ResultTop(props: any) {
    return (
        <div className="mx-4 py-3 px-4 my-3 text-lg bg-utk-light-gray border-2 rounded-sm shadow-inner">
            Records found:
            <span className="font-semibold">
                &nbsp;{props.totalRecords}
            </span>
        </div>
    )
}