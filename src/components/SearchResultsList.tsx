import { Link } from "react-router"
import { fieldsConfig } from "../configFiles/searchResultsFieldConfig";
interface SearchResultProps {
    resultList: any[];
    resultType: keyof typeof fieldsConfig;  // Accept resultType to determine the configuration
}

export default function SearchResultsList({ resultList, resultType }: SearchResultProps) {
    const config = fieldsConfig[resultType];

    return (
        <div className="mx-4 py-3 px-4 utk-link">
            {resultList?.map(result => (
                <div key={result?.[config.idField]} className="relative rounded-b-sm odd:bg-utk-light-gray even:bg-utk-white shadow-lg py-3 px-2 mb-5">
                    <div className="absolute top-0 left-0 w-1/3 lg:w-[20rem] border-t-[2px] border-utk-orange group-hover:border-utk-orange"></div>
                    <div className="absolute top-0 left-0 h-1/2 border-l-[2px] border-utk-orange group-hover:border-utk-orange"></div>
                    <div className="flex justify-center text-utk-link font-medium text-xl mt-2">
                        {result?.[config.titleField]}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-2 px-5">
                        {config.fields.map(field => {
                            const value = result?.[field.key];

                            if (field.type === "string") {
                                return (
                                    <div className="flex flex-col" key={`${result[config.idField]}-${field.key}`}>
                                        <div className="flex flex-row flex-wrap text-utk-smokey">
                                            <span className="font-semibold px-2">{field.label}:</span>
                                            <div className="text-wrap">{value}</div>
                                        </div>
                                    </div>
                                );
                            }

                            if (field.type === "array" && Array.isArray(value)) {
                                return (
                                    <div className="flex flex-col" key={`${result[config.idField]}-${field.key}`}>
                                        <div className="flex flex-row flex-wrap text-utk-smokey">
                                            <span className="font-semibold px-2">{field.label}:</span>
                                            <div className="text-wrap">{field.render ? field.render(value) : null}</div>
                                        </div>
                                    </div>
                                );
                            }

                            if(field.type === "link") {
                                return (
                                    <div className='flex flex-row text-utk-smokey'  key={`${result[config.idField]}-${field.key}`}>
                                        <span className="font-semibold px-2">{field.label}:</span>
                                        <Link to={`${result?.[config.idField]}/anthology/${value}`}>{ value }</Link>
                                    </div>
                                )
                            }

                            return null;
                        })}
                    </div>
                    <div className="flex flex-row flex-wrap justify-end mx-auto">
                        <Link to={`${result?.[config.idField]}`} className="flex flex-row px-2 ease-in-out duration-300 hover:scale-x-105 group">View All Details
                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="fill-utk-orange group-hover:fill-utk-link">
                                <path d="M12 2.001c5.524 0 10 4.477 10 10s-4.476 10-10 10c-5.522 0-10-4.477-10-10s4.478-10 10-10Zm0 1.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17Zm-.352 4.053.072-.084a.75.75 0 0 1 .977-.073l.084.073 4 4a.75.75 0 0 1 .073.977l-.072.085-4.002 4a.75.75 0 0 1-1.133-.977l.073-.084 2.722-2.721H7.75a.75.75 0 0 1-.743-.648L7 12a.75.75 0 0 1 .648-.743l.102-.007h6.69l-2.72-2.72a.75.75 0 0 1-.072-.976l.072-.084-.072.084Z" />
                            </svg>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )

}
