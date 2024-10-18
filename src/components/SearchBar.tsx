import { Form } from "react-router-dom";


export default function SearchBar(props: any) {
    let { placeholder } = props;
    return (
        <Form method="post" id="search-form">
            <input
                type="text"
                placeholder={placeholder}
                name="search"
            />
            <button type="submit">Search!</button>
        </Form>
    )
}