interface AdvancedSearchSelectProps {
    label: string;
    optionVals: [
        {
            value: string,
            optionTitle: string,
        }
    ];
    onChange: (value: string) => void;
}


export default function AdvancedSearchSelect({ label, optionVals, onChange }: AdvancedSearchSelectProps) {
    return (
        <label className="text-utk-white flex flex-col">
            <p>
                {label}
            </p>
            <select id="songType" name="songType" className="appearance-none shadow-inner border-2 focus:border-utk-orange focus:outline-none p-1 rounded-md text-utk-smokey transition ease-in-out duration-300" onChange={e => onChange(e.target.value)}>
                {optionVals.map((option, index) =>
                    <option key={option.optionTitle + index} value={option.value}>{option.optionTitle}</option>
                )}
            </select>
        </label>
    )
}
