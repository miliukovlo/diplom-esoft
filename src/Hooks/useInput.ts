import { ChangeEvent, useState } from "react"
import { StrOrNumber } from "../Types/StrOrNumber"
import { isValueStr } from "../tests/isValueStr"

export const useInput = (currentValue: StrOrNumber)  => {
    const [value, setValue] = useState<StrOrNumber>(currentValue)

    const onChange = (e : ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value as StrOrNumber)
    }
    if (isValueStr(value)) {
        return {value, onChange}
    } else {
        return {value, onChange}
    }
}