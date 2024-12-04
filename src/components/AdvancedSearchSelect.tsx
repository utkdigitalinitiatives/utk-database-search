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
        <label className="text-utk-white mx-2">{label}
            <select id="songType" name="songType" className="mx-2 text-utk-smokey" onChange={e => onChange(e.target.value)}>
                {optionVals.map((option, index) => 
                    <option key={option.optionTitle+index} value={option.value}>{option.optionTitle}</option>
                )}
            </select>
        </label>
    )
}