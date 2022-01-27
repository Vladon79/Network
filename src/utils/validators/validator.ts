export const required = (value: string) => {
    if (value) return undefined;
    return 'Field is rejquired'
}

export const maxLengthCreator = (maxlength: number) => (value: string) => {
    if (value.length > maxlength) return `max length is ${maxlength}  symbols`;
    return undefined
}

