export const isNumber = (value: any): asserts value is number => {
    if (typeof value !== 'number') {
        throw new Error('value не число')
    } 
}