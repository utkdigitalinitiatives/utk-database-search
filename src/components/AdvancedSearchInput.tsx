
interface AdvancedSearchInputProps {
    label: string,
    placeholder: string;
    name: string;
    onChange: (value: string) => void;  // Define the type for the onChange prop
}

export default function AdvancedSearchInput({ label, placeholder, name, onChange }: AdvancedSearchInputProps) {
    return (
        <label className="py-0 text-utk-white w-full"> {label}
            <input
                type="text"
                placeholder={placeholder}
                name={name}
                className="form-control shadow-inner border-2 focus:border-utk-orange focus:outline-none p-1 rounded-md w-full text-utk-smokey"
                onChange={e => onChange(e.target.value)}
            />
        </label>
    )
}