
export default function TitleStringCleaner(fieldName: string): string {
    const stringArr = fieldName.split('_');
    for (let i = 0; i < stringArr.length; i++) {
        stringArr[i] = stringArr[i].charAt(0).toUpperCase() + stringArr[i].slice(1);
    }
    return stringArr.join(' ');
}
