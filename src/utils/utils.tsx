export default function trimString(text: string) {
    let shortedString = text.slice(0, 100);
    return shortedString + "..."
}

export async function searchSolr(fullUrl:string) {

    const user = import.meta.env.VITE_SOLR_USER;
    const pass = import.meta.env.VITE_SOLR_PASS;

    // Ensure proper Base64 encoding of credentials
    const authHeader = btoa(`${user}:${pass}`);
   
    try {

        const response = await fetch(fullUrl, {
            method: 'GET',
            headers: {
                'Authorization': `Basic ${authHeader}`,
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Solr request failed: ${response.status} ${response.statusText}\n${errorText}`);
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data from Solr: ', error);
        return error;
    }
}


// TODO: I will need to likely make fetch requests to the DB directly for example query specific record
