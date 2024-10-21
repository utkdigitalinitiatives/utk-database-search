import { Form } from "react-router-dom";


export default function SearchBar(props: any) {
    let { placeholder } = props;
    return (
        <Form method="post" id="search-form" className="w-full mx-auto">
            <input
                type="text"
                placeholder={placeholder}
                name="search"
                className="form-control shadow-inner border-s-2 border-y-2 focus:border-utk-orange focus:outline-none p-1 rounded-l-md md:w-96 "
            />
            <button type="submit" className="w-1/4 bg-[#dbdcde] border-e-2 border-y-2 rounded-r-md text-utk-smokey hover:bg-utk-orange hover:text-utk-white hover:border-utk-orange text-center p-1 w-24">Search</button>
        </Form>
    )
}
