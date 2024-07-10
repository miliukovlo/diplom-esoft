import React, { useEffect, useState } from 'react';
import Header from '../components/Common/Header/Header';
import { Outlet, useNavigate } from 'react-router-dom';
import Footer from '../components/Common/Footer/Footer';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { addUser } from '../data/reducers/userReducer';
import { changeTheme } from '../data/reducers/ThemeReducer';

const MainLayout : React.FC = () => {

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
                    password: user.password,
                    theme: user.theme
                }))
                dispatch(changeTheme({
                    theme: user.theme
                }))
                navigate('/main')
            }).catch(error => {
                console.log(error)
            })
        }
    },[])

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

export default MainLayout;
