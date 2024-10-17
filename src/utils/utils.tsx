

export default function trimString (text:string) {
    let shortedString = text.slice(0, 100);
    return shortedString + "..."
}