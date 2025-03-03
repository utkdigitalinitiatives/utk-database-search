
export default function AnalysisInstructions() {
    return (
        <>
            <div className="max-w-(--breakpoint-md) px-2 text-sm text-utk-smokey mt-4 mx-auto">
                For a complete search, consult both the book and the online index. Also, biographies of composers frequently include descriptions of compositions; check for them in ML 410 or ML385-400. To find specific biographies in the catalog, use a Subject Keyword or Subject Browse search for the name of the composer. Another useful source is number 25 of the MLA Index and Bibliography Series, Analyses of Nineteenth and Twentieth-Century Music: 1940-1985, Reference ML113.M18 v.25, which indexes periodicals, dissertations and books.

                It is important to note that items contained in Harold Diamond’s book and the MLA Index, may or may not be available from the UT Music Library.
            </div>
            <div className="text-sm text-utk-smokey px-2 max-w-(--breakpoint-md) mx-auto">
                <p className="font-semibold my-2">INSTRUCTIONS</p>
                <ol className="list-disc px-4 mt-2">
                    <li>
                        Start your search as simply as possible. For example, enter the last name of the composer and one key word from the song title. However, more than one keyword and any number of fields can be used.
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
