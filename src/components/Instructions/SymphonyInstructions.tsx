
export default function SymphonyInstructions() {
    return (
        <>
            <div className="max-w-(--breakpoint-md) px-2 text-sm text-utk-smokey mt-4 mx-auto">
                This database provides access to Knoxville Symphony Orchestra programs.  More information to go here
            </div>
            <div className="text-sm text-utk-smokey px-2 max-w-(--breakpoint-md) mx-auto">
                <p className="font-semibold my-2">INSTRUCTIONS</p>
                <ol className="list-disc px-4 mt-2">
                    <li>
                        Start your search as simply as possible. For example, enter the last name of the author, or a denomination, and one key word from the song title. However, more than one keyword and any number of fields can be used.
                    </li>
                    <li className="pt-1">
                        To narrow down search results by a specific piece of information, click advanced and fill out various fields to narrow down your search.
                    </li>
                    <li className="pt-1">
                        DO NOT use initial articles such as: the/of/a/an  (use 'Sound of Music' rather than 'The Sound of Music').
                    </li>
                    <li className="pt-1">
                        DO NOT use dashes or punctuation, besides apostrophes.
                    </li>
                    <li className="pt-1">
                        Truncation is automatic ('Tchai' will yield 'Tchaikovsky').
                    </li>
                </ol>
            </div>
        </>
    )
}