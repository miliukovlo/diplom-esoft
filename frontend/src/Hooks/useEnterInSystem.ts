import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../data/reducers/userReducer";

const useEnterInSystem = (userName: string, password: string, setError: React.Dispatch<React.SetStateAction<boolean>>) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const login = async () => {
        try {
            if (userName !== '' && password !== '') {
                console.log(userName, password)
                const getUser = await axios.get(`http://localhost:3760/api/users/${userName}`);
                const userData = getUser.data
                if (userData && userData.user_password === password && userData.username === userName) {
                    
                    dispatch(addUser({
                        firstName: userData.first_name,
                        lastName: userData.last_name,
                        username: userData.username,
                        email: userData.email,
                        phone: userData.phone,
                        id: userData.user_id,
                        isAdmin: userData.is_admin,
                        companyId: userData.company_id,
                        image: userData.image_url,
                        theme: userData.theme
                    }))
                    setError(false);
                    navigate('/main')
                    localStorage.setItem('isLogin', 'true')
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