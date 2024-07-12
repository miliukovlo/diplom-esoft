import { ChangeEvent, useState } from "react"

export const useImageHandler = () => {
    const [imageForProject, setImageForProject] = useState<File | undefined>(undefined)
    const [imageUrl, setImageUrl] = useState<string>('')

    const handleImageChange = async (event: ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];

        try {
            if (selectedFile) {
                const url = URL.createObjectURL(new Blob([selectedFile], {type: 'image/png, image/jpeg'}))
                setImageUrl(url)
                setImageForProject(selectedFile);
                console.log('Выбранный файл:', selectedFile);
            }
        } catch (e) {
            return e;
        }
    }

    return { imageForProject, handleImageChange, setImageForProject, imageUrl, setImageUrl }
}
