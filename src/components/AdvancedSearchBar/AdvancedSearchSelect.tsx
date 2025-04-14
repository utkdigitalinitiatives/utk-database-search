interface AdvancedSearchSelectProps {
    label: string;
    optionVals: { value: string, optionTitle: string }[];  
    name: string;
    value: string;  
    onChange: (field: string, value: string) => void;  
    defaultValue?: string;
}

const AdvancedSearchSelect: React.FC<AdvancedSearchSelectProps> = ({ label, optionVals, name, value, onChange, defaultValue = "" }) => {

    const sortedOptions = [...optionVals]
        .sort((a, b) => a.optionTitle.localeCompare(b.optionTitle));
    
    const englishOption = sortedOptions.find(opt => opt.value === "english");
    if (englishOption) {
        sortedOptions.splice(sortedOptions.indexOf(englishOption), 1);
        sortedOptions.unshift(englishOption);
    }

    return (
        <div className="text-utk-white flex flex-col w-full">
            <label htmlFor={name} className="text-sm font-medium">{label}</label>
            <select
                id={name}
                name={name}
                value={value}  
                onChange={(e) => onChange(name, e.target.value)} 
                className="shadow-inner border-2 focus:border-utk-orange focus:outline-hidden p-1 rounded-md text-utk-smokey bg-utk-white transition ease-in-out duration-300 "
            >
                <option value="" disabled>Select an option</option> 
                {sortedOptions.map((option, index) => (
                    <option key={index} value={option.value}>  
                        {option.optionTitle}  
                    </option>
                ))}
            </select>
        </div>
    );
};

export default AdvancedSearchSelect;
