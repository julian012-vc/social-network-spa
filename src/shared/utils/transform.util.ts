export const substringText = (max: number, text: string): string => {
    return (text.length <= max) ? text : `${text.substring(0, max)} ...`
}