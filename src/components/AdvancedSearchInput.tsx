
interface AdvancedSearchInputProps {
    placeholder: string;
    name: string;
    onChange: (value: string) => void;  // Define the type for the onChange prop
}

export default function AdvancedSearchInput({ placeholder, name, onChange }:AdvancedSearchInputProps) {
    return (
        <input
            type="text"
            placeholder={placeholder}
            name={name}
            className="form-control shadow-inner border-2 focus:border-utk-orange focus:outline-none mt-2 p-1 rounded-md w-full "
            onChange={e => onChange(e.target.value)}
        />
    )
}