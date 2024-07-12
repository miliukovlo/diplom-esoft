export interface CreateApartmentInterface {
    title: string,
    description: string,
    companyId: string,
    projectId: number | string,
    square: number,
    rooms: number,
    amount: number,
    cost: number,
    haveBalcony: boolean,
    isSale: boolean,
    id: number | string,
    poster: File | undefined | Blob | MediaSource,
    posterUrl: string | undefined,
    type: string,
    watch: number
}
