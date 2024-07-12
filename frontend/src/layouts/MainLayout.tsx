import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Common/Header/Header';
import { Outlet, useNavigate } from 'react-router-dom';
import Footer from '../components/Common/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { addUser } from '../data/reducers/userReducer';
import { changeTheme } from '../data/reducers/ThemeReducer';
import { addCompany, clearCompany } from '../data/reducers/companyReducer';
import { addFavoriteCompany } from '../data/reducers/favoriteCompany';
import CompanyInterface from '../Interfaces/CompanyInterface';
import { RootState } from '../data/reducers/store';
import { addProject, clearProject } from '../data/reducers/ProjectsReducer';
import { ProjectInterface } from '../Interfaces/ProjectInterface';
import { ApartmentInterface } from '../Interfaces/ApartmentInterface';
import { addApartment, clearApartment } from '../data/reducers/apartmentReducer';
import { CommentInterface } from '../Interfaces/CommentInterface';
import { addComment, clearComment } from '../data/reducers/commentsReducer';

const MainLayout : React.FC = () => {
    const companies = useSelector((state : RootState) => state.companies.companies as CompanyInterface[])
    const favoriteCompanies = useSelector((state : RootState) => state.favorite.favoriteCompanies as CompanyInterface[])
    const projects = useSelector((state : RootState) => state.projects.projects as ProjectInterface[])
    const apartments = useSelector((state : RootState) => state.apartments.apartments as ApartmentInterface[])
    const dispatch = useDispatch()
    const getComments = useSelector((state : RootState) => state.comments.comments as CommentInterface[])
    const navigate = useNavigate()
    const effectRan = useRef(false)

    useEffect(() => {

        if (localStorage.getItem('isLogin')){
            if (effectRan.current === false) {
                        const getCompanies = async () => {
                            const getCompanies = await axios.get(`http://localhost:3760/api/company/`)
                            return getCompanies.data
                        }
                        getCompanies().then(async (companiesList) => {
                            dispatch(clearCompany())
                            for (const company of companiesList) {
                                try {
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
                            const getProjects = async () => {
                                const getProjects = await axios.get(`http://localhost:3760/api/project/`)
                                return getProjects.data
                            }
                            getProjects().then(async (projectList) => {
                                dispatch(clearProject())
                                for (const project of projectList) {
                                    try {
                                        if (!projects.find(proj => proj.id === project.id)) {
                                            dispatch(addProject({
                                                title: project.project_name,
                                                id: project.project_id,
                                                type: project.project_type,
                                                description: project.description,
                                                posterUrl: 'https://msk.vnovoselie.ru/wp-content/uploads/2021/03/ZHK_Skandinaviya.jpg',
                                                companyId: project.company_id,
                                                watch: project.watch,
                                                poster: undefined
                                            }));
                                        }
                                    } catch (error) {
                                        console.error(error);
                                    }
                                }
                            }) 
                            const getApartments = async () => {
                                const getApartments = await axios.get(`http://localhost:3760/api/apartment/`)
                                return getApartments.data
                            }
                            getApartments().then(async (apartmentList) => {
                                dispatch(clearApartment())
                                for (const apartment of apartmentList) {
                                    try {
                                        if (!apartments.find(apart => apart.id === apartment.id)) {
                                            dispatch(addApartment({
                                                projectId: apartment.project_id,
                                                id: apartment.apartment_id,
                                                title: apartment.apartment_name,
                                                square: apartment.square,
                                                cost: apartment.apartment_cost,
                                                rooms: apartment.rooms,
                                                amount: apartment.amount,
                                                haveBalcony: apartment.have_balcony,
                                                isSale: apartment.is_sale,
                                                companyId: apartment.company_id,
                                                poster: "https://colodu.club/uploads/posts/2022-11/1667256273_15-colodu-club-p-interesnie-planirovki-domov-dizain-vkontak-16.jpg",
                                                description: apartment.description,
                                                type: apartment.apartment_type,
                                                watch: apartment.watch
                                            }));
                                        }
                                    } catch (error) {
                                        console.error(error);
                                    }
                                }
                            }) 
                            const favorite = async () => {
                                const getUser = await axios.get(`http://localhost:3760/api/users/${localStorage.userName}`)
                                return getUser.data
                            }
                            favorite().then(user => {
                                const favorite_id = user.favorite_company
                                favorite_id.forEach((companyId: string) => {
                                    const company = companies.find(company => company.id === companyId);
                                    if (company && !favoriteCompanies.some((company) => company.id === companyId)) {
                                        dispatch(addFavoriteCompany({
                                            id: company.id,
                                            name: company.name,
                                            logo: company.logo,
                                            slogan: company.slogan,
                                            specialization: company.specialization
                                        }));
                                    }
                                });
                            })
                            const comments = async () => {
                                const getComments = await axios.get('http://localhost:3760/api/comment/');
                                return getComments.data;
                            };
                            
                            comments().then(comments => {
                                dispatch(clearComment());
                                for (const comment of comments) {
                                    try {
                                            if (!getComments.some(com => com.id === comment.id)) {
                                                dispatch(addComment({
                                                    id: comment.id,
                                                    projectId: comment.project_id,
                                                    commentData: comment.comment_data,
                                                    apartmentId: comment.apartment_id,
                                                    companyId: comment.company_id,
                                                    username: comment.username
                                                }));
                                            }
                                    }catch (e) {
                                        console.log(e)
                                    }
                                } 
                            });
                }
            }
        return () => {
            effectRan.current = true
        }
    },[companies, dispatch, favoriteCompanies, navigate])

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

export default MainLayout;
