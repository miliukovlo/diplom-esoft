import { ChangeEvent, useState } from "react"

export const useSelect = <T>(currentValue: T)  => {
    const [value, setValue] = useState<T>(currentValue)

    const onChange = (e : ChangeEvent<HTMLSelectElement>) => {
        setValue(e.target.value as T)
    }
        return {value, onChange, setValue}
}