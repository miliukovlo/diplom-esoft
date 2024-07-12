import axios from "axios";
import CryptoJS from "crypto-js";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../data/reducers/userReducer";

const useEnterInSystem = (userName: string, password: string, setError: React.Dispatch<React.SetStateAction<boolean>>) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const login = async () => {
        try {
            if (userName !== '' && password !== '') {
                const getUser = await axios.get(`http://localhost:3760/api/users/${userName}`);
                const userData = getUser.data
                const decryptedPassword = JSON.parse(CryptoJS.AES.decrypt(userData.user_password, 'someSecretKey').toString(CryptoJS.enc.Utf8))
                if (userData && decryptedPassword === password && userData.username === userName) {
                    dispatch(addUser({
                        firstName: userData.first_name,
                        lastName: userData.last_name,
                        username: userData.username,
                        email: userData.email,
                        phone: userData.phone,
                        isAdmin: userData.is_admin,
                        companyId: userData.company_id,
                        image: userData.image_url,
                        theme: userData.theme,
                        password: userData.user_password
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
    return login
};  
export default useEnterInSystem;