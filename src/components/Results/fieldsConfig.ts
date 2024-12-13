// fieldsConfig.ts
export const fieldsConfig = {
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
            {
                label: "Related Passages",
                key: "relatedPassages", // Example of array field
                type: "array",
                render: (data: any) => data.join(", "), // Custom render function for array
            },
            // Add more fields as necessary
        ]
    },
};
