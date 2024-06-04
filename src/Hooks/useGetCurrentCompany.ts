import { useSelector } from "react-redux"
import { RootState } from "../data/reducers/store"
import CompanyInterface from "../Interfaces/CompanyInterface"

export const useGetCurrentCompany = (companyId: string | undefined) => {
    const allCompanies = useSelector((state : RootState) => state.companies.companies as CompanyInterface[])
    if (companyId) {
        const currentCompany = allCompanies.find((company) => company.id === companyId)
        return currentCompany
    } else {
        return null
    }
}