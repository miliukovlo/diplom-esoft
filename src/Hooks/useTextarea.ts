import { ChangeEvent, useState } from "react"

export const useInput = <T>(currentValue: T)  => {
    const [value, setValue] = useState<T>(currentValue)

    const onChange = (e : ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value as T)
    }
        return {value, onChange}
}