import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../data/reducers/userReducer";
import { GetId } from "./GetId";

const useRegisterInSystem = (
    userName: string, 
    password: string,
    firstName: string, 
    lastName: string, 
    email: string, 
    phone: string, 
    isAdmin: boolean, 
    companyId
    : string,  
    setError: React.Dispatch<React.SetStateAction<boolean>>

) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const register = async () => {
        try {
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
                    company_id: isAdmin ? companyId : null,
                    image_url: null,
                    theme: 'dark',
                    password: 'password'
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
                        password: userData.password,
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
        } catch (e) {
            return e
        }
    }
    return register
};  
export default useRegisterInSystem;