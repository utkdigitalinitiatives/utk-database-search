

export default function trimString (text:string) {
    let shortedString = text.slice(0, 100);
    return shortedString + "..."
}

export async function searchSolr(query: any) {
    const url = import.meta.env.VITE_SOLR;

    const params = new URLSearchParams({
        q: query,
        wt: 'json',
        rows: 10,
    })

    try {
        const response = await fetch(`${url}?${params}`);
        if (!response.ok) {
            throw new Error('Network response was not okay');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data from Solr: ', error);
        return null
    }
}