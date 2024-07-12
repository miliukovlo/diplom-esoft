import axios from "axios";
import CryptoJS from "crypto-js";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../data/reducers/userReducer";

const useRegisterInSystem = (
    userName: string, 
    password: string,
    firstName: string, 
    lastName: string, 
    email: string, 
    phone: string, 
    isAdmin: boolean,
    companyId: string,
    companyName: string,
    companySlogan: string,
    companySpecialization: string,
    companyImage: string,
    setError: React.Dispatch<React.SetStateAction<boolean>>

) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const encryptedPassword = CryptoJS.AES.encrypt(JSON.stringify(password), "someSecretKey").toString()
    const register = async () => {
        try {
            if (isAdmin) {
                if (
                    userName !== '' &&
                    password !== '' &&
                    firstName !== '' &&
                    lastName !== '' &&
                    email !== '' &&
                    phone !== '' &&
                    companyId !== '' &&
                    companyName !== '' &&
                    companySlogan !== '' &&
                    companySpecialization !== '' 
                ) {
                    console.log('Создание')
                    const createCompany = await axios.post(`http://localhost:3760/api/company/`, {
                        company_id: companyId,
                        company_name: companyName,
                        logo: 'https://yt3.googleusercontent.com/ytc/AOPolaSMvxOI0YpEAbJqoOpZ-TpDR0tR-trP4qJwi55vlA=s900-c-k-c0x00ffffff-no-rj',
                        slogan: companySlogan,
                        specialization: companySpecialization
                    })
                    const companyData = createCompany.data
                    console.log(companyData)
                    const createUser = await axios.post(`http://localhost:3760/api/users/`, {
                        first_name: firstName,
                        last_name: lastName,
                        username: userName,
                        email: email,
                        phone: phone,
                        is_admin: isAdmin,
                        company_id: companyId,
                        image_url: null,
                        theme: 'dark',
                        password: encryptedPassword
                    });
                    const userData = createUser.data
                    if (userData.username === userName) {
                        dispatch(addUser({
                            firstName: userData.first_name,
                            lastName: userData.last_name,
                            username: userData.username,
                            email: userData.email,
                            phone: userData.phone,
                            isAdmin: userData.is_admin,
                            companyId: userData.company_id,
                            image: userData.image_url,
                            password: encryptedPassword,
                            theme: userData.theme
                        }))
                        setError(false);
                        navigate('/main')
                        localStorage.setItem('isLogin', 'true')
                        localStorage.setItem('userName', `${userData.username}`)
                    } else {
                        setError(true)
                    }
                } else {
                    setError(true);
                }
            } else {
                if (
                    userName !== '' &&
                    password !== '' &&
                    firstName !== '' &&
                    lastName !== '' &&
                    email !== '' &&
                    phone !== ''
                ) {
                    const createUser = await axios.post(`http://localhost:3760/api/users/`, {
                        first_name: firstName,
                        last_name: lastName,
                        username: userName,
                        email: email,
                        phone: phone,
                        is_admin: isAdmin,
                        company_id: null,
                        image_url: null,
                        theme: 'dark',
                        password: encryptedPassword
                    });
                    const userData = createUser.data
                    console.log(userData)
                    if (userData.username === userName) {
                        
                        dispatch(addUser({
                            firstName: userData.first_name,
                            lastName: userData.last_name,
                            username: userData.username,
                            email: userData.email,
                            phone: userData.phone,
                            isAdmin: userData.is_admin,
                            companyId: userData.company_id,
                            image: userData.image_url,
                            password: encryptedPassword,
                            theme: userData.theme
                        }))
                        setError(false);
                        navigate('/main')
                        localStorage.setItem('isLogin', 'true')
                        localStorage.setItem('userName', `${userData.username}`)
                    } else {
                        setError(true)
                    }
                } else {
                    setError(true);
                }
            }
        } catch (e) {
            return e
        }
    }
    return register
};  
export default useRegisterInSystem;