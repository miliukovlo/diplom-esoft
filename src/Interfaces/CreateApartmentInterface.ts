export interface CreateApartmentInterface {
    title: string,
    description: string,
    companyId: string,
    projectId: number,
    id: number,
    poster: File | undefined | Blob | MediaSource,
    posterUrl: string | undefined,
    type: string,
    watch: number
}
