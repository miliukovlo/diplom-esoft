export interface ProjectInterface {
    title: string,
    poster: File | undefined | Blob | MediaSource,
    posterUrl: string | undefined,
    id: string | number,
    type: string,
    description: string,
    companyId: string,
    watch: number
}