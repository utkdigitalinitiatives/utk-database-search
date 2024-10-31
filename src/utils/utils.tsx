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
        wt: 'json',
        rows: 10,
    })
    const authParams = btoa(`${user}:${pass}`)
    try {
        const response = await fetch(`${url}?${params}`, {
            method: 'GET',
            headers: {
                'Authorization': `Basic ${authParams}`,
                'Content-Type': 'application/json',
            }
        });
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
