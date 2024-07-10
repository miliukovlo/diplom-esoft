import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../data/reducers/userReducer";

const useExitFromSystem = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const exit = async () => {
        try {
            dispatch(addUser({
                firstName: null,
                lastName: null,
                username: null,
                email: null,
                phone: null,
                id: null,
                isAdmin: false,
                companyId: null,
                image: null,
                theme: null
            }))
            navigate('/')
            localStorage.removeItem('isLogin')
        } catch (e) {
            return e
        }
    }
    return exit
};  
export default useExitFromSystem;