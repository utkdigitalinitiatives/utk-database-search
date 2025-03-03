interface AdvancedSearchInputProps {
    label: string;
    placeholder: string | undefined;
    name: string;
    value: string;  // The current value of the input field
    onChange: (field: string, value: string) => void;  // The onChange handler
}

const AdvancedSearchInput: React.FC<AdvancedSearchInputProps> = ({ label, placeholder, name, value, onChange }) => {
    return (
        <div className="flex flex-col">
            <label htmlFor={name} className="text-sm font-medium py-0 text-utk-white w-full">{label}</label>
            <input
                id={name}
                name={name}
                type="text"
                placeholder={placeholder}
                value={value}  // Bind the input's value to the state
                onChange={(e) => onChange(name, e.target.value)}  // Call the onChange handler when value changes
                className="form-control shadow-inner border-2 focus:border-utk-orange focus:outline-hidden p-1 rounded-md w-full bg-utk-white text-utk-smokey"
            />
        </div>
    );
};

export default AdvancedSearchInput