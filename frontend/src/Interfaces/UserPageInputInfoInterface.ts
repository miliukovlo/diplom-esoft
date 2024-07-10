import { ChangeEvent } from "react";

export interface UserPageInputInfoInterface {
    parameterTitle: string,
    id: number,
    placeholderForNew: string,
    type: string,
    valueOfInputNew: { value: string; onChange: (e: ChangeEvent<HTMLInputElement>) => void; },
}