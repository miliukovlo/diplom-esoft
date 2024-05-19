import { StrOrNumber } from "../Types/StrOrNumber";

export const isValueStr =(value: StrOrNumber): value is string  => {
    return typeof value === 'string'
}