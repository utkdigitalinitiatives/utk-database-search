export default function trimString(text: string) {
    let shortedString = text.slice(0, 100);
    return shortedString + "..."
}

export async function searchSolr(query: any) {
    const url = import.meta.env.VITE_SOLR;
    const user = import.meta.env.VITE_SOLR_USER;
    const pass = import.meta.env.VITE_SOLR_PASS;

    const params = new URLSearchParams({
        q: query,
        indent: "true",
        wt: 'json',
        // rows: 10,
    })
    const authParams = btoa(`${user}:${pass}`)
    console.log(url)
    try {
        const response = await fetch(`${url}?${params}`, {
            method: 'GET',
            headers: {
                'Authorization': `Basic ${authParams}`,
                'Content-Type': 'application/json',
                
            },
            credentials:"include",
        });
        if (!response.ok) {
            console.error(response)
            throw new Error('Network response was not okay');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data from Solr: ', error);
        return null
    }
}


// TODO: I will need to likely make fetch requests to the DB directly 