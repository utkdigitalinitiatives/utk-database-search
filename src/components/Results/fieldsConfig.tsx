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
            
            // Add more fields as necessary
        ]
    },
    song: {
        titleField: 'title',
        idField: 'id',
        fields: [
            {
                label: 'Composers',
                key: 'composers',
                type: 'array',
                render: (data: string[]): JSX.Element => {
                    // Ensure it returns JSX elements, not boolean
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
                    // Ensure it returns JSX elements, not boolean
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
                    // Ensure it returns JSX elements, not boolean
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
    }
};
