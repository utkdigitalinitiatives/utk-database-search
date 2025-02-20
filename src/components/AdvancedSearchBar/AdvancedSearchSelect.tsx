interface AdvancedSearchSelectProps {
    label: string;
    optionVals: { value: string, optionTitle: string }[];  
    name: string;
    value: string;  
    onChange: (field: string, value: string) => void;  
}

const AdvancedSearchSelect: React.FC<AdvancedSearchSelectProps> = ({ label, optionVals, name, value, onChange }) => {
    return (
        <div className="text-utk-white flex flex-col w-full">
            <label htmlFor={name} className="text-sm font-medium">{label}</label>
            <select
                id={name}
                name={name}
                value={value}  
                onChange={(e) => onChange(name, e.target.value)} 
                className="shadow-inner border-2 focus:border-utk-orange focus:outline-none p-1 rounded-md text-utk-smokey transition ease-in-out duration-300 "
            >
                <option value="select" disabled>Select an option</option> 
                {optionVals.map((option, index) => (
                    <option key={index} value={option.value}>  
                        {option.optionTitle}  
                    </option>
                ))}
            </select>
        </div>
    );
};

export default AdvancedSearchSelect;
