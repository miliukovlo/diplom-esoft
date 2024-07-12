export interface ProjectInterface {
    title: string,
    poster: File | undefined | Blob | MediaSource,
    posterUrl: string | undefined,
    id: string,
    type: string,
    description: string,
    companyId: string,
    watch: number
}