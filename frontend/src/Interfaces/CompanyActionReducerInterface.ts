import CompanyInterface from "./CompanyInterface";

export default interface CompanyActionReducerInterface {
    type: string,
    payload: CompanyInterface | number | string,
}