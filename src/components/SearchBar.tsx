import { Form } from "react-router-dom";


export default function SearchBar(props: any) {
    let { placeholder } = props;
    return (
        <Form method="post" id="search-form" className="w-full mx-auto">
            <input
                type="text"
                placeholder={placeholder}
                name="search"
                className="w-3/4"
            />
            <button type="submit" className="w-1/4 bg-utk-smokey">Search!</button>
        </Form>
    )
}
