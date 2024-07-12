import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Common/Header/Header';
import { Outlet, useNavigate } from 'react-router-dom';
import Footer from '../components/Common/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { addUser } from '../data/reducers/userReducer';
import { changeTheme } from '../data/reducers/ThemeReducer';
import { addCompany } from '../data/reducers/companyReducer';
import { addFavoriteCompany } from '../data/reducers/favoriteCompany';
import CompanyInterface from '../Interfaces/CompanyInterface';
import { RootState } from '../data/reducers/store';

const MainLayout : React.FC = () => {

    const [isLogin, setIsLogin] = useState<boolean | null>(false)
    const companies = useSelector((state : RootState) => state.companies.companies as CompanyInterface[])
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const effectRan = useRef(false)

    useEffect(() => {

        if (localStorage.getItem('isLogin')){
            setIsLogin(true)
            if (effectRan.current === false) {
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
                    const favorite_id = user.favorite_company
                    favorite_id.forEach((companyId: string) => {
                        const company = companies.find(company => company.id === companyId);
                        if (company) {
                            dispatch(addFavoriteCompany({
                                id: company.id,
                                name: company.name,
                                logo: company.logo,
                                slogan: company.slogan,
                                specialization: company.specialization
                            }));
                        }
                    });
                }).catch(error => {
                    console.log(error)
                })
            const getCompanies = async () => {
                const getCompanies = await axios.get(`http://localhost:3760/api/company/`)
                return getCompanies.data
            }
            getCompanies().then(async (companiesList) => {
                for (const company of companiesList) {
                    try {
                        console.log(company)
                        if (!companies.find(comp => comp.id === company.id)) {
                            dispatch(addCompany({
                                id: company.company_id,
                                name: company.company_name,
                                logo: company.logo,
                                slogan: company.slogan,
                                specialization: company.specialization,
                            }));
                        }
                    } catch (error) {
                        console.error(error);
                    }
                }
            });
            }
        }
        return () => {
            effectRan.current = true
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
