import { searchSolr } from "../../utils/utils.tsx";
import { useState } from "react";
import AdvancedSearchInput from "../AdvancedSearchInput.tsx";
import AdvancedSearchSelect from "../AdvancedSearchSelect.tsx";

import songInputVals from '../InputValsSong.ts'
// import { searchSolr } from "../utils/utils";

interface SongAdvancedProps {
    songInputVals: any;
    endpoint: string;
    onSearch: (data: any, url: string, status: number) => void;
    initialValues?: Record<string, any>; // Optional initial values for form
}


export default function SermonAdvancedSearch({
    songInputVals,
    endpoint,
    onSearch,
    initialValues = {}, // Default to an empty object
}: SongAdvancedProps) {

    // Initialize the form state
    const [formState, setFormState] = useState<any>(initialValues);

    // Handle changes to form fields
    const handleChange = (field: string, value: string) => {
        setFormState((prevState: any) => ({
            ...prevState,
            [field]: value,
        }));
    };

    // Create query params based on the form state
    const createParams = () => {
        let queryString = '';
        let queryParts: string[] = [];

        // Loop through each field and add query parts
        Object.entries(formState).forEach(([key, value]) => {
            if (value && value !== 'select' && value !== '') {
                queryParts.push(`${key}:*${value}*`);
            }
        });

        if (queryParts.length > 0) {
            queryString = queryParts.join(' AND ');
        }
        return queryString;
    };

    // Handle form submit
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const query = createParams();
        const params = new URLSearchParams({
            q: query,
            indent: 'true',
            wt: 'json',
        });
        const fullUrl = `${endpoint}${params}`;
        const data = await searchSolr(fullUrl);
        onSearch(data.response, fullUrl, 0);
    };

    // Reset the form to initial state
    const handleReset = () => {
        setFormState(initialValues);
        let response = {
            docs: 0,
            numFound: [],
        };
        onSearch(response, '', 0);
    };

    return (
        <form method="post" id="search-form" className="mx-auto p-2" onSubmit={handleSubmit} onReset={handleReset}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {Object.entries(songInputVals).map(([key, inputVal], index) => (
                    <div key={index}>
                        {inputVal.type === 'input' ? (
                            <AdvancedSearchInput
                                label={inputVal.label}
                                placeholder={inputVal.placeholder}
                                name={inputVal.name}
                                value={formState[inputVal.name] || ''}
                                onChange={(e) => handleChange(inputVal.name, e.target.value)}
                            />
                        ) : inputVal.type === 'select' ? (
                            <AdvancedSearchSelect
                                label={inputVal.label}
                                optionVals={inputVal.optionVals}
                                name={inputVal.name}
                                value={formState[inputVal.name] || 'select'}
                                onChange={(e) => handleChange(inputVal.name, e.target.value)}
                            />
                        ) : (
                            <div className="text-red-600">An error occurred when loading the advanced form</div>
                        )}
                    </div>
                ))}
            </div>
            <div className="flex flex-row justify-end">
                <button type="submit" className="bg-[#dbdcde] border-2 mt-2 rounded-md text-utk-smokey hover:bg-utk-orange hover:text-utk-white hover:border-utk-orange text-center p-1 w-24">
                    Search
                </button>
            </div>
            <div className="flex flex-row mt-1 ms-1 text-utk-white text-sm">
                <button type="reset">Restart Search</button>
            </div>
        </form>
    );
}
