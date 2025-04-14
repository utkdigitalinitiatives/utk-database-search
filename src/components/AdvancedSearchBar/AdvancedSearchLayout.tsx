import { searchSolr } from "../../utils/utils.tsx";
import { useState } from "react";
import AdvancedSearchInput from "./AdvancedSearchInput.tsx";
import AdvancedSearchSelect from "./AdvancedSearchSelect.tsx";

interface InputVal {
    type: 'input' | 'select';
    label: string;
    name: string;
    placeholder?: string;
    optionVals?: { value: string; optionTitle: string }[];
}

interface AdvancedProps {
    inputVals: Record<string, InputVal>;
    endpoint: string;
    onSearch: (data: any, url: string, status: number, noResults: boolean) => void;
    initialValues?: Record<string, any>;
}

export default function AdvancedSearch({
    inputVals,
    endpoint,
    onSearch,
    initialValues = {},
}: AdvancedProps) {
    const [formState, setFormState] = useState<Record<string, string>>(() => {
        const initialState: Record<string, string> = {};
        Object.entries(inputVals).forEach(([key, inputVal]) => {
            initialState[key] = initialValues[inputVal.name] || '';
        });
        return initialState;
    });

    // Handle changes to form fields
    const handleChange = (field: string, value: string) => {
        setFormState((prevState) => ({
            ...prevState,
            [field]: value,
        }));
    };

    const createParams = () => {
        // Create field-specific query parts first
        const fieldQueries: string[] = [];
        
        Object.entries(formState).forEach(([key, value]) => {
            if (value && value !== 'select' && value !== '') {
                const terms: string[] = [];
                const stringArr: string[] = value.split(" ");
                const isMultiWord = stringArr.length > 1;
                
                if (isMultiWord) {
                    // Add exact phrase match
                    terms.push(`${key}:"${value}"`);
                    
                    // Add individual word matches with wildcard
                    stringArr.forEach(word => {
                        if (word.trim()) {
                            terms.push(`${key}:${word}*`);
                        }
                    });
                } else {
                    // Single word with exact and wildcard
                    terms.push(`${key}:"${value}"`);
                    terms.push(`${key}:${value}*`);
                }
                
                // Join all terms for this field with OR
                if (terms.length > 0) {
                    fieldQueries.push(`(${terms.join(" OR ")})`);
                }
            }
        });
        
        // Join all field queries with AND
        let queryString = fieldQueries.join(" AND ");
        if (window.location.pathname == '/song-analysis') {
            queryString += ' AND db_type:"analysis_db"';
        }
        if(window.location.pathname == '/song') {
            queryString += ' AND db_type:"song_db"';
        }
        
        return queryString;
    };

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
        if(data.response.numFound === 0) {
            onSearch(data.response, fullUrl, 0, true);
        } else {
            onSearch(data.response, fullUrl, 0, false);
        }
    };

    const handleReset = () => {
        setFormState(initialValues);
        const response = {
            docs: 0,
            numFound: [],
        };
        onSearch(response, '', 0, false);
    };

    return (
        <form method="post" id="search-form" className="mx-auto p-2" onSubmit={handleSubmit} onReset={handleReset}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {Object.entries(inputVals).map(([key, inputVal], index) => (
                    <div key={key + index}>
                        {inputVal.type === 'input' ? (
                            <AdvancedSearchInput
                                label={inputVal.label}
                                placeholder={inputVal.placeholder}
                                name={inputVal.name}
                                value={formState[inputVal.name] || ''}
                                onChange={handleChange}
                            />
                        ) : inputVal.type === 'select' ? (
                            <AdvancedSearchSelect
                                label={inputVal.label}
                                optionVals={inputVal.optionVals || []}
                                name={inputVal.name}
                                value={formState[inputVal.name] || ''}
                                onChange={handleChange}
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
                <button type="reset" className="underline-white">Clear Search</button>
            </div>
        </form>
    );
}
