import { ChangeEvent, useState } from "react"

export const useImageHandler = () => {
    const [imageForProject, setImageForProject] = useState<File | undefined>(undefined)
    const [imageUrl, setImageUrl] = useState<string>('')

    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        setImageForProject(selectedFile);

        if (selectedFile) {
            setImageUrl(URL.createObjectURL(selectedFile));
            console.log('Выбранный файл:', selectedFile);
        }
    }

    return { imageForProject, handleImageChange, setImageForProject, imageUrl, setImageUrl }
}
