interface AdvancedSearchSelectProps {
    label: string;
    optionVals: { value: string, optionTitle: string }[];  // Array of objects with value and optionTitle
    name: string;
    value: string;  // The current selected value
    onChange: (field: string, value: string) => void;  // onChange handler
}

const AdvancedSearchSelect: React.FC<AdvancedSearchSelectProps> = ({ label, optionVals, name, value, onChange }) => {
    return (
        <div className="text-utk-white flex flex-col w-full">
            <label htmlFor={name} className="text-sm font-medium">{label}</label>
            <select
                id={name}
                name={name}
                value={value}  // This should be bound to the current selected value
                onChange={(e) => onChange(name, e.target.value)}  // Call onChange with correct field and value
                className="shadow-inner border-2 focus:border-utk-orange focus:outline-none p-1 rounded-md text-utk-smokey transition ease-in-out duration-300 "
            >
                <option value="select" disabled>Select an option</option> {/* Default disabled option */}
                {optionVals.map((option, index) => (
                    <option key={index} value={option.value}>  {/* Use value as the key for the option */}
                        {option.optionTitle}  {/* Render the optionTitle as the text */}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default AdvancedSearchSelect;
