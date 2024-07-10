import { ChangeEvent, useState } from "react"
import { UserInterface } from "../Interfaces/UserInterface"
import { RootState } from "../data/reducers/store"
import { useSelector } from "react-redux"
import axios from "axios"

export const useImageHandler = () => {
    const [imageForProject, setImageForProject] = useState<File | undefined>(undefined)
    const getUser = useSelector((state : RootState) => state.user.user as UserInterface[])
    const [imageUrl, setImageUrl] = useState<string>('')

    const handleImageChange = async (event: ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];

        try {
            if (selectedFile) {
                const url = URL.createObjectURL(new Blob([selectedFile], {type: 'image/png, image/jpeg'}))
                setImageUrl(url)
                setImageForProject(selectedFile);
                console.log('Выбранный файл:', selectedFile);
                await axios.put(`http://localhost:3760/api/users/${getUser[0].username}`, {
                    image_url: url
                })
            }
        } catch (e) {
            return e;
        }
    }

    return { imageForProject, handleImageChange, setImageForProject, imageUrl, setImageUrl }
}
