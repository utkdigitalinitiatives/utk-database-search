interface Field {
    label: string;
    key: string;
    type: 'string' | 'array';  // You can add more types as necessary
    render?: (data: any) => JSX.Element;  // This should always return a JSX.Element
}

interface ResultConfig {
    titleField: string;
    idField: string;
    fields: Field[];
}

export const fieldsConfig: { [key: string]: ResultConfig } = {
    sermon: {
        titleField: "short_title", // Name of the title field in this result
        idField: "id",            // Name of the ID field in this result
        fields: [
            {
                label: "Denomination",
                key: "denomination",
                type: "string",
            },
            {
                label: "Author",
                key: "author",
                type: "string",
            },
            {
                label: "State",
                key: "state",
                type: "string",
            },
            {
                label: "Dates",
                key: "dates",
                type: "string",
            },
        ]
    },
    song: {
        titleField: 'title',
        idField: 'db_id',
        fields: [
            {
                label: 'Composers',
                key: 'composers',
                type: 'array',
                render: (data: string[]): JSX.Element => {
                    return (
                        <div className="flex flex-col">
                            {data.map((composer, index) => (
                                <div key={index} className="text-wrap">{composer}</div>
                            ))}
                        </div>
                    );
                },
            },
            {
                label: 'Authors',
                key: 'authors',
                type: 'array',
                render: (data: string[]): JSX.Element => {
                    return (
                        <div className="flex flex-col">
                            {data.map((author, index) => (
                                <div key={index} className="text-wrap">{author}</div>
                            ))}
                        </div>
                    );
                },
            },
            {
                label: "Call Number",
                key: "call_number",
                type: "string",
            },
            {
                label: "Song Type",
                key: "song_types",
                type: "string",
            },
            {
                label: 'Languages',
                key: 'languages',
                type: 'array',
                render: (data: string[]): JSX.Element => {
                    return (
                        <div className="flex flex-col">
                            {data.map((language, index) => (
                                <div key={index} className="text-wrap">{language}</div>
                            ))}
                        </div>
                    );
                },
            },
        ]
    },
    symphony:{
        titleField: 'title',
        idField: 'id',
        fields: [
            {
                label: 'Composer Name',
                key: 'composer_name',
                type: 'array',
                render: (data: string[]): JSX.Element => {
                    return (
                        <div className="flex flex-col">
                            {data.map((composerName, index) => (
                                <div key={index} className="text-wrap">{composerName}</div>
                            ))}
                        </div>
                    );
                },
            },
            {
                label: 'Season',
                key: 'season',
                type: 'array',
                render: (data: string[]): JSX.Element => {
                    // Ensure it returns JSX elements, not boolean
                    return (
                        <div className="flex flex-col">
                            {data.map((season, index) => (
                                <div key={index} className="text-wrap">{season}</div>
                            ))}
                        </div>
                    );
                },
            },
            {
                label: 'Date',
                key: 'date',
                type: 'array',
                render: (data: string[]): JSX.Element => {
                    // Ensure it returns JSX elements, not boolean
                    return (
                        <div className="flex flex-col">
                            {data.map((date, index) => (
                                <div key={index} className="text-wrap">{date}</div>
                            ))}
                        </div>
                    );
                },
            },
        ]
    },
    tennesseeNews: {
        titleField: 'mainentry_title',
        idField: 'id',
        fields: [
            {
                label: 'Copy Type',
                key: 'copy_type',
                type: 'array',
                render: (data: string[]): JSX.Element => {
                    // Ensure it returns JSX elements, not boolean
                    return (
                        <div className="flex flex-col">
                            {data.map((copyType, index) => (
                                <div key={index} className="text-wrap">{copyType}</div>
                            ))}
                        </div>
                    );
                },
            },
            {
                label: 'OCLC',
                key: 'oclc',
                type: 'array',
                render: (data: string[]): JSX.Element => {
                    return (
                        <div className="flex flex-col">
                            {data.map((oclc, index) => (
                                <div key={index} className="text-wrap">{oclc}</div>
                            ))}
                        </div>
                    );
                },
            },
            {
                label: 'Call Number',
                key: 'call_number',
                type: 'array',
                render: (data: string[]): JSX.Element => {
                    return (
                        <div className="flex flex-col">
                            {data.map((callNumber, index) => (
                                <div key={index} className="text-wrap">{callNumber}</div>
                            ))}
                        </div>
                    );
                },
            },
            {
                label: 'Holding Library',
                key: 'holding_library',
                type: 'array',
                render: (data: string[]): JSX.Element => {
                    return (
                        <div className="flex flex-col">
                            {data.map((library, index) => (
                                <div key={index} className="text-wrap">{library}</div>
                            ))}
                        </div>
                    );
                },
            },
        ]
    }
};
