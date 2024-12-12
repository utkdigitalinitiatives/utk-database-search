

export default function SongInstructions() {
    return (
        <>
            <div className="max-w-screen-md px-2 text-sm text-utk-smokey mt-4 mx-auto">
                This database provides access to about 50,000 songs in more than 1,500 published song anthologies owned by the George F. DeVine Music Library at the University of Tennessee, located in Knoxville. Use this citation index to determine which anthologies contain the song(s) you need. You will not find the music or the words here, just the call number and book title. If you are not in Knoxville, ask your librarian about interlibrary loan options to obtain the songs you need be.
            </div>
            <div className="text-sm text-utk-smokey px-2 max-w-screen-md mx-auto">
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