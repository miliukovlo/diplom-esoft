import React, { useEffect, useState } from 'react';
import './PagesContentStyle.css'
import LoginContent from '../../components/LoginPage/LoginContent';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../../data/reducers/userReducer';

const LoginPage : React.FC = () => {
    const [isLogin, setIsLogin] = useState<boolean | null>(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem('isLogin')){
            setIsLogin(true)
            const user = async () => {
                const getUser = await axios.get(`http://localhost:3760/api/users/${localStorage.userName}`)
                return getUser.data
            }
            user().then(user => {
                dispatch(addUser({
                    firstName: user.first_name,
                    lastName: user.last_name,
                    username: user.username,
                    email: user.email,
                    phone: user.phone,
                    isAdmin: user.is_admin,
                    companyId: user.company_id,
                    image: user.image_url,
                    theme: user.theme
                }))
                navigate('/main')
            }).catch(error => {
                console.log(error)
            })
        }
    },[])

    return (
        <LoginContent/>
    );
}

export default LoginPage;