import { ChangeEvent } from "react";

export interface UserPageInputInfoInterface {
    parameterTitle: string,
    placeholderForOld: string,
    placeholderForNew: string,
    type: string,
    valueOfInputOld: { value: string; onChange: (e: ChangeEvent<HTMLInputElement>) => void; },
    valueOfInputNew: { value: string; onChange: (e: ChangeEvent<HTMLInputElement>) => void; },
}